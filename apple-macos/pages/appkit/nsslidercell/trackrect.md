> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/trackrect](https://developer.apple.com/documentation/appkit/nsslidercell/trackrect)

# trackRect (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rectangle within which the cell tracks the pointer while the mouse button is down.

## Declaration

```swift
var trackRect: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

The tracking rectangle includes the slider bar, but not the bezel.

## See Also

### Managing Cell Behavior

- [altIncrementValue](altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the knob.
- [prefersTrackingUntilMouseUp](preferstrackinguntilmouseup.md): Returns a Boolean value indicating whether the `NSSliderCell` continues to track the pointer until the next mouse up.

# trackRect (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rectangle within which the cell tracks the pointer while the mouse button is down.

## Declaration

```objectivec
@property (readonly) NSRect trackRect;
```

<a id="Discussion"></a>

## Discussion

The tracking rectangle includes the slider bar, but not the bezel.

## See Also

### Managing Cell Behavior

- [altIncrementValue](altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the knob.
- [prefersTrackingUntilMouseUp](preferstrackinguntilmouseup.md): Returns a Boolean value indicating whether the `NSSliderCell` continues to track the pointer until the next mouse up.
