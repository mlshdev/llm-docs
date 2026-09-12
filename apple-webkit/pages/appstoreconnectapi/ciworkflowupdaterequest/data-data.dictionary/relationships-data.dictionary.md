> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciworkflowupdaterequest/data-data.dictionary/relationships-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciworkflowupdaterequest/data-data.dictionary/relationships-data.dictionary)

# CiWorkflowUpdateRequest.Data.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The relationships to other resources that you can set with this request.

## Declaration

```
object CiWorkflowUpdateRequest.Data.Relationships
```

## Properties

- `xcodeVersion` — `CiWorkflowUpdateRequest.Data.Relationships.XcodeVersion`: The related Xcode Versions resource.
- `macOsVersion` — `CiWorkflowUpdateRequest.Data.Relationships.MacOsVersion`: The related macOS Versions resource.

## Topics

### Objects

- [CiWorkflowUpdateRequest.Data.Relationships.MacOsVersion](relationships-data.dictionary/macosversion-data.dictionary.md): The relationship to the macOS Versions resource you can set with the request that updates a Workflows resource.
- [CiWorkflowUpdateRequest.Data.Relationships.XcodeVersion](relationships-data.dictionary/xcodeversion-data.dictionary.md): The relationship to the Xcode Versions resource you can set with the request that updates a Workflows resource.

## See Also

### Objects

- [CiWorkflowUpdateRequest.Data.Attributes](attributes-data.dictionary.md): The attributes of the Workflows resource you’re changing with the update request.
