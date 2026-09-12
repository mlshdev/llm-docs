> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betagroups-_id_-betarecruitmentcriteria](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betagroups-_id_-betarecruitmentcriteria)

# Read Recruitment Criteria for a Beta Group

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.8+

Get the recruitment criteria information for a specific beta group.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaGroups/{id}/betaRecruitmentCriteria
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the beta group resource ID from the [List beta groups](get-v1-betagroups.md) response.

## Query Parameters

- `fields[betaRecruitmentCriteria]` — `[string]`: **Allowed values:** `lastModifiedDate`, `deviceFamilyOsVersionFilters`

## Response Codes

- `200` OK — `BetaRecruitmentCriterionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Beta Group Information

- [List beta groups](get-v1-betagroups.md): Find and list beta groups for all apps.
- [Read beta group information](get-v1-betagroups-_id_.md): Get a specific beta group.
- [Read the app information of a beta group](get-v1-betagroups-_id_-app.md): Get the app information for a specific beta group.
- [Get the app ID for a beta group](get-v1-betagroups-_id_-relationships-app.md)
- [Read Metrics for Beta Testers in a Beta Group](get-v1-betagroups-_id_-metrics-betatesterusages.md): Get beta tester usage metrics for a beta group.
- [List beta recruitment criterion IDs for a beta group](get-v1-betagroups-_id_-relationships-betarecruitmentcriteria.md)
- [Read build compatibility for a beta group](get-v1-betagroups-_id_-betarecruitmentcriterioncompatiblebuildcheck.md): Get the build compatibility information for a specific beta group.
- [Get the compatible build check ID for a beta group recruitment criterion](get-v1-betagroups-_id_-relationships-betarecruitmentcriterioncompatiblebuildcheck.md)
