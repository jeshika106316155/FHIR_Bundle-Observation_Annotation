{
    "resourceType": "Bundle",
    "id": "TCUMI.Bundle.skinlesiondocument01",
    "meta": {
      "versionId": "8",
      "lastUpdated": "2023-06-23T21:38:29.121+08:00",
      "source": "#aAA0KSaaYsw2novo"
    },
    "identifier": {
      "system": "https://docs.google.com/spreadsheets/d/1BBBZZbEO82wkvLbHtbpa4ihdFTMoIG0KQGH5bgUoo70/edit#gid=213229946",
      "value": "TCUMI.Bundle.skinlesiondocument01"
    },
    "type": "document",
    "timestamp": "2023-06-14T22:12:21Z",
    "entry": [
      {
        "fullUrl": "https://203.64.84.150:58443/r5/fhir/Composition/TCUMI.Composition02",
        "resource": {
          "resourceType": "Composition",
          "id": "TCUMI.Composition02",
          "meta": {
            "versionId": "3",
            "lastUpdated": "2023-06-20T21:25:08.217+08:00",
            "source": "#yXN9Bdd47VgYYOaq"
          },
          "status": "final",
          "type": {
            "coding": [
              {
                "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                "code": " skinlesion.report",
                "display": "Skin lesion report"
              }
            ]
          },
          "category": [
            {
              "coding": [
                {
                  "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                  "code": "18748-4",
                  "display": "Diagnostic imaging study"
                }
              ]
            },
            {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "87416-4",
                  "display": "Diagnostic imaging report - recommended DICOM PS3.20 sections"
                }
              ]
            },
            {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "81220-6",
                  "display": "Diagnostic imaging report - recommended C-CDA R2.0 and R2.1 sections"
                }
              ]
            },
            {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "72230-6",
                  "display": "Diagnostic imaging report - recommended C-CDA R1.1 sections"
                }
              ]
            }
          ],
          "subject": [
            {
              "reference": "Patient/TCUMI.Patient01",
              "display": "Billy Smith"
            }
          ],
          "date": "2023-06-14T13:48:48.48+08:00",
          "author": [
            {
              "reference": "PractitionerRole/TCUMI.PractitionerRole02",
              "display": "Dr. Lissa Carte"
            }
          ],
          "title": "Skin lesion report",
          "custodian": {
            "reference": "Organization/TCUMI.Organization01",
            "display": "Jian Hospital"
          },
          "section": [
            {
              "entry": [
                {
                  "reference": "Organization/TCUMI.Organization01"
                },
                {
                  "reference": "Patient/TCUMI.Patient01"
                },
                {
                  "reference": "PractitionerRole/TCUMI.PractitionerRole02"
                },
                {
                  "reference": "DocumentReference/TCUMI.skinlesionimagestudy01"
                },
                {
                  "reference": "Observation/TCUMI.Observation.annotation01"
                },
                {
                  "reference": "Observation/TCUMI.Observation.finding01"
                },
                {
                  "reference": "DiagnosticReport/TCUMI.DiagnosticReport.skinlesion01"
                }
              ]
            }
          ]
        }
      },
      {
        "fullUrl": "https://203.64.84.150:58443/r5/fhir/Organization/TCUMI.Organization01",
        "resource": {
          "resourceType": "Organization",
          "id": "TCUMI.Organization01",
          "meta": {
            "versionId": "1",
            "lastUpdated": "2023-06-15T01:41:20.039+08:00",
            "source": "#YMJQ3KS6s2OvOcnA"
          },
          "identifier": [
            {
              "use": "official",
              "system": "HOSP_RowId",
              "value": "3"
            },
            {
              "use": "usual",
              "system": "HOSP_Code",
              "value": "8890"
            }
          ],
          "active": true,
          "type": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/organization-type",
                  "code": "prov",
                  "display": "Healthcare Provider"
                }
              ]
            }
          ],
          "name": "Jian Hospital",
          "contact": [
            {
              "purpose": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
                    "code": "ADMIN",
                    "display": "Administrative"
                  }
                ]
              },
              "name": [
                {
                  "text": "Emergency"
                }
              ],
              "telecom": [
                {
                  "system": "phone",
                  "value": "(021)50950800",
                  "use": "work"
                }
              ]
            },
            {
              "purpose": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
                    "code": "ADMIN",
                    "display": "Administrative"
                  }
                ]
              },
              "name": [
                {
                  "text": "Call Center Telephone"
                }
              ],
              "telecom": [
                {
                  "system": "phone",
                  "value": "(03)50950888",
                  "use": "work"
                }
              ]
            },
            {
              "purpose": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
                    "code": "ADMIN",
                    "display": "Administrative"
                  }
                ]
              },
              "name": [
                {
                  "text": "Call Center WA"
                }
              ],
              "telecom": [
                {
                  "system": "other",
                  "value": "(+886)909678987",
                  "use": "work"
                }
              ]
            }
          ]
        }
      },
      {
        "fullUrl": "https://203.64.84.150:58443/r5/fhir/PractitionerRole/TCUMI.PractitionerRole02",
        "resource": {
          "resourceType": "PractitionerRole",
          "id": "TCUMI.PractitionerRole02",
          "meta": {
            "versionId": "3",
            "lastUpdated": "2023-06-20T18:45:33.645+08:00",
            "source": "#QksGenXsuRqHbUbm"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n\t\t\t\tDr. Lissa Carte is a Referring Practitioner for Jian Hospital from 1-Jan 2012 to 31-December\n\t\t\t\t2023\n\t\t\t</p>\n\t\t</div>"
          },
          "identifier": [
            {
              "system": "https://docs.google.com/spreadsheets/d/1BBBZZbEO82wkvLbHtbpa4ihdFTMoIG0KQGH5bgUoo70/edit#gid=1319234787",
              "value": "JianHospital_Practitioner02"
            }
          ],
          "active": true,
          "period": {
            "start": "2012-01-01",
            "end": "2023-12-31"
          },
          "practitioner": {
            "reference": "Practitioner/TCUMI.Practitioner02",
            "display": "Dr. Lissa Carte"
          },
          "organization": {
            "reference": "Organization/TCUMI.Organization01",
            "display": "Jian Hospital"
          },
          "code": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0286",
                  "code": "RP",
                  "display": "Referring Provider"
                }
              ]
            }
          ],
          "specialty": [
            {
              "coding": [
                {
                  "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                  "code": "dermatologist",
                  "display": "Dermatologist"
                }
              ]
            }
          ],
          "contact": [
            {
              "telecom": [
                {
                  "system": "phone",
                  "value": "(03) 5555 6473",
                  "use": "work"
                },
                {
                  "system": "email",
                  "value": "lissacarte@gmail.com",
                  "use": "work"
                }
              ]
            }
          ],
          "availability": [
            {
              "availableTime": [
                {
                  "daysOfWeek": [
                    "mon",
                    "tue",
                    "wed"
                  ],
                  "availableStartTime": "09:00:00",
                  "availableEndTime": "16:30:00"
                },
                {
                  "daysOfWeek": [
                    "thu",
                    "fri"
                  ],
                  "availableStartTime": "09:00:00",
                  "availableEndTime": "12:00:00"
                }
              ],
              "notAvailableTime": [
                {
                  "description": "Dr. Lissa Carte be on extended leave during May 2017",
                  "during": {
                    "start": "2017-05-01",
                    "end": "2017-05-20"
                  }
                },
                {
                  "description": "Dr. Lissa Carte is generally unavailable on public holidays and during the Christmas/New Year break"
                }
              ]
            }
          ]
        }
      },
      {
        "fullUrl": "https://203.64.84.150:58443/r5/fhir/Patient/TCUMI.Patient01",
        "resource": {
          "resourceType": "Patient",
          "id": "TCUMI.Patient01",
          "meta": {
            "versionId": "4",
            "lastUpdated": "2023-06-19T23:56:20.376+08:00",
            "source": "#pXS4dqIZfSNieVMa"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table class=\"hapiPropertyTable\"><tbody/></table></div>"
          },
          "identifier": [
            {
              "system": "http://www.boca.gov.tw/",
              "value": "310942728"
            },
            {
              "system": "https://docs.google.com/spreadsheets/d/1BBBZZbEO82wkvLbHtbpa4ihdFTMoIG0KQGH5bgUoo70/edit#gid=1986712865",
              "value": "JianHospital_Patient01"
            }
          ],
          "name": [
            {
              "text": "Billy Smith",
              "family": "Smith",
              "given": [
                "Billy"
              ]
            }
          ],
          "gender": "male",
          "birthDate": "2000-03-03T01:52:25.835+08:00",
          "managingOrganization": {
            "reference": "Organization/TCUMI.Organization01",
            "display": "Jian Hospital"
          }
        }
      },
      {
        "fullUrl": "https://203.64.84.150:58443/r5/fhir/DocumentReference/TCUMI.skinlesionimagestudy01",
        "resource": {
          "resourceType": "DocumentReference",
          "id": "TCUMI.skinlesionimagestudy01",
          "meta": {
            "versionId": "5",
            "lastUpdated": "2023-06-20T00:49:21.715+08:00",
            "source": "#XQ5tXYFlKtKKiLin"
          },
          "status": "current",
          "docStatus": "final",
          "type": {
            "coding": [
              {
                "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                "code": "skinlesion.imagestudy",
                "display": "Skin lesion image study"
              }
            ]
          },
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/media-category",
                  "code": "image",
                  "display": "Image"
                },
                {
                  "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                  "code": "skinlesion.image",
                  "display": "Skin lesion image"
                }
              ]
            }
          ],
          "subject": {
            "reference": "Patient/TCUMI.Patient01",
            "display": "Billy Smith"
          },
          "date": "2023-06-11T00:26:24.24+08:00",
          "author": [
            {
              "reference": "PractitionerRole/TCUMI.PractitionerRole02",
              "display": "Dr. Lissa Carte"
            }
          ],
          "description": "This is document reference for recording skin lesion examination attached images",
          "content": [
            {
              "attachment": {
                "contentType": "image/jpeg",
                "url": "http://203.64.84.32:9876/getfile/skin-lesion/images/slms.encounter01/wholebody_skinlesionwholebody01.JPG",
                "title": "wholebody_skinlesionwholebody01.JPG"
              }
            },
            {
              "attachment": {
                "contentType": "image/jpeg",
                "url": "http://203.64.84.32:9876/getfile/skin-lesion/images/slms.encounter01/wholebody_skinlesionwholebody02.JPG",
                "title": "wholebody_skinlesionwholebody02.JPG"
              }
            },
            {
              "attachment": {
                "contentType": "image/jpeg",
                "url": "http://203.64.84.32:9876/getfile/skin-lesion/images/slms.encounter01/bodyshot_skinlesionbodyshot01.JPG",
                "title": "bodyshot_skinlesionbodyshot01.JPG"
              }
            },
            {
              "attachment": {
                "contentType": "image/jpeg",
                "url": "http://203.64.84.32:9876/getfile/skin-lesion/images/slms.encounter01/bodyshot_skinlesionbodyshot02.JPG",
                "title": "bodyshot_skinlesionbodyshot02.JPG"
              }
            },
            {
              "attachment": {
                "contentType": "image/jpeg",
                "url": "http://203.64.84.32:9876/getfile/skin-lesion/images/slms.encounter01/bodyshot_skinlesionbodyshot03.JPG",
                "title": "bodyshot_skinlesionbodyshot03.JPG"
              }
            },
            {
              "attachment": {
                "contentType": "image/jpeg",
                "url": "http://203.64.84.32:9876/getfile/skin-lesion/images/slms.encounter01/macrodermoscopic_skinlesionmacrodermoscopic01.JPG",
                "title": "macrodermoscopic_skinlesionmacrodermoscopic01.JPG"
              }
            },
            {
              "attachment": {
                "contentType": "image/jpeg",
                "url": "http://203.64.84.32:9876/getfile/skin-lesion/images/slms.encounter01/macrodermoscopic_skinlesionmacrodermoscopic02.JPG",
                "title": "macrodermoscopic_skinlesionmacrodermoscopic02.JPG"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://203.64.84.150:58443/r5/fhir/Observation/TCUMI.Observation.annotation01",
        "resource": {
          "resourceType": "Observation",
          "id": "TCUMI.Observation.annotation01",
          "meta": {
            "versionId": "4",
            "lastUpdated": "2023-06-20T17:15:34.915+08:00",
            "source": "#njngVwUhA01wzjYI"
          },
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "imaging",
                  "display": "Imaging"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "48767-8",
                "display": "Annotation comment [Interpretation] Narrative"
              },
              {
                "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                "code": "image.annotation",
                "display": "Image annotation"
              }
            ]
          },
          "subject": {
            "reference": "Patient/TCUMI.Patient01",
            "display": "Billy Smith"
          },
          "effectiveDateTime": "2023-06-14T13:47:52.52+08:00",
          "performer": [
            {
              "reference": "PractitionerRole/TCUMI.PractitionerRole02",
              "display": "Dr. Lissa Carte"
            }
          ],
          "derivedFrom": [
            {
              "reference": "DocumentReference/TCUMI.skinlesionimagestudy01"
            }
          ],
          "component": [
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "annotation.svg",
                    "display": "SVG Annotation"
                  }
                ]
              },
              "valueAttachment": {
                "contentType": "image/svg+xml",
                "data": "IDxzdmcgd2lkdGg9IjMwMDgiIGhlaWdodD0iMjAwMCI+CiA8cmVjdCB4PSIyOTAiIHk9IjU1NyIgd2lkdGg9IjIwMDAiIGhlaWdodD0iMTQwMCIgc3Ryb2tlPSJyZWQiIHN0cm9rZS13aWR0aD0iMTAiIGZpbGw9Im5vbmUiLz48L3N2Zz4="
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "annotated.image",
                    "display": "Annotated image"
                  }
                ]
              },
              "valueAttachment": {
                "contentType": "image/jpeg",
                "url": "http://203.64.84.32:9876/getfile/skin-lesion/images/slms.encounter01/macrodermoscopic_skinlesionmacrodermoscopic01.JPG",
                "title": "macrodermoscopic_skinlesionmacrodermoscopic01.JPG"
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://203.64.84.150:58443/r5/fhir/Observation/TCUMI.Observation.finding01",
        "resource": {
          "resourceType": "Observation",
          "id": "TCUMI.Observation.finding01",
          "meta": {
            "versionId": "4",
            "lastUpdated": "2023-06-20T17:49:57.659+08:00",
            "source": "#iVNdOcDKjgAwSaiJ"
          },
          "identifier": [
            {
              "use": "official",
              "system": "https://docs.google.com/spreadsheets/d/1BBBZZbEO82wkvLbHtbpa4ihdFTMoIG0KQGH5bgUoo70/edit#gid=1963186826",
              "value": "Lesion01"
            }
          ],
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                  "code": "imaging",
                  "display": "Imaging"
                }
              ]
            },
            {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "18782-3",
                  "display": "Radiology Study observation (findings)"
                },
                {
                  "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                  "code": "image.finding",
                  "display": "Image Finding"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                "code": "skinlesion.image.finding",
                "display": "Skin lesion image finding"
              }
            ]
          },
          "subject": {
            "reference": "Patient/TCUMI.Patient01",
            "display": "Billy Smith"
          },
          "effectiveDateTime": "2023-06-11T13:48:17.17+08:00",
          "performer": [
            {
              "reference": "PractitionerRole/TCUMI.PractitionerRole02",
              "display": "Dr. Lissa Carte"
            }
          ],
          "bodySite": {
            "coding": [
              {
                "system": "http://purl.bioontology.org/ontology/SNOMEDCT/",
                "code": "48979004",
                "display": "Structure of left lower leg"
              }
            ]
          },
          "derivedFrom": [
            {
              "reference": "Observation/TCUMI.Observation.annotation01"
            }
          ],
          "component": [
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "skin.type",
                    "display": "Skin type"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://loinc.org/",
                    "code": "LA15337-1",
                    "display": "Skin-type I: very fair skin, blond or red hair, light eyes (blue or green), never tan and always sunburn after sun exposure"
                  }
                ]
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "PersonalHxmelanoma",
                    "display": "Personal Hx melanoma"
                  }
                ]
              },
              "valueBoolean": true
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "FamilyHxmelanoma",
                    "display": "Family Hx melanoma"
                  }
                ]
              },
              "valueBoolean": true
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "skinlesion.length",
                    "display": "Skin lesion length"
                  }
                ]
              },
              "valueQuantity": {
                "value": 1,
                "unit": "mm",
                "system": "http://unitsofmeasure.org",
                "code": "mm"
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "skinlesion.width",
                    "display": "Skin lesion width"
                  }
                ]
              },
              "valueQuantity": {
                "value": 1,
                "unit": "mm",
                "system": "http://unitsofmeasure.org",
                "code": "mm"
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "skinlesion.depth",
                    "display": "Skin lesion depth"
                  }
                ]
              },
              "valueQuantity": {
                "value": 1,
                "unit": "mm",
                "system": "http://unitsofmeasure.org",
                "code": "mm"
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "skinlesion.arrangement",
                    "display": "Skin lesion arrangement"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "asymmetry",
                    "display": "Asymmetry"
                  }
                ]
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "skinlesion.border",
                    "display": "Skin lesion border"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "well-demarcated",
                    "display": "Well-demarcated"
                  }
                ]
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "skinlesion.color",
                    "display": "Skin lesion color"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "white",
                    "display": "White"
                  }
                ]
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "skinlesion.evolution",
                    "display": "Skin lesion evolution"
                  }
                ]
              },
              "valueBoolean": true
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "skinlesion.primarymorphology",
                    "display": "Skin lesion primary morphology"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "macule",
                    "display": "Macule"
                  }
                ]
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "skinlesion.secondarychange",
                    "display": "Skin lesion secondary change"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "scale",
                    "display": "Scale"
                  }
                ]
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "skinlesion.shapeconfiguration",
                    "display": "Skin lesion shape and configuration"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "annular",
                    "display": "Annular"
                  }
                ]
              }
            },
            {
              "code": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "skinlesion.reactionpattern",
                    "display": "Skin lesion reaction pattern"
                  }
                ]
              },
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                    "code": "papulosquamous",
                    "display": "Papulosquamous"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "fullUrl": "https://203.64.84.150:58443/r5/fhir/DiagnosticReport/TCUMI.DiagnosticReport.skinlesion01",
        "resource": {
          "resourceType": "DiagnosticReport",
          "id": "TCUMI.DiagnosticReport.skinlesion01",
          "meta": {
            "versionId": "4",
            "lastUpdated": "2023-06-20T20:56:15.132+08:00",
            "source": "#UTMIu5QKvxhSqf6v"
          },
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\"> Skin lesion report </div><table class=\"hapiPropertyTable\"><tbody><tr><td>Status</td><td>FINAL</td></tr><tr><td>Issued</td><td> 14 June 2023 13:48:45</td></tr><tr><td>Conclusion</td><td>No change in the number of lesion compare with last examination.There is not exist new lesion of Lesion01 in current examination compare with last examination.There is not Disappear lesion of Lesion01 in current examination compare with last examination.</td></tr></tbody></table></div>"
          },
          "status": "final",
          "category": [
            {
              "coding": [
                {
                  "system": "https://loinc.org",
                  "code": "LP32891-1",
                  "display": "Dermatology"
                }
              ]
            },
            {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                  "code": "IMG",
                  "display": "Diagnostic Imaging"
                }
              ]
            }
          ],
          "code": {
            "coding": [
              {
                "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
                "code": "skinlesion.report",
                "display": "Skin lesion report"
              }
            ]
          },
          "subject": {
            "reference": "Patient/TCUMI.Patient01",
            "display": "Billy Smith"
          },
          "encounter": {
            "reference": "Encounter/TCUMI.Encounter.dermatology01"
          },
          "effectiveDateTime": "2023-06-14T13:48:45.45+08:00",
          "issued": "2023-06-14T13:48:45.45+08:00",
          "performer": [
            {
              "reference": "Organization/TCUMI.Organization01",
              "display": "Jian Hospital"
            }
          ],
          "resultsInterpreter": [
            {
              "reference": "PractitionerRole/TCUMI.PractitionerRole02",
              "display": "Dr. Lissa Carte"
            }
          ],
          "result": [
            {
              "reference": "Observation/TCUMI.Observation.finding01"
            }
          ],
          "media": [
            {
              "link": {
                "reference": "DocumentReference/TCUMI.skinlesionimagestudy01"
              }
            }
          ],
          "conclusion": "\nNo change in the number of lesion compare with last examination.\nThere is not exist new lesion of Lesion01 in current examination compare with last examination.\nThere is not Disappear lesion of Lesion01 in current examination compare with last examination.",
          "conclusionCode": [
            {
              "coding": [
                {
                  "system": "https://www.icd10data.com/",
                  "code": "L40",
                  "display": "Psoriasis"
                }
              ]
            }
          ]
        }
      }
    ]
  }