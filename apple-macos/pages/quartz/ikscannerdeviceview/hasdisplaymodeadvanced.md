> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikscannerdeviceview/hasdisplaymodeadvanced](https://developer.apple.com/documentation/quartz/ikscannerdeviceview/hasdisplaymodeadvanced)

# hasDisplayModeAdvanced (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The property that determines whether the scanner view uses the advanced display mode.

## Declaration

```swift
var hasDisplayModeAdvanced: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If you create an `IKScannerDeviceView` object programmatically and want to use the advanced display mode, do the following:

- Set this property to [true](https://developer.apple.com/documentation/swift/true).
- Set [IKScannerDeviceViewDisplayMode.simple](../ikscannerdeviceviewdisplaymode/simple.md) to [false](https://developer.apple.com/documentation/swift/false).
- Set [mode](mode.md) to [IKScannerDeviceViewDisplayMode.advanced](../ikscannerdeviceviewdisplaymode/advanced.md).

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting the Device View’s Display Mode

- [mode](mode.md): The display mode used by the device view.
- [hasDisplayModeSimple](hasdisplaymodesimple.md): The property that determines whether the scanner view uses the simple display mode.

# hasDisplayModeAdvanced (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The property that determines whether the scanner view uses the advanced display mode.

## Declaration

```objectivec
@property BOOL hasDisplayModeAdvanced;
```

<a id="Discussion"></a>

## Discussion

If you create an `IKScannerDeviceView` object programmatically and want to use the advanced display mode, do the following:

- Set this property to [true](https://developer.apple.com/documentation/swift/true).
- Set [IKScannerDeviceViewDisplayModeSimple](../ikscannerdeviceviewdisplaymode/simple.md) to [false](https://developer.apple.com/documentation/swift/false).
- Set [mode](mode.md) to [IKScannerDeviceViewDisplayModeAdvanced](../ikscannerdeviceviewdisplaymode/advanced.md).

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting the Device View’s Display Mode

- [mode](mode.md): The display mode used by the device view.
- [hasDisplayModeSimple](hasdisplaymodesimple.md): The property that determines whether the scanner view uses the simple display mode.
