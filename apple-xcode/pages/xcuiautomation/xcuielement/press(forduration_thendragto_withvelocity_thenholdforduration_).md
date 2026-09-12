> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/press(forduration:thendragto:withvelocity:thenholdforduration:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/press(forduration:thendragto:withvelocity:thenholdforduration:))

# press(forDuration:thenDragTo:withVelocity:thenHoldForDuration:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

Initiates a press-and-hold gesture, drags to another element at a velocity, and holds for a duration, all of which you specify.

## Declaration

```swift
func press(forDuration duration: TimeInterval, thenDragTo otherElement: XCUIElement, withVelocity velocity: XCUIGestureVelocity, thenHoldForDuration holdDuration: TimeInterval)
```

## Parameters

- `duration`: The duration of the initial press-and-hold gesture.
- `otherElement`: The element over which to finish the drag gesture.
- `velocity`: The speed at which to move from the initial press position to the other element, expressed in pixels per second.
- `holdDuration`: The duration for which to hold the dragged element over the other element.

## See Also

### Tapping and pressing

- [tap()](tap%28%29.md): Sends a tap event to a hittable point the system computes for the element.
- [doubleTap()](doubletap%28%29.md): Sends a double-tap event to a hittable point the system computes for the element.
- [press(forDuration:)](press%28forduration_%29.md): Sends a press-and-hold gesture to a hittable point the system computes for the element, holding for the duration you specify.
- [press(forDuration:thenDragTo:)](press%28forduration_thendragto_%29.md): Initiates a press-and-hold gesture, then drags to another element.

# pressForDuration:thenDragToElement:withVelocity:thenHoldForDuration: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

Initiates a press-and-hold gesture, drags to another element at a velocity, and holds for a duration, all of which you specify.

## Declaration

```objectivec
- (void) pressForDuration:(NSTimeInterval) duration thenDragToElement:(XCUIElement *) otherElement withVelocity:(XCUIGestureVelocity) velocity thenHoldForDuration:(NSTimeInterval) holdDuration;
```

## Parameters

- `duration`: The duration of the initial press-and-hold gesture.
- `otherElement`: The element over which to finish the drag gesture.
- `velocity`: The speed at which to move from the initial press position to the other element, expressed in pixels per second.
- `holdDuration`: The duration for which to hold the dragged element over the other element.

## See Also

### Tapping and pressing

- [tap](tap%28%29.md): Sends a tap event to a hittable point the system computes for the element.
- [doubleTap](doubletap%28%29.md): Sends a double-tap event to a hittable point the system computes for the element.
- [pressForDuration:](press%28forduration_%29.md): Sends a press-and-hold gesture to a hittable point the system computes for the element, holding for the duration you specify.
- [pressForDuration:thenDragToElement:](press%28forduration_thendragto_%29.md): Initiates a press-and-hold gesture, then drags to another element.
