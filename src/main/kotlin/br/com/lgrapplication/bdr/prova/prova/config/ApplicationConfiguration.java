package br.com.lgrapplication.bdr.prova.prova.config;


import org.springframework.cloud.gcp.autoconfigure.datastore.DatastoreProvider;
import org.springframework.cloud.gcp.data.datastore.core.DatastoreTransactionManager;
import org.springframework.cloud.gcp.data.datastore.core.convert.DatastoreCustomConversions;
import org.springframework.cloud.gcp.data.datastore.repository.config.EnableDatastoreAuditing;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.Arrays;

@Configuration
@EnableTransactionManagement
@EnableDatastoreAuditing
public class ApplicationConfiguration {


    @Bean
    DatastoreTransactionManager datastoreTransactionManager(DatastoreProvider datastore) {
        return new DatastoreTransactionManager(datastore);
    }


}
