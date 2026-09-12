> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciproduct/relationships-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciproduct/relationships-data.dictionary)

# CiProduct.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The relationships of the Products resource you included in the request and those on which you can operate.

## Declaration

```
object CiProduct.Relationships
```

## Properties

- `app` — `CiProduct.Relationships.App`: The related Apps resource.
- `primaryRepositories` — `CiProduct.Relationships.PrimaryRepositories`: The related primary repository.
- `bundleId` — `CiProduct.Relationships.BundleId`: The related bundle ID.
- `additionalRepositories` — `CiProduct.Relationships.AdditionalRepositories`:
- `buildRuns` — `CiProduct.Relationships.BuildRuns`:
- `workflows` — `CiProduct.Relationships.Workflows`:

## Topics

### Objects

- [CiProduct.Relationships.App](relationships-data.dictionary/app-data.dictionary.md): The data and links that describe the relationship between the Products and Apps resources.
- [CiProduct.Relationships.BundleId](relationships-data.dictionary/bundleid-data.dictionary.md): The data and links that describe the relationship between the Products and the Bundle IDs resources.
- [CiProduct.Relationships.PrimaryRepositories](relationships-data.dictionary/primaryrepositories-data.dictionary.md): The data, links, and paging information that describe the relationship between the Products resource and the Repositories resource that represents the primary repository.

### Dictionaries

- [CiProduct.Relationships.AdditionalRepositories](relationships-data.dictionary/additionalrepositories-data.dictionary.md)
- [CiProduct.Relationships.BuildRuns](relationships-data.dictionary/buildruns-data.dictionary.md)
- [CiProduct.Relationships.Workflows](relationships-data.dictionary/workflows-data.dictionary.md)

## See Also

### Objects

- [CiProduct.Attributes](attributes-data.dictionary.md): The attributes that describe a Products resource.
