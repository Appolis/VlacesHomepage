angular.module("VlacesMainModule")
    .factory("Vlace", function VlaceFactory() {
    return {
        all: function() {
            return $http({ method: "GET", url: "/vlaces" });
        },
        create: function(vlace) {
            return $http({ method: "POST", url: "/vlaces", data: vlace });
        }
    }
});
