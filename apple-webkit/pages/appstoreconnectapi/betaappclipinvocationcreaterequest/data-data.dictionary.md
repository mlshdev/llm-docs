> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaappclipinvocationcreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/betaappclipinvocationcreaterequest/data-data.dictionary)

# BetaAppClipInvocationCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The data element of the request body.

## Declaration

```
object BetaAppClipInvocationCreateRequest.Data
```

## Properties

- `attributes` — `BetaAppClipInvocationCreateRequest.Data.Attributes` (required): The attributes that describes the request that creates a Beta App Clip Invocations resource.
- `relationships` — `BetaAppClipInvocationCreateRequest.Data.Relationships` (required): The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaAppClipInvocations`

## Topics

### Objects

- [BetaAppClipInvocationCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the new Beta App Clip Invocations resource.
- [BetaAppClipInvocationCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.

## See Also

### Objects

- [BetaAppClipInvocationLocalizationInlineCreate](../betaappclipinvocationlocalizationinlinecreate.md): An inline object for specifying a localized title for a beta App Clip invocation within a parent create or update request.
