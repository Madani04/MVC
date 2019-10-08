$(function(){

    $('.tombolTambahData').on('click', function(){
        $('#judulModal').html('tambah data Mahasiswa');
        $('.modal-footer button[type=submit]').html('tambah data');
    });

    $('.tampilModalUbah').on('click', function(){
        $('#judulModal').html('ubah data Mahasiswa');
        $('.modal-footer button[type=submit]').html('ubah data');
        $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/mahasiswa/ubah');

        const id = $(this).data('id');
        
         jQuery.ajax({
            url: 'http://localhost/phpmvc/public/mahasiswa/getubah',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data){
                $('#nama').val(data.nama);
                $('#nrp').val(data.nrp);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });

    });

});