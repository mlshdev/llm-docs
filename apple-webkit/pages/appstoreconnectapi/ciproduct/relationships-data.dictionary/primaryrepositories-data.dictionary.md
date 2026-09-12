> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciproduct/relationships-data.dictionary/primaryrepositories-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciproduct/relationships-data.dictionary/primaryrepositories-data.dictionary)

# CiProduct.Relationships.PrimaryRepositories

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The data, links, and paging information that describe the relationship between the Products resource and the Repositories resource that represents the primary repository.

## Declaration

```
object CiProduct.Relationships.PrimaryRepositories
```

## Properties

- `data` — `[CiProduct.Relationships.PrimaryRepositories.Data]`: The ID and type of the related Repositories resource that represents the primary repository.
- `links` — `RelationshipLinks`: The navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## Topics

### Objects

- [CiProduct.Relationships.PrimaryRepositories.Data](primaryrepositories-data.dictionary/data-data.dictionary.md): The type and ID of a related Repositories resource that represents the product’s primary repositories.

## See Also

### Objects

- [CiProduct.Relationships.App](app-data.dictionary.md): The data and links that describe the relationship between the Products and Apps resources.
- [CiProduct.Relationships.BundleId](bundleid-data.dictionary.md): The data and links that describe the relationship between the Products and the Bundle IDs resources.
