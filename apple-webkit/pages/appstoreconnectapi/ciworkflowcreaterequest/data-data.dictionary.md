> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciworkflowcreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciworkflowcreaterequest/data-data.dictionary)

# CiWorkflowCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The data element of the request you use to create a new Xcode Cloud workflow.

## Declaration

```
object CiWorkflowCreateRequest.Data
```

## Properties

- `attributes` — `CiWorkflowCreateRequest.Data.Attributes` (required): The attributes that describe the request that creates a Workflows resource.
- `relationships` — `CiWorkflowCreateRequest.Data.Relationships` (required): The types and IDs of the related data to update.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciWorkflows`

## Topics

### Objects

- [CiWorkflowCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the new Xcode Cloud workflow resource.
- [CiWorkflowCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
