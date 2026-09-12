> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikscannerdeviceviewdisplaymode](https://developer.apple.com/documentation/quartz/ikscannerdeviceviewdisplaymode)

# IKScannerDeviceViewDisplayMode (Swift)

**Framework:** Quartz  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

These constants specify the display mode the scanner view will use. They are used by the [mode](ikscannerdeviceview/mode.md) property.

## Declaration

```swift
@frozen enum IKScannerDeviceViewDisplayMode
```

## Topics

### Constants

- [IKScannerDeviceViewDisplayMode.simple](ikscannerdeviceviewdisplaymode/simple.md): The view will display in simple mode.
- [IKScannerDeviceViewDisplayMode.advanced](ikscannerdeviceviewdisplaymode/advanced.md): The view will display in advanced mode.

### Enumeration Cases

- [IKScannerDeviceViewDisplayMode.none](ikscannerdeviceviewdisplaymode/none.md)

### Initializers

- [init(rawValue:)](ikscannerdeviceviewdisplaymode/init%28rawvalue_%29.md)

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

- [IKScannerDeviceViewTransferMode](ikscannerdeviceviewtransfermode.md): These constants determine how the scanner data is returned to the delegate. They are used by the [transferMode](ikscannerdeviceview/transfermode.md) property.

# IKScannerDeviceViewDisplayMode (Objective-C)

**Framework:** Quartz  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

These constants specify the display mode the scanner view will use. They are used by the [mode](ikscannerdeviceview/mode.md) property.

## Declaration

```objectivec
enum IKScannerDeviceViewDisplayMode : NSInteger;
```

## Topics

### Constants

- [IKScannerDeviceViewDisplayModeSimple](ikscannerdeviceviewdisplaymode/simple.md): The view will display in simple mode.
- [IKScannerDeviceViewDisplayModeAdvanced](ikscannerdeviceviewdisplaymode/advanced.md): The view will display in advanced mode.

### Enumeration Cases

- [IKScannerDeviceViewDisplayModeNone](ikscannerdeviceviewdisplaymode/none.md)

## See Also

### Constants

- [IKScannerDeviceViewTransferMode](ikscannerdeviceviewtransfermode.md): These constants determine how the scanner data is returned to the delegate. They are used by the [transferMode](ikscannerdeviceview/transfermode.md) property.
