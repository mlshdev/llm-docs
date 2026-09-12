> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/alternativedistributionkeycreaterequest/data-data.dictionary/relationships-data.dictionary/app-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributionkeycreaterequest/data-data.dictionary/relationships-data.dictionary/app-data.dictionary/data-data.dictionary)

# AlternativeDistributionKeyCreateRequest.Data.Relationships.App.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.3+

The app that is associated with the alternative distribution key.

## Declaration

```
object AlternativeDistributionKeyCreateRequest.Data.Relationships.App.Data
```

## Properties

- `id` — `string` (required): This is the Apple app ID for the Marketplace app or your web distribution app. An opaque resource ID that uniquely identifies the resource. Obtain the `apps` ID from the [List apps](../../../../get-v1-apps.md) response.
- `type` — `string` (required): **Allowed values:** `apps`
