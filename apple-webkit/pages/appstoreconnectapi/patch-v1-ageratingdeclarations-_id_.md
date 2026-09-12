> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-ageratingdeclarations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-ageratingdeclarations-_id_)

# Modify an age rating declaration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Provide age-related information so the App Store can determine the age rating for your app.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/ageRatingDeclarations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the age rating declaration resource ID from the `GET-v1-appStoreVersions-{id}-ageRatingDeclaration` response.

## HTTP Body

Content type: `application/json`

Type: `AgeRatingDeclarationUpdateRequest`

The request body you use to update an Age Rating Declaration.

## Response Codes

- `200` OK — `AgeRatingDeclarationResponse`: Request succeeded.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data isn’t valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 3.6 release notes](app-store-connect-api-3-6-release-notes.md)
- [App Store Connect API 4.0 release notes](app-store-connect-api-4-0-release-notes.md)
- [App Store Connect API 4.1 release notes](app-store-connect-api-4-1-release-notes.md)
- [App Store Connect API 4.2 release notes](app-store-connect-api-4-2-release-notes.md)

<a id="Discussion"></a>

## Discussion

Every App Store version has an age rating declaration. Use this endpoint to edit the declaration and provide app-characteristic information so App Store Connect can determine the appropriate age rating for the app.

Use this endpoint to indicate whether an app is Made for Kids.

When calling this endpoint, only include the attributes that you’re modifying.

The attributes for age-rating declarations, `INFREQUENT_OR_MILD` and `FREQUENT_OR_INTENSE` are deprecated. Instead, use `INFREQUENT` or `FREQUENT`.

For example, in an app that has a `FREQUENT` declaration for contests, the age rating for the `AppInfos` is 12+. If you declare a value of true for `gambling`, the age rating for the `AppInfos` is 17+.

<a id="Modify-an-age-rating-declaration"></a>

### Modify an age rating declaration

**Request**

```
PATCH https://api.appstoreconnect.apple.com/v1/ageRatingDeclarations/26b5c300-1814-4b7a-8ec9-5411ecf36305

{
  "data": {
    "type": "ageRatingDeclarations",
    "id": "string",
    "attributes": {
      "alcoholTobaccoOrDrugUseOrReferences": "NONE",
      "contests": "NONE",
      "gambling": true,
      "gamblingSimulated": "NONE",
      "medicalOrTreatmentInformation": "NONE",
      "profanityOrCrudeHumor": "NONE",
      "sexualContentGraphicAndNudity": "NONE",
      "sexualContentOrNudity": "NONE",
      "horrorOrFearThemes": "NONE",
      "matureOrSuggestiveThemes": "NONE",
      "unrestrictedWebAccess": true,
      "violenceCartoonOrFantasy": "NONE",
      "violenceRealisticProlongedGraphicOrSadistic": "NONE",
      "violenceRealistic": "NONE",
      "kidsAgeBand": null
    }
  }
}

```

**Response**

```json
{
  "data": {
    "type": "ageRatingDeclarations",
    "id": "26b5c300-1814-4b7a-8ec9-5411ecf36305",
    "attributes": {
      "alcoholTobaccoOrDrugUseOrReferences": "NONE",
      "contests": "NONE",
      "gambling": true,
      "gamblingSimulated": "NONE",
      "medicalOrTreatmentInformation": "NONE",
      "profanityOrCrudeHumor": "NONE",
      "sexualContentGraphicAndNudity": "NONE",
      "sexualContentOrNudity": "NONE",
      "horrorOrFearThemes": "NONE",
      "matureOrSuggestiveThemes": "NONE",
      "unrestrictedWebAccess": true,
      "violenceCartoonOrFantasy": "NONE",
      "violenceRealisticProlongedGraphicOrSadistic": "NONE",
      "violenceRealistic": "NONE",
      "kidsAgeBand": null
    },
    "links": {
      "self": "https://api.appstoreconnect.apple.com/v1/ageRatingDeclarations/26b5c300-1814-4b7a-8ec9-5411ecf36305"
    }
  },
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/ageRatingDeclarations/26b5c300-1814-4b7a-8ec9-5411ecf36305"
  }
}

```

<a id="Mark-an-App-as-Made-for-Kids"></a>

### Mark an App as Made for Kids

**Request**

```
PATCH https://api.appstoreconnect.apple.com/v1/ageRatingDeclarations/26b5c300-1814-4b7a-8ec9-5411ecf36305

{
  "data": {
    "type": "ageRatingDeclarations",
    "id": "string",
    "attributes": {
      "kidsAgeBand": "FIVE_AND_UNDER"
    }
  }
}
```

**Response**

```json
{
  "data": {
    "type": "ageRatingDeclarations",
    "id": "26b5c300-1814-4b7a-8ec9-5411ecf36305",
    "attributes": {
      "alcoholTobaccoOrDrugUseOrReferences": "NONE",
      "contests": “NONE”,
      "gambling": false,
      "gamblingSimulated": "NONE",
      "medicalOrTreatmentInformation": "NONE",
      "profanityOrCrudeHumor": "NONE",
      "sexualContentGraphicAndNudity": "NONE",
      "sexualContentOrNudity": "NONE",
      "horrorOrFearThemes": "NONE",
      "matureOrSuggestiveThemes": "NONE",
      "unrestrictedWebAccess": true,
      "violenceCartoonOrFantasy": "NONE",
      "violenceRealisticProlongedGraphicOrSadistic": "NONE",
      "violenceRealistic": "NONE",
      "kidsAgeBand": "FIVE_AND_UNDER"
    },
    "links": {
      "self": "https://api.appstoreconnect.apple.com/v1/ageRatingDeclarations/26b5c300-1814-4b7a-8ec9-5411ecf36305"
    }
  },
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/ageRatingDeclarations/26b5c300-1814-4b7a-8ec9-5411ecf36305"
  }
}
```

## See Also

### Reading and modifying declarations

- [Read the age-rating declaration](get-v1-appinfos-_id_-ageratingdeclaration.md): Get the age-rating declaration for an app info.
- [Get the age rating declaration ID for an app info](get-v1-appinfos-_id_-relationships-ageratingdeclaration.md)
