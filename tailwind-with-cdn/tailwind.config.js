/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    // spacing: {
    //   //kalo spacing dibawah tema, mengubah kode kelas awal/default, kalo extend menambahkan
    //   1: "10rem",
    // },
    extend: {
      spacing: {
        hamzah: "3.25rem",
        tugas34:"300px"
      },
      fontFamily:{
        'inter':["Inter"]
      },
      fontSize:{
        'pondok':['7rem']
      },
      colors:{
        'mouse':'dda15e',
        'keyboard':{
          100:"#606c38",
          900:'#283618',
        }

      }
    },
  },
  plugins: [],
};
