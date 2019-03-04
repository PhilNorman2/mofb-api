const config = {
    test_env: "test",
    test_port: 3001,
    development: {
        host: "https://ckan.smartcolumbusos.com/",
        agency_location_resource: "570a8e02-fb0e-4cee-895b-3b32bd740650",
        service_location_resource: "ec24773c-7cff-4589-9e2f-bcdeb5cdfd48",
        taxonomy_resource: "371dd944-411c-4851-a065-9f3f605ddfb9",
        service_taxonomy_resource: "2a919af7-12d3-47a4-b86a-56692e2e1623",
        agency_service_resource: "49b19dab-a7a8-4049-add2-7a0a1f0cce07",
        agency_resource: "6425f64b-f162-4cd4-b271-5038b6752df5"
    },
    test: {
        host: "testHost",
        agency_location_resource: "testAgencyLocationResource",
        service_location_resource: "testServiceLocationResource",
        taxonomy_resource: "testTaxonomyResource",
        service_taxonomy_resource: "testServiceTaxonomyResource",
        agency_service_resource: "testAgencyServiceResource",
        agency_resource: "testAgencyResource"
    }
};

module.exports = config;