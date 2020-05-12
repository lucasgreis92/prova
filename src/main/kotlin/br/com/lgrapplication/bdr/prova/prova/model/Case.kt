package br.com.lgrapplication.bdr.prova.prova.model

import br.com.lgrapplication.bdr.prova.prova.model.enum.Access
import org.springframework.cloud.gcp.data.datastore.core.mapping.Entity
import org.springframework.data.annotation.Id
import java.time.LocalDateTime
import java.util.*
import javax.annotation.Generated
import javax.validation.constraints.Max
import javax.validation.constraints.NotNull
import javax.xml.bind.annotation.XmlEnumValue

@Entity
data class Case (
        @Id
        @Generated()
        var id: String = UUID.randomUUID().toString(),
        @Max(40)
        val folder : String,
        @NotNull
        val client : String,
        @NotNull
        val title : String,
        val tags: List<String>,
        val description: String,
        val comments: String,
        val responsible: String,
        val access: Access,
        @NotNull
        val dtCreated : LocalDateTime = LocalDateTime.now()) {
        //constructor() {
                //()
                //@Enumerated(EnumType.STRING)
        //}
}
