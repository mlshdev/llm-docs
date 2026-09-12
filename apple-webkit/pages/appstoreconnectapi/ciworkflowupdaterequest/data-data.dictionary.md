> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciworkflowupdaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciworkflowupdaterequest/data-data.dictionary)

# CiWorkflowUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The data element of the request you use to update an Xcode Cloud workflow.

## Declaration

```
object CiWorkflowUpdateRequest.Data
```

## Properties

- `attributes` — `CiWorkflowUpdateRequest.Data.Attributes`: The attributes that describe the request that updates a Workflows resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the request.
- `relationships` — `CiWorkflowUpdateRequest.Data.Relationships`: The types and IDs of the related data to update.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciWorkflows`

## Topics

### Objects

- [CiWorkflowUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes of the Workflows resource you’re changing with the update request.
- [CiWorkflowUpdateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
