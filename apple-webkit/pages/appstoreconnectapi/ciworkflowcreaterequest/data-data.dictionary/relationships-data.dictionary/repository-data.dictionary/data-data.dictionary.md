> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciworkflowcreaterequest/data-data.dictionary/relationships-data.dictionary/repository-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciworkflowcreaterequest/data-data.dictionary/relationships-data.dictionary/repository-data.dictionary/data-data.dictionary)

# CiWorkflowCreateRequest.Data.Relationships.Repository.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of the Repositories resource that you’re relating with the Workflows resource you’re creating.

## Declaration

```
object CiWorkflowCreateRequest.Data.Relationships.Repository.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Repositories resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `scmRepositories`
