> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appinfos-_id_-ageratingdeclaration](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appinfos-_id_-ageratingdeclaration)

# Read the age-rating declaration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.4+

Get the age-rating declaration for an app info.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appInfos/{id}/ageRatingDeclaration
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `appInfo` resource ID from the [List all app infos for an app](get-v1-apps-_id_-appinfos.md) response.

## Query Parameters

- `fields[ageRatingDeclarations]` — `[string]`: Additional fields to include for each age-rating declaration resource that the response returns.
  **Allowed values:** `advertising`, `alcoholTobaccoOrDrugUseOrReferences`, `contests`, `gambling`, `gamblingSimulated`, `gunsOrOtherWeapons`, `healthOrWellnessTopics`, `kidsAgeBand`, `lootBox`, `medicalOrTreatmentInformation`, `messagingAndChat`, `parentalControls`, `profanityOrCrudeHumor`, `ageAssurance`, `sexualContentGraphicAndNudity`, `sexualContentOrNudity`, `socialMedia`, `socialMediaAgeRestricted`, `horrorOrFearThemes`, `matureOrSuggestiveThemes`, `unrestrictedWebAccess`, `userGeneratedContent`, `violenceCartoonOrFantasy`, `violenceRealisticProlongedGraphicOrSadistic`, `violenceRealistic`, `ageRatingOverride`, `ageRatingOverrideV2`, `koreaAgeRatingOverride`, `developerAgeRatingInfoUrl`

## Response Codes

- `200` OK — `AgeRatingDeclarationResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`: Authentication failed.
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.0 release notes](app-store-connect-api-4-0-release-notes.md)
- [App Store Connect API 4.3 release notes](app-store-connect-api-4-3-release-notes.md)
- [App Store Connect API 4.4 release notes](app-store-connect-api-4-4-release-notes.md)

<a id="Discussion"></a>

## Discussion

Responses for this endpoint include `contests` or `gambling` properties. In an app that has a `FREQUENT_OR_INTENSE` declaration for contests, the age rating for the `AppInfos` is 12+. If you declare a value of true for `gambling`, the age rating for the `AppInfos` is 17+.

<a id="Read-the-age-rating-declaration"></a>

### Read the age-rating declaration

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/appInfos/994af4c0-ff6c-fdb9-e053-d23ab111187e/ageRatingDeclaration
```

**Response**

```json
{
  "data": {
    "type": "ageRatingDeclarations",
    "id": "994af4c0-ff6c-fdb9-e053-d23ab111187e",
    "attributes": {
      "alcoholTobaccoOrDrugUseOrReferences": "NONE",
      "contests": "FREQUENT_OR_INTENSE",
      "gambling": false,
      "gamblingSimulated": "NONE",
      "kidsAgeBand": null,
      "medicalOrTreatmentInformation": "NONE",
      "profanityOrCrudeHumor": "NONE",
      "sexualContentGraphicAndNudity": "NONE",
      "sexualContentOrNudity": "NONE",
      "horrorOrFearThemes": "NONE",
      "matureOrSuggestiveThemes": "NONE",
      "unrestrictedWebAccess": false,
      "violenceCartoonOrFantasy": "NONE",
      "violenceRealisticProlongedGraphicOrSadistic": "NONE",
      "violenceRealistic": "NONE"
    },
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/ageRatingDeclarations/994af4c0-ff6c-fdb9-e053-d23ab111187e"
  }
},
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/appInfos/994af4c0-ff6c-fdb9-e053-d23ab111187e/ageRatingDeclaration"
  }
}
```

## See Also

### Reading and modifying declarations

- [Get the age rating declaration ID for an app info](get-v1-appinfos-_id_-relationships-ageratingdeclaration.md)
- [Modify an age rating declaration](patch-v1-ageratingdeclarations-_id_.md): Provide age-related information so the App Store can determine the age rating for your app.
