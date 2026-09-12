> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/alternativedistributionpackagecreaterequest/data-data.dictionary/relationships-data.dictionary/appstoreversion-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributionpackagecreaterequest/data-data.dictionary/relationships-data.dictionary/appstoreversion-data.dictionary/data-data.dictionary)

# AlternativeDistributionPackageCreateRequest.Data.Relationships.AppStoreVersion.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

The request body you use to create an alternative distribution package.

## Declaration

```
object AlternativeDistributionPackageCreateRequest.Data.Relationships.AppStoreVersion.Data
```

## Properties

- `id` — `string` (required):
- `type` — `string` (required): Obtain the `appStoreVersion` resource ID from the [List all app store versions for an app](../../../../get-v1-apps-_id_-appstoreversions.md) response.
  **Allowed values:** `appStoreVersions`
