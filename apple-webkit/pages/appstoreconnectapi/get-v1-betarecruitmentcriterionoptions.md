> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betarecruitmentcriterionoptions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betarecruitmentcriterionoptions)

# Read recruitment criteria options

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.8+

Get a list of the possible beta recruitment criteria options.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaRecruitmentCriterionOptions
```

## Query Parameters

- `fields[betaRecruitmentCriterionOptions]` — `[string]`: **Allowed values:** `deviceFamilyOsVersions`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `BetaRecruitmentCriterionOptionsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Resending Invitations

- [Create Recruitment Criteria](post-v1-betarecruitmentcriteria.md): Create new criteria for recruiting testers for your TestFlight build.
- [Modify Recruitment Criteria](patch-v1-betarecruitmentcriteria-_id_.md): Update the recruitment criteria for your TestFlight build.
- [Remove recruitment criteria](delete-v1-betarecruitmentcriteria-_id_.md): Remove the recruitment criteria for your TestFlight build.
- [Read Recruitment Criteria for a Beta Group](get-v1-betagroups-_id_-betarecruitmentcriteria.md): Get the recruitment criteria information for a specific beta group.
- [Read build compatibility for a beta group](get-v1-betagroups-_id_-betarecruitmentcriterioncompatiblebuildcheck.md): Get the build compatibility information for a specific beta group.
