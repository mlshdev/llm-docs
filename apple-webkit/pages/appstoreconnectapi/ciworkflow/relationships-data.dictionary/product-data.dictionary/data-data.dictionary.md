> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/ciworkflow/relationships-data.dictionary/product-data.dictionary/data-data.dictionary

# CiWorkflow.Relationships.Product.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of a related Products resource.

## Declaration

```
object CiWorkflow.Relationships.Product.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Products resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciProducts`
