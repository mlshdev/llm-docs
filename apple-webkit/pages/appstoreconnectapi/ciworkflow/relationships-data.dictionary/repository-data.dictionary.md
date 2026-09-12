> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciworkflow/relationships-data.dictionary/repository-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciworkflow/relationships-data.dictionary/repository-data.dictionary)

# CiWorkflow.Relationships.Repository

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The data and links that describe the relationship between the Workflows and the Repositories resources.

## Declaration

```
object CiWorkflow.Relationships.Repository
```

## Properties

- `data` — `CiWorkflow.Relationships.Repository.Data`: The ID and type of the related Repositories resource.
- `links` — `RelationshipLinks`: The navigational links that include the self-link.

## Topics

### Objects

- [CiWorkflow.Relationships.Repository.Data](repository-data.dictionary/data-data.dictionary.md): The type and ID of a related Repositories resource.

## See Also

### Objects

- [CiWorkflow.Relationships.MacOsVersion](macosversion-data.dictionary.md): The data and links that describe the relationship between the Workflows and the macOS Versions resources.
- [CiWorkflow.Relationships.Product](product-data.dictionary.md): The data and links that describe the relationship between the Workflows and the Products resources.
- [CiWorkflow.Relationships.XcodeVersion](xcodeversion-data.dictionary.md): The data and links that describe the relationship between the Workflows and the Xcode Versions resources.
