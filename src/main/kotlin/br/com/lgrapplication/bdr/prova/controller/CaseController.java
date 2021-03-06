package br.com.lgrapplication.bdr.prova.controller;

import br.com.lgrapplication.bdr.prova.model.Case;
import br.com.lgrapplication.bdr.prova.repository.CaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("rs/v1/case")
public class CaseController {

    @Autowired
    private CaseRepository caseRepository;

    @PostMapping
    public List<Case> saveAll(@RequestBody List<Case> cases) {
        return (List<Case>) caseRepository.saveAll(cases);
    }


}
