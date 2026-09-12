> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikcameradeviceviewtransfermode](https://developer.apple.com/documentation/quartz/ikcameradeviceviewtransfermode)

# IKCameraDeviceViewTransferMode (Swift)

**Framework:** Quartz  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

These constants specify the transfer mode used by the camera view. These constants are used by [mode](ikcameradeviceview/mode.md).

## Declaration

```swift
@frozen enum IKCameraDeviceViewTransferMode
```

## Topics

### Constants

- [IKCameraDeviceViewTransferMode.fileBased](ikcameradeviceviewtransfermode/filebased.md): Transferred files will be saved to disk by the delegate.
- [IKCameraDeviceViewTransferMode.memoryBased](ikcameradeviceviewtransfermode/memorybased.md): Transferred files will be supplied to the delegate as an `NSData` object.

### Initializers

- [init(rawValue:)](ikcameradeviceviewtransfermode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [IKCameraDeviceViewDisplayMode](ikcameradeviceviewdisplaymode.md): These constants specify the display mode used by the camera view. These constants are used by [mode](ikcameradeviceview/mode.md).

# IKCameraDeviceViewTransferMode (Objective-C)

**Framework:** Quartz  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

These constants specify the transfer mode used by the camera view. These constants are used by [mode](ikcameradeviceview/mode.md).

## Declaration

```objectivec
enum IKCameraDeviceViewTransferMode : NSInteger;
```

## Topics

### Constants

- [IKCameraDeviceViewTransferModeFileBased](ikcameradeviceviewtransfermode/filebased.md): Transferred files will be saved to disk by the delegate.
- [IKCameraDeviceViewTransferModeMemoryBased](ikcameradeviceviewtransfermode/memorybased.md): Transferred files will be supplied to the delegate as an `NSData` object.

## See Also

### Constants

- [IKCameraDeviceViewDisplayMode](ikcameradeviceviewdisplaymode.md): These constants specify the display mode used by the camera view. These constants are used by [mode](ikcameradeviceview/mode.md).
