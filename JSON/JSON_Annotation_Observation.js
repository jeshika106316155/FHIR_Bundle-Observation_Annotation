var annotationObservation = {
    "resourceType": "Observation",
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