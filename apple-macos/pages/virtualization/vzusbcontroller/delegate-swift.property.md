> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzusbcontroller/delegate-swift.property

# delegate (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

## Declaration

```swift
weak var delegate: (any VZUSBController.Delegate)? { get set }
```

<a id="discussion"></a>

## Discussion

The controller’s delegate.

# delegate (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

## Declaration

```objectivec
@property (weak, nullable) id<VZUSBControllerDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

The controller’s delegate.
