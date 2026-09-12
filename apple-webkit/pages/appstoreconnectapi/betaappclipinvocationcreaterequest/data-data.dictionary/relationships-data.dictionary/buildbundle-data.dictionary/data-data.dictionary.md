> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappclipinvocationcreaterequest/data-data.dictionary/relationships-data.dictionary/buildbundle-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/betaappclipinvocationcreaterequest/data-data.dictionary/relationships-data.dictionary/buildbundle-data.dictionary/data-data.dictionary)

# BetaAppClipInvocationCreateRequest.Data.Relationships.BuildBundle.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The type and ID of the Build Bundles resource that you’re relating with the Beta App Clip Invocations resource you’re creating.

## Declaration

```
object BetaAppClipInvocationCreateRequest.Data.Relationships.BuildBundle.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Build Bundles resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `buildBundles`
