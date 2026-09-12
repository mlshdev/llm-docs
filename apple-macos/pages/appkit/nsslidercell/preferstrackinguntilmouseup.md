> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/preferstrackinguntilmouseup](https://developer.apple.com/documentation/appkit/nsslidercell/preferstrackinguntilmouseup)

# prefersTrackingUntilMouseUp (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns a Boolean value indicating whether the `NSSliderCell` continues to track the pointer until the next mouse up.

## Declaration

```swift
class var prefersTrackingUntilMouseUp: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `NSSliderCell` continues to track the pointer even after it leaves the cell’s tracking rectangle; otherwise, [false](https://developer.apple.com/documentation/swift/false). By default, this method returns [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

If this method returns [true](https://developer.apple.com/documentation/swift/true), users retain control of the knob until they release the mouse button, even if they drag the pointer to the other side of the screen.

You should not call this method explicitly. Override it if you create a subclass of `NSSliderCell` that should track the mouse differently.

## See Also

### Managing Cell Behavior

- [altIncrementValue](altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the knob.
- [trackRect](trackrect.md): The rectangle within which the cell tracks the pointer while the mouse button is down.

# prefersTrackingUntilMouseUp (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns a Boolean value indicating whether the `NSSliderCell` continues to track the pointer until the next mouse up.

## Declaration

```objectivec
@property (class, readonly) BOOL prefersTrackingUntilMouseUp;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `NSSliderCell` continues to track the pointer even after it leaves the cell’s tracking rectangle; otherwise, [false](https://developer.apple.com/documentation/swift/false). By default, this method returns [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

If this method returns [true](https://developer.apple.com/documentation/swift/true), users retain control of the knob until they release the mouse button, even if they drag the pointer to the other side of the screen.

You should not call this method explicitly. Override it if you create a subclass of `NSSliderCell` that should track the mouse differently.

## See Also

### Managing Cell Behavior

- [altIncrementValue](altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the knob.
- [trackRect](trackrect.md): The rectangle within which the cell tracks the pointer while the mouse button is down.
