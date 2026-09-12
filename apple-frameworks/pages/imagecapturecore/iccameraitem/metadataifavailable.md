> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem/metadataifavailable](https://developer.apple.com/documentation/imagecapturecore/iccameraitem/metadataifavailable)

# metadataIfAvailable (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.15) · visionOS 1.0+

The item’s metadata if it is readily available.

## Declaration

```swift
var metadataIfAvailable: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

If metadata is not readily available, accessing this property will send a message to the device requesting metadata for the file. The delegate of the device will be notified via method [cameraDevice(\_:didReceiveMetadataFor:)](../iccameradevicedelegate/cameradevice%28__didreceivemetadatafor_%29.md), if this method is implemented by the delegate. Execution of the delegate callback will occur on the main thread.

## See Also

### Requesting Metadata

- [requestMetadata()](requestmetadata%28%29.md): Requests metadata for the item.
- [metadata](metadata.md): The item’s metadata.
- [flushMetadataCache()](flushmetadatacache%28%29.md): Deletes the item’s cached metadata.
- [ICCameraItemMetadataOption](../iccameraitemmetadataoption.md): An option for the item’s metadata.

# metadataIfAvailable (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.15) · visionOS 1.0+

The item’s metadata if it is readily available.

## Declaration

```objectivec
@property (readonly, nullable) NSDictionary<NSString *,id> * metadataIfAvailable;
```

<a id="Discussion"></a>

## Discussion

If metadata is not readily available, accessing this property will send a message to the device requesting metadata for the file. The delegate of the device will be notified via method [cameraDevice:didReceiveMetadataForItem:](../iccameradevicedelegate/cameradevice%28__didreceivemetadatafor_%29.md), if this method is implemented by the delegate. Execution of the delegate callback will occur on the main thread.

## See Also

### Requesting Metadata

- [requestMetadata](requestmetadata%28%29.md): Requests metadata for the item.
- [metadata](metadata.md): The item’s metadata.
- [flushMetadataCache](flushmetadatacache%28%29.md): Deletes the item’s cached metadata.
- [ICCameraItemMetadataOption](../iccameraitemmetadataoption.md): An option for the item’s metadata.
