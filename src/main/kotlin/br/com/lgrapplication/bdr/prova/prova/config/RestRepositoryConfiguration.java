package br.com.lgrapplication.bdr.prova.prova.config;


import br.com.lgrapplication.bdr.prova.prova.model.Case;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
/*@EnableEntityLinks
@EnableHypermediaSupport(type = EnableHypermediaSupport.HypermediaType.HAL)
@ComponentScan(basePackageClasses = {ObjectMapperCustomizer.class, ModuleRegistry.class})*/
public class RestRepositoryConfiguration extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
      super.configureRepositoryRestConfiguration(config);
        config.exposeIdsFor(new Class[]{Case.class});
    }
}
