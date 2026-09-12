> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildruncreaterequest/data-data.dictionary/relationships-data.dictionary/workflow-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cibuildruncreaterequest/data-data.dictionary/relationships-data.dictionary/workflow-data.dictionary/data-data.dictionary)

# CiBuildRunCreateRequest.Data.Relationships.Workflow.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of the Workflows resource that you’re relating with the Build Runs resource you’re creating.

## Declaration

```
object CiBuildRunCreateRequest.Data.Relationships.Workflow.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Workflows resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciWorkflows`
