> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-betarecruitmentcriteria](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-betarecruitmentcriteria)

# Create Recruitment Criteria

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.8+

Create new criteria for recruiting testers for your TestFlight build.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/betaRecruitmentCriteria
```

## HTTP Body

Content type: `application/json`

Type: `BetaRecruitmentCriterionCreateRequest`

## Response Codes

- `201` Created — `BetaRecruitmentCriterionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Resending Invitations

- [Modify Recruitment Criteria](patch-v1-betarecruitmentcriteria-_id_.md): Update the recruitment criteria for your TestFlight build.
- [Remove recruitment criteria](delete-v1-betarecruitmentcriteria-_id_.md): Remove the recruitment criteria for your TestFlight build.
- [Read Recruitment Criteria for a Beta Group](get-v1-betagroups-_id_-betarecruitmentcriteria.md): Get the recruitment criteria information for a specific beta group.
- [Read build compatibility for a beta group](get-v1-betagroups-_id_-betarecruitmentcriterioncompatiblebuildcheck.md): Get the build compatibility information for a specific beta group.
- [Read recruitment criteria options](get-v1-betarecruitmentcriterionoptions.md): Get a list of the possible beta recruitment criteria options.
