package br.com.lgrapplication.bdr.prova.repository;

import br.com.lgrapplication.bdr.prova.model.Case;
import org.springframework.cloud.gcp.data.datastore.repository.DatastoreRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;



@RepositoryRestResource(collectionResourceRel = "case", path = "case")
public interface CaseRepository extends DatastoreRepository<Case, String> {


}
