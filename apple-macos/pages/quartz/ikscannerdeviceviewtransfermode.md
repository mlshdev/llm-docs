> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikscannerdeviceviewtransfermode](https://developer.apple.com/documentation/quartz/ikscannerdeviceviewtransfermode)

# IKScannerDeviceViewTransferMode (Swift)

**Framework:** Quartz  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

These constants determine how the scanner data is returned to the delegate. They are used by the [transferMode](ikscannerdeviceview/transfermode.md) property.

## Declaration

```swift
@frozen enum IKScannerDeviceViewTransferMode
```

## Topics

### Constants

- [IKScannerDeviceViewTransferMode.fileBased](ikscannerdeviceviewtransfermode/filebased.md): The scanned content will be saved to the specified download directory.
- [IKScannerDeviceViewTransferMode.memoryBased](ikscannerdeviceviewtransfermode/memorybased.md): The scanned data is returned to the delegate as a `NSData` object.

### Initializers

- [init(rawValue:)](ikscannerdeviceviewtransfermode/init%28rawvalue_%29.md)

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

- [IKScannerDeviceViewDisplayMode](ikscannerdeviceviewdisplaymode.md): These constants specify the display mode the scanner view will use. They are used by the [mode](ikscannerdeviceview/mode.md) property.

# IKScannerDeviceViewTransferMode (Objective-C)

**Framework:** Quartz  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

These constants determine how the scanner data is returned to the delegate. They are used by the [transferMode](ikscannerdeviceview/transfermode.md) property.

## Declaration

```objectivec
enum IKScannerDeviceViewTransferMode : NSInteger;
```

## Topics

### Constants

- [IKScannerDeviceViewTransferModeFileBased](ikscannerdeviceviewtransfermode/filebased.md): The scanned content will be saved to the specified download directory.
- [IKScannerDeviceViewTransferModeMemoryBased](ikscannerdeviceviewtransfermode/memorybased.md): The scanned data is returned to the delegate as a `NSData` object.

## See Also

### Constants

- [IKScannerDeviceViewDisplayMode](ikscannerdeviceviewdisplaymode.md): These constants specify the display mode the scanner view will use. They are used by the [mode](ikscannerdeviceview/mode.md) property.
