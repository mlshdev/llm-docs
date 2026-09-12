> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbcontroller/delegate-swift.property](https://developer.apple.com/documentation/virtualization/vzusbcontroller/delegate-swift.property)

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
