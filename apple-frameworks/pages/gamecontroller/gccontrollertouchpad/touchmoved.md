> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollertouchpad/touchmoved](https://developer.apple.com/documentation/gamecontroller/gccontrollertouchpad/touchmoved)

# touchMoved (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The block that the element calls when the user continues touching the touchpad, not when the user begins or ends touching the touchpad.

## Declaration

```swift
var touchMoved: GCControllerTouchpadHandler? { get set }
```

## See Also

### Getting change information

- [touchDown](touchdown.md): The block that the element calls when the user begins touching the touchpad.
- [touchUp](touchup.md): The block that the element calls when the user finishes touching the touchpad.
- [GCControllerTouchpadHandler](../gccontrollertouchpadhandler.md): The signature for the block that executes when the user interacts with the touchpad.

# touchMoved (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The block that the element calls when the user continues touching the touchpad, not when the user begins or ends touching the touchpad.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) GCControllerTouchpadHandler touchMoved;
```

## See Also

### Getting change information

- [touchDown](touchdown.md): The block that the element calls when the user begins touching the touchpad.
- [touchUp](touchup.md): The block that the element calls when the user finishes touching the touchpad.
- [GCControllerTouchpadHandler](../gccontrollertouchpadhandler.md): The signature for the block that executes when the user interacts with the touchpad.
