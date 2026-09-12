> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciworkflowcreaterequest/data-data.dictionary/relationships-data.dictionary/product-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciworkflowcreaterequest/data-data.dictionary/relationships-data.dictionary/product-data.dictionary/data-data.dictionary)

# CiWorkflowCreateRequest.Data.Relationships.Product.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of the Products resource that you’re relating with the Workflows resource you’re creating.

## Declaration

```
object CiWorkflowCreateRequest.Data.Relationships.Product.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Products resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciProducts`
