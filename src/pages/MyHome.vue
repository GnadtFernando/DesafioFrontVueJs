<template>
  <main>
    <div id="quali-form">
      <label form="nomeCliente">Nome</label>
      <input placeholder="Nome" />
    </div>
    <label form="endereco">Informe o endereço</label>
    <select>
      <option value="" v-for="endereco in endereco" v-bind:key="endereco">
        {{ endereco }}
      </option>
    </select>
    <div>
      <input placeholder="Estado" />
    </div>
    <label form="profissao">Informe sua profissâo</label>
    <select>
      <option value="" v-for="profissao in profissao" v-bind:key="profissao.id">
        {{ profissao.profissao }}
      </option>
    </select>
    <div>
      <label form="entidade">Informe a entidade</label>
      <select>
        <option value="" v-for="entidade in entidade" v-bind:key="entidade.id">
          {{ entidade.NomeFantasia }} {{ entidade.RazaoSocial }}
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
          console.log(response.data);
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

#quali-form {
  max-width: 300px;
  margin: 0 auto;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: white;
  padding: 5px 10px;
  border-left: 4px solid #3ff7bf;
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