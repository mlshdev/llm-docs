> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitemmetadataoption](https://developer.apple.com/documentation/imagecapturecore/iccameraitemmetadataoption)

# ICCameraItemMetadataOption (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An option for the item’s metadata.

## Declaration

```swift
struct ICCameraItemMetadataOption
```

## Topics

### Initializers

- [init(rawValue:)](iccameraitemmetadataoption/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting Metadata

- [requestMetadata()](iccameraitem/requestmetadata%28%29.md): Requests metadata for the item.
- [metadata](iccameraitem/metadata.md): The item’s metadata.
- [metadataIfAvailable](iccameraitem/metadataifavailable.md): Deprecated. The item’s metadata if it is readily available.
- [flushMetadataCache()](iccameraitem/flushmetadatacache%28%29.md): Deletes the item’s cached metadata.

# ICCameraItemMetadataOption (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An option for the item’s metadata.

## Declaration

```objectivec
typedef NSString * ICCameraItemMetadataOption;
```

## See Also

### Requesting Metadata

- [requestMetadata](iccameraitem/requestmetadata%28%29.md): Requests metadata for the item.
- [metadata](iccameraitem/metadata.md): The item’s metadata.
- [metadataIfAvailable](iccameraitem/metadataifavailable.md): Deprecated. The item’s metadata if it is readily available.
- [flushMetadataCache](iccameraitem/flushmetadatacache%28%29.md): Deletes the item’s cached metadata.
