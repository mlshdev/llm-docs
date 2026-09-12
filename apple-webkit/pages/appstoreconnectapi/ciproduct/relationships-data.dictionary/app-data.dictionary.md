> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciproduct/relationships-data.dictionary/app-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciproduct/relationships-data.dictionary/app-data.dictionary)

# CiProduct.Relationships.App

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The data and links that describe the relationship between the Products and Apps resources.

## Declaration

```
object CiProduct.Relationships.App
```

## Properties

- `data` — `CiProduct.Relationships.App.Data`: The ID and type of the related Apps resource.
- `links` — `RelationshipLinks`: The navigational links that include the self-link.

## Topics

### Objects

- [CiProduct.Relationships.App.Data](app-data.dictionary/data-data.dictionary.md): The type and ID of a related Apps resource.

## See Also

### Objects

- [CiProduct.Relationships.BundleId](bundleid-data.dictionary.md): The data and links that describe the relationship between the Products and the Bundle IDs resources.
- [CiProduct.Relationships.PrimaryRepositories](primaryrepositories-data.dictionary.md): The data, links, and paging information that describe the relationship between the Products resource and the Repositories resource that represents the primary repository.
