/*

UFAK CİHAZLAR İÇİN MENU AÇMA BUTONUNUN İŞLEMLERİ 

*/

$(document).ready(function() {

    $("#HeaderMenuAcmaButonuAlani").click(function() {
        $("#HeaderMenuAcmaButonuMenuSinirlamaAlani").slideToggle("slow");
    });



    /*

    MAIN VE FOOTER ALANI İÇİN ÜSTTEN BOŞLUK HESAPLAMALARI 

    */

    var DokumanGenisligi = $(window).outerWidth();
    var OfsetDegeri = 0;

    if (!$("#HeaderMesajAlani").length) {
        if (DokumanGenisligi >= 1200) {
            OfsetDegeri = 108;
        } else if ((DokumanGenisligi >= 992) && (DokumanGenisligi <= 1199)) {
            OfsetDegeri = 98;
        } else if ((DokumanGenisligi >= 768) && (DokumanGenisligi <= 991)) {
            OfsetDegeri = 88;
        } else if ((DokumanGenisligi >= 576) && (DokumanGenisligi <= 767)) {
            OfsetDegeri = 78;
        } else if (DokumanGenisligi <= 574) {
            OfsetDegeri = 78;
        }
    } else {
        if (DokumanGenisligi >= 1200) {
            OfsetDegeri = 148;
        } else if ((DokumanGenisligi >= 992) && (DokumanGenisligi <= 1199)) {
            OfsetDegeri = 138;
        } else if ((DokumanGenisligi >= 768) && (DokumanGenisligi <= 991)) {
            OfsetDegeri = 118;
        } else if ((DokumanGenisligi >= 576) && (DokumanGenisligi <= 767)) {
            OfsetDegeri = 108;
        } else if (DokumanGenisligi <= 574) {
            OfsetDegeri = 103;
        }
    }
    $("main").css("top", OfsetDegeri);
    $("footer").css("top", OfsetDegeri);
    $(window).resize(function() {
        var DokumanGenisligi = $(window).outerWidth();
        if (!$("#HeaderMesajAlani").length) {
            if (DokumanGenisligi >= 1200) {
                OfsetDegeri = 108;
            } else if ((DokumanGenisligi >= 992) && (DokumanGenisligi <= 1199)) {
                OfsetDegeri = 98;
            } else if ((DokumanGenisligi >= 768) && (DokumanGenisligi <= 991)) {
                OfsetDegeri = 88;
            } else if ((DokumanGenisligi >= 576) && (DokumanGenisligi <= 767)) {
                OfsetDegeri = 78;
            } else if (DokumanGenisligi <= 574) {
                OfsetDegeri = 78;
            }
        } else {
            if (DokumanGenisligi >= 1200) {
                OfsetDegeri = 148;
            } else if ((DokumanGenisligi >= 992) && (DokumanGenisligi <= 1199)) {
                OfsetDegeri = 138;
            } else if ((DokumanGenisligi >= 768) && (DokumanGenisligi <= 991)) {
                OfsetDegeri = 118;
            } else if ((DokumanGenisligi >= 576) && (DokumanGenisligi <= 767)) {
                OfsetDegeri = 108;
            } else if (DokumanGenisligi <= 574) {
                OfsetDegeri = 103;
            }
        }
        $("main").css("top", OfsetDegeri);
        $("footer").css("top", OfsetDegeri);
    });
});