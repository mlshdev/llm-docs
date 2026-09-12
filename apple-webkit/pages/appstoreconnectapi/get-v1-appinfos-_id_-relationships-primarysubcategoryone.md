> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appinfos-_id_-relationships-primarysubcategoryone](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appinfos-_id_-relationships-primarysubcategoryone)

# Get the first primary subcategory ID for an app info

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appInfos/{id}/relationships/primarySubcategoryOne
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `AppInfoPrimarySubcategoryOneLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading Subcategories

- [Read the primary subcategory one information of an app info](get-v1-appinfos-_id_-primarysubcategoryone.md): Get the first App Store subcategory within an app’s primary category.
- [Read the primary subcategory two information of an app info](get-v1-appinfos-_id_-primarysubcategorytwo.md): Get the second App Store subcategory within an app’s primary category.
- [Read the secondary subcategory one information of an app info](get-v1-appinfos-_id_-secondarysubcategoryone.md): Get the first App Store subcategory within an app’s secondary category.
- [Read the secondary subcategory two information of an app info](get-v1-appinfos-_id_-secondarysubcategorytwo.md): Get the second App Store subcategory within an app’s secondary category.
- [Get the second primary subcategory ID for an app info](get-v1-appinfos-_id_-relationships-primarysubcategorytwo.md)
- [Get the first secondary subcategory ID for an app info](get-v1-appinfos-_id_-relationships-secondarysubcategoryone.md)
- [Get the second secondary subcategory ID for an app info](get-v1-appinfos-_id_-relationships-secondarysubcategorytwo.md)
