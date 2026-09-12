> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/modelmetadata](https://developer.apple.com/documentation/createmlcomponents/modelmetadata)

# ModelMetadata

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

User info keys that specify useful information about a model.

## Declaration

```swift
struct ModelMetadata
```

## Topics

### Creating a model

- [init(description:version:author:license:creatorDefined:)](modelmetadata/init%28description_version_author_license_creatordefined_%29.md): Creates model metadata.

### Getting the properties

- [author](modelmetadata/author.md): The author of this model.
- [creatorDefined](modelmetadata/creatordefined.md): Creator-defined custom metadata.
- [description](modelmetadata/description.md): A short description of what the model does and/or its purpose.
- [license](modelmetadata/license.md): License information for the model.
- [version](modelmetadata/version.md): A version number encoded as a string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Core ML adaptors

- [MLModelTransformerAdaptor](mlmodeltransformeradaptor.md): A transformer that uses a Core ML model.
- [MLModelClassifierAdaptor](mlmodelclassifieradaptor.md): A transformer that uses a Core ML model as a classifier.
- [MLModelRegressorAdaptor](mlmodelregressoradaptor.md): A transformer that uses a Core ML model as a regressor.
