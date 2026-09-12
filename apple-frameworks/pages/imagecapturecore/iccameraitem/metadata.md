> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem/metadata](https://developer.apple.com/documentation/imagecapturecore/iccameraitem/metadata)

# metadata (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s metadata.

## Declaration

```swift
var metadata: [AnyHashable : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` unless a [requestMetadata()](requestmetadata%28%29.md) message is sent to this object.

## See Also

### Requesting Metadata

- [requestMetadata()](requestmetadata%28%29.md): Requests metadata for the item.
- [metadataIfAvailable](metadataifavailable.md): Deprecated. The item’s metadata if it is readily available.
- [flushMetadataCache()](flushmetadatacache%28%29.md): Deletes the item’s cached metadata.
- [ICCameraItemMetadataOption](../iccameraitemmetadataoption.md): An option for the item’s metadata.

# metadata (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s metadata.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary * metadata;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` unless a [requestMetadata](requestmetadata%28%29.md) message is sent to this object.

## See Also

### Requesting Metadata

- [requestMetadata](requestmetadata%28%29.md): Requests metadata for the item.
- [metadataIfAvailable](metadataifavailable.md): Deprecated. The item’s metadata if it is readily available.
- [flushMetadataCache](flushmetadatacache%28%29.md): Deletes the item’s cached metadata.
- [ICCameraItemMetadataOption](../iccameraitemmetadataoption.md): An option for the item’s metadata.
