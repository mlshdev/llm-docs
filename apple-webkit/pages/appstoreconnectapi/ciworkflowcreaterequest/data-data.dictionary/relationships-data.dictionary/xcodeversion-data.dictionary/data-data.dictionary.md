> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciworkflowcreaterequest/data-data.dictionary/relationships-data.dictionary/xcodeversion-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciworkflowcreaterequest/data-data.dictionary/relationships-data.dictionary/xcodeversion-data.dictionary/data-data.dictionary)

# CiWorkflowCreateRequest.Data.Relationships.XcodeVersion.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of the Xcode Versions resource that you’re relating with the Workflows resource you’re creating.

## Declaration

```
object CiWorkflowCreateRequest.Data.Relationships.XcodeVersion.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Xcode Versions resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciXcodeVersions`
