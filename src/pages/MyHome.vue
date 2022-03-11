<template>
  <main>
     <div>
      <input placeholder="Nome" />
    </div>
    <div>
      <input placeholder="Cidade" />
    </div>
    <div>
      <input placeholder="Estado" />
    </div>
    <select>
      <option value="" v-for="profissao in profissao" v-bind:key="profissao.id">
        {{ profissao.profissao }}
      </option>
    </select>
    <div>
      <select>
      <option value="" v-for="entidade in entidade" v-bind:key="entidade.id">
        {{ entidade.NomeFantasia }} {{entidade.RazaoSocial}}
      </option>
    </select>
    </div>
    <div>
      <button>Enviar</button>
    </div>
  </main>
</template>

<script>
import api from "@/services/api.js";

export default {
  name: "MyHome",
  data() {
    return {
      endereco: [],
      profissao: [],
      entidade: [],
    };
  },

  mounted() {
    api
      .get(
        "/endereco/Enderecos/13480-460?api-key=92344d33-65ee-4a33-a3a2-a1fb7fcd65a7"
      )
      .then((response) => {
        this.endereco = response.data;
        console.log(response.data);
      }),
      api
        .get(
          "/profissao/SP/Limeira?api-key=eebc059d-6838-4762-8e28-d2f726753866"
        )
        .then((response) => {
          this.profissao = response.data;
        }),
      api
        .get(
          "/entidade/Aerovi%C3%A1rio/SP/Limeira?api-key=f1e6c49a-ca38-45d7-984a-616ff4fb458a"
        )
        .then((response) => {
          this.entidade = response.data;
        });
  },
};
</script>

<style scoped>
main {
  background-color: #344960;
  text-align: center;
}
select {
  margin-top: 10px;
}
input {
  margin-top: 10px;
}
button {
  margin-top: 10px;
}
</style>