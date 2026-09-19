> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikscannerdeviceview/delegate

# delegate (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The scanner device delegate

## Declaration

```swift
@IBOutlet unowned(unsafe) var delegate: (any IKScannerDeviceViewDelegate)! { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate is sent notifications of errors as well as the completed scan content.

The delegate must conform to the [IKScannerDeviceViewDelegate](../ikscannerdeviceviewdelegate.md) protocol.

# delegate (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The scanner device delegate

## Declaration

```objectivec
@property (assign) id<IKScannerDeviceViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate is sent notifications of errors as well as the completed scan content.

The delegate must conform to the [IKScannerDeviceViewDelegate](../ikscannerdeviceviewdelegate.md) protocol.
