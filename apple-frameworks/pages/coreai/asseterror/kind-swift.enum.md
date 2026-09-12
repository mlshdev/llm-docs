> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/asseterror/kind-swift.enum](https://developer.apple.com/documentation/coreai/asseterror/kind-swift.enum)

# AssetError.Kind

**Framework:** Core AI  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The reasons an asset operation can fail.

## Declaration

```swift
enum Kind
```

## Topics

### Types of errors

- [AssetError.Kind.corruptedMetadata](kind-swift.enum/corruptedmetadata.md): An error that indicates the asset metadata is corrupted.
- [AssetError.Kind.duplicateName](kind-swift.enum/duplicatename.md): An error that indicates a component with that name already exists in the asset.
- [AssetError.Kind.invalidFeatureType(\_:)](kind-swift.enum/invalidfeaturetype%28__%29.md): An error that indicates the feature type is invalid.
- [AssetError.Kind.invalidName](kind-swift.enum/invalidname.md): An error that indicates the component name is invalid.
- [AssetError.Kind.unsupportedVersion(\_:)](kind-swift.enum/unsupportedversion%28__%29.md): An error that indicates the asset version is unsupported.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
