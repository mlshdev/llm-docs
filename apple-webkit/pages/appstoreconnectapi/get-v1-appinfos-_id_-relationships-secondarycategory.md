> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appinfos-_id_-relationships-secondarycategory](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appinfos-_id_-relationships-secondarycategory)

# Get the secondary category ID for an app info

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appInfos/{id}/relationships/secondaryCategory
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `AppInfoSecondaryCategoryLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading Categories

- [Read the primary category information of an app info](get-v1-appinfos-_id_-primarycategory.md): Get an app’s primary App Store category.
- [Read the secondary category information of an app info](get-v1-appinfos-_id_-secondarycategory.md): Get an app’s secondary App Store category.
- [Get the primary category ID for an app info](get-v1-appinfos-_id_-relationships-primarycategory.md)
