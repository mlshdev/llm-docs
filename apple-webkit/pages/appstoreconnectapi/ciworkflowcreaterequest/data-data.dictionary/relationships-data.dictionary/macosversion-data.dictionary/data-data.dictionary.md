> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciworkflowcreaterequest/data-data.dictionary/relationships-data.dictionary/macosversion-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciworkflowcreaterequest/data-data.dictionary/relationships-data.dictionary/macosversion-data.dictionary/data-data.dictionary)

# CiWorkflowCreateRequest.Data.Relationships.MacOsVersion.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of the macOS Versions resource that you’re relating with the Workflows resource you’re creating.

## Declaration

```
object CiWorkflowCreateRequest.Data.Relationships.MacOsVersion.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related macOS Versions resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciMacOsVersions`
