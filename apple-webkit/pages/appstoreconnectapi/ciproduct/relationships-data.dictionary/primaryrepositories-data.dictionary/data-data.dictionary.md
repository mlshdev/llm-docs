> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciproduct/relationships-data.dictionary/primaryrepositories-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciproduct/relationships-data.dictionary/primaryrepositories-data.dictionary/data-data.dictionary)

# CiProduct.Relationships.PrimaryRepositories.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of a related Repositories resource that represents the product’s primary repositories.

## Declaration

```
object CiProduct.Relationships.PrimaryRepositories.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Repositories resource that represents the primary repository.
- `type` — `string` (required): The resource type.
  **Allowed values:** `scmRepositories`
