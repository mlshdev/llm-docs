> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikcameradeviceview/delegate

# delegate (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The camera device view delegate.

## Declaration

```swift
@IBOutlet unowned(unsafe) var delegate: (any IKCameraDeviceViewDelegate)! { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [IKCameraDeviceViewDelegate](../ikcameradeviceviewdelegate.md) protocol.

# delegate (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The camera device view delegate.

## Declaration

```objectivec
@property (assign) id<IKCameraDeviceViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [IKCameraDeviceViewDelegate](../ikcameradeviceviewdelegate.md) protocol.
