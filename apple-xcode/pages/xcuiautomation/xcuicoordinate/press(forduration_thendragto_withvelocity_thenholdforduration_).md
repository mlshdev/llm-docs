> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuicoordinate/press(forduration:thendragto:withvelocity:thenholdforduration:)](https://developer.apple.com/documentation/xcuiautomation/xcuicoordinate/press(forduration:thendragto:withvelocity:thenholdforduration:))

# press(forDuration:thenDragTo:withVelocity:thenHoldForDuration:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

Initiates a press-and-hold gesture, drags to another coordinate with a velocity you specify, and holds for a duration you specify.

## Declaration

```swift
func press(forDuration duration: TimeInterval, thenDragTo otherCoordinate: XCUICoordinate, withVelocity velocity: XCUIGestureVelocity, thenHoldForDuration holdDuration: TimeInterval)
```

## Parameters

- `duration`: The duration of the initial press-and-hold gesture.
- `otherCoordinate`: The coordinate over which to finish the drag.
- `velocity`: The speed at which to move from the initial press position to the other element, expressed in pixels per second.
- `holdDuration`: The duration for which to hold over the other coordinate after dragging.

<a id="Discussion"></a>

## Discussion

This method is available in iOS and for Touch Bar interactions in macOS.

## See Also

### Tapping and pressing

- [tap()](tap%28%29.md): Sends a tap event at the coordinate.
- [doubleTap()](doubletap%28%29.md): Sends a double-tap event at the coordinate.
- [press(forDuration:)](press%28forduration_%29.md): Initiates a press-and-hold gesture at the coordinate, holding for the duration you specify.
- [press(forDuration:thenDragTo:)](press%28forduration_thendragto_%29.md): Initiates a press-and-hold gesture at the coordinate, then drags to another coordinate.

# pressForDuration:thenDragToCoordinate:withVelocity:thenHoldForDuration: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

Initiates a press-and-hold gesture, drags to another coordinate with a velocity you specify, and holds for a duration you specify.

## Declaration

```objectivec
- (void) pressForDuration:(NSTimeInterval) duration thenDragToCoordinate:(XCUICoordinate *) otherCoordinate withVelocity:(XCUIGestureVelocity) velocity thenHoldForDuration:(NSTimeInterval) holdDuration;
```

## Parameters

- `duration`: The duration of the initial press-and-hold gesture.
- `otherCoordinate`: The coordinate over which to finish the drag.
- `velocity`: The speed at which to move from the initial press position to the other element, expressed in pixels per second.
- `holdDuration`: The duration for which to hold over the other coordinate after dragging.

<a id="Discussion"></a>

## Discussion

This method is available in iOS and for Touch Bar interactions in macOS.

## See Also

### Tapping and pressing

- [tap](tap%28%29.md): Sends a tap event at the coordinate.
- [doubleTap](doubletap%28%29.md): Sends a double-tap event at the coordinate.
- [pressForDuration:](press%28forduration_%29.md): Initiates a press-and-hold gesture at the coordinate, holding for the duration you specify.
- [pressForDuration:thenDragToCoordinate:](press%28forduration_thendragto_%29.md): Initiates a press-and-hold gesture at the coordinate, then drags to another coordinate.
