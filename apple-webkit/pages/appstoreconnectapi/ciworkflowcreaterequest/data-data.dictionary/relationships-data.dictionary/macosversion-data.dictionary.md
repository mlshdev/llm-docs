> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciworkflowcreaterequest/data-data.dictionary/relationships-data.dictionary/macosversion-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciworkflowcreaterequest/data-data.dictionary/relationships-data.dictionary/macosversion-data.dictionary)

# CiWorkflowCreateRequest.Data.Relationships.MacOsVersion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The relationship to the macOS Versions resource you set with the request that creates a Workflows resource.

## Declaration

```
object CiWorkflowCreateRequest.Data.Relationships.MacOsVersion
```

## Properties

- `data` — `CiWorkflowCreateRequest.Data.Relationships.MacOsVersion.Data` (required): The ID and type of the related macOS Versions resource.

## Topics

### Objects

- [CiWorkflowCreateRequest.Data.Relationships.MacOsVersion.Data](macosversion-data.dictionary/data-data.dictionary.md): The type and ID of the macOS Versions resource that you’re relating with the Workflows resource you’re creating.

## See Also

### Objects

- [CiWorkflowCreateRequest.Data.Relationships.Product](product-data.dictionary.md): The relationship to the Products resource you set with the request that creates a Workflows resource.
- [CiWorkflowCreateRequest.Data.Relationships.Repository](repository-data.dictionary.md): The relationship to the Repositories Versions resource you set with the request that creates a Workflows resource.
- [CiWorkflowCreateRequest.Data.Relationships.XcodeVersion](xcodeversion-data.dictionary.md): The relationship to the Xcode Versions resource you set with the request that creates a Workflows resource.
