> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikscannerdeviceview/hasdisplaymodesimple](https://developer.apple.com/documentation/quartz/ikscannerdeviceview/hasdisplaymodesimple)

# hasDisplayModeSimple (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The property that determines whether the scanner view uses the simple display mode.

## Declaration

```swift
var hasDisplayModeSimple: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If you create an `IKScannerDeviceView` object programmatically and want to use the simple display mode, do the following:

- Set this property to [true](https://developer.apple.com/documentation/swift/true).
- Set [IKScannerDeviceViewDisplayMode.advanced](../ikscannerdeviceviewdisplaymode/advanced.md) to [false](https://developer.apple.com/documentation/swift/false).
- Set [mode](mode.md) to [IKScannerDeviceViewDisplayMode.simple](../ikscannerdeviceviewdisplaymode/simple.md).

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting the Device View’s Display Mode

- [mode](mode.md): The display mode used by the device view.
- [hasDisplayModeAdvanced](hasdisplaymodeadvanced.md): The property that determines whether the scanner view uses the advanced display mode.

# hasDisplayModeSimple (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The property that determines whether the scanner view uses the simple display mode.

## Declaration

```objectivec
@property BOOL hasDisplayModeSimple;
```

<a id="Discussion"></a>

## Discussion

If you create an `IKScannerDeviceView` object programmatically and want to use the simple display mode, do the following:

- Set this property to [true](https://developer.apple.com/documentation/swift/true).
- Set [IKScannerDeviceViewDisplayModeAdvanced](../ikscannerdeviceviewdisplaymode/advanced.md) to [false](https://developer.apple.com/documentation/swift/false).
- Set [mode](mode.md) to [IKScannerDeviceViewDisplayModeSimple](../ikscannerdeviceviewdisplaymode/simple.md).

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting the Device View’s Display Mode

- [mode](mode.md): The display mode used by the device view.
- [hasDisplayModeAdvanced](hasdisplaymodeadvanced.md): The property that determines whether the scanner view uses the advanced display mode.
