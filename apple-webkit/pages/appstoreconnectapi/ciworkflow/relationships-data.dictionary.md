> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciworkflow/relationships-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciworkflow/relationships-data.dictionary)

# CiWorkflow.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The relationships of the Workflows resource you included in the request and those on which you can operate.

## Declaration

```
object CiWorkflow.Relationships
```

## Properties

- `product` — `CiWorkflow.Relationships.Product`: The related Products resource.
- `repository` — `CiWorkflow.Relationships.Repository`: The workflow’s related Git repository.
- `xcodeVersion` — `CiWorkflow.Relationships.XcodeVersion`: The related Xcode Versions resource.
- `macOsVersion` — `CiWorkflow.Relationships.MacOsVersion`: The related macOS Versions resource.
- `buildRuns` — `CiWorkflow.Relationships.BuildRuns`:

## Topics

### Objects

- [CiWorkflow.Relationships.MacOsVersion](relationships-data.dictionary/macosversion-data.dictionary.md): The data and links that describe the relationship between the Workflows and the macOS Versions resources.
- [CiWorkflow.Relationships.Product](relationships-data.dictionary/product-data.dictionary.md): The data and links that describe the relationship between the Workflows and the Products resources.
- [CiWorkflow.Relationships.Repository](relationships-data.dictionary/repository-data.dictionary.md): The data and links that describe the relationship between the Workflows and the Repositories resources.
- [CiWorkflow.Relationships.XcodeVersion](relationships-data.dictionary/xcodeversion-data.dictionary.md): The data and links that describe the relationship between the Workflows and the Xcode Versions resources.

### Dictionaries

- [CiWorkflow.Relationships.BuildRuns](relationships-data.dictionary/buildruns-data.dictionary.md)

## See Also

### Objects

- [CiWorkflow.Attributes](attributes-data.dictionary.md): The attributes that describe a Workflows resource.
