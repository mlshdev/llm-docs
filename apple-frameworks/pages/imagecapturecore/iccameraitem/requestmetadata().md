> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem/requestmetadata()](https://developer.apple.com/documentation/imagecapturecore/iccameraitem/requestmetadata())

# requestMetadata() (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Requests metadata for the item.

## Declaration

```swift
func requestMetadata()
```

<a id="Discussion"></a>

## Discussion

If metadata for the item is not readily available, accessing this property requests metadata from the camera, then notifies the delegate by calling [cameraDevice(\_:didReceiveMetadata:for:error:)](../iccameradevicedelegate/cameradevice%28__didreceivemetadata_for_error_%29.md).

Execution of the delegate callback occurs on the main thread.

## See Also

### Requesting Metadata

- [metadata](metadata.md): The item’s metadata.
- [metadataIfAvailable](metadataifavailable.md): Deprecated. The item’s metadata if it is readily available.
- [flushMetadataCache()](flushmetadatacache%28%29.md): Deletes the item’s cached metadata.
- [ICCameraItemMetadataOption](../iccameraitemmetadataoption.md): An option for the item’s metadata.

# requestMetadata (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Requests metadata for the item.

## Declaration

```objectivec
- (void) requestMetadata;
```

<a id="Discussion"></a>

## Discussion

If metadata for the item is not readily available, accessing this property requests metadata from the camera, then notifies the delegate by calling [cameraDevice:didReceiveMetadata:forItem:error:](../iccameradevicedelegate/cameradevice%28__didreceivemetadata_for_error_%29.md).

Execution of the delegate callback occurs on the main thread.

## See Also

### Requesting Metadata

- [metadata](metadata.md): The item’s metadata.
- [metadataIfAvailable](metadataifavailable.md): Deprecated. The item’s metadata if it is readily available.
- [flushMetadataCache](flushmetadatacache%28%29.md): Deletes the item’s cached metadata.
- [ICCameraItemMetadataOption](../iccameraitemmetadataoption.md): An option for the item’s metadata.
