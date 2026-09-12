> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appinfos-_id_-relationships-ageratingdeclaration](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appinfos-_id_-relationships-ageratingdeclaration)

# Get the age rating declaration ID for an app info

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appInfos/{id}/relationships/ageRatingDeclaration
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `AppInfoAgeRatingDeclarationLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading and modifying declarations

- [Read the age-rating declaration](get-v1-appinfos-_id_-ageratingdeclaration.md): Get the age-rating declaration for an app info.
- [Modify an age rating declaration](patch-v1-ageratingdeclarations-_id_.md): Provide age-related information so the App Store can determine the age rating for your app.
