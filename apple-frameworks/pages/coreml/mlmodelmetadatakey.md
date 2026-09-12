> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelmetadatakey](https://developer.apple.com/documentation/coreml/mlmodelmetadatakey)

# MLModelMetadataKey (Swift)

**Framework:** Core ML  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The set of keys the model uses to store values in its metadata dictionary.

## Declaration

```swift
struct MLModelMetadataKey
```

## Topics

### Metadata keys

- [author](mlmodelmetadatakey/author.md): Key for the author of the model.
- [description](mlmodelmetadatakey/description.md): Key for the overall description of the model.
- [license](mlmodelmetadatakey/license.md): Key for the license of the model.
- [versionString](mlmodelmetadatakey/versionstring.md): Key for the version of the model.
- [creatorDefinedKey](mlmodelmetadatakey/creatordefinedkey.md): Key for the model creator’s custom metadata.

### Creating metadata

- [init(rawValue:)](mlmodelmetadatakey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing metadata

- [classLabels](mlmodeldescription/classlabels.md): An array of labels, which can be either strings or a numbers, for classifier models.
- [metadata](mlmodeldescription/metadata.md): A dictionary of the model’s creation information, such as its description, author, version, and license.

# MLModelMetadataKey (Objective-C)

**Framework:** Core ML  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The set of keys the model uses to store values in its metadata dictionary.

## Declaration

```objectivec
typedef NSString * MLModelMetadataKey;
```

## Topics

### Metadata keys

- [MLModelAuthorKey](mlmodelmetadatakey/author.md): Key for the author of the model.
- [MLModelDescriptionKey](mlmodelmetadatakey/description.md): Key for the overall description of the model.
- [MLModelLicenseKey](mlmodelmetadatakey/license.md): Key for the license of the model.
- [MLModelVersionStringKey](mlmodelmetadatakey/versionstring.md): Key for the version of the model.
- [MLModelCreatorDefinedKey](mlmodelmetadatakey/creatordefinedkey.md): Key for the model creator’s custom metadata.

## See Also

### Accessing metadata

- [classLabels](mlmodeldescription/classlabels.md): An array of labels, which can be either strings or a numbers, for classifier models.
- [metadata](mlmodeldescription/metadata.md): A dictionary of the model’s creation information, such as its description, author, version, and license.
