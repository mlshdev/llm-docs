> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuicoordinate/press(forduration:thendragto:)](https://developer.apple.com/documentation/xcuiautomation/xcuicoordinate/press(forduration:thendragto:))

# press(forDuration:thenDragTo:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

Initiates a press-and-hold gesture at the coordinate, then drags to another coordinate.

## Declaration

```swift
func press(forDuration duration: TimeInterval, thenDragTo otherCoordinate: XCUICoordinate)
```

## Parameters

- `duration`: The duration of the initial press-and-hold gesture.
- `otherCoordinate`: The coordinate to finish the drag gesture over.

<a id="Discussion"></a>

## Discussion

This method is available in iOS and for Touch Bar interactions in macOS.

## See Also

### Tapping and pressing

- [tap()](tap%28%29.md): Sends a tap event at the coordinate.
- [doubleTap()](doubletap%28%29.md): Sends a double-tap event at the coordinate.
- [press(forDuration:)](press%28forduration_%29.md): Initiates a press-and-hold gesture at the coordinate, holding for the duration you specify.
- [press(forDuration:thenDragTo:withVelocity:thenHoldForDuration:)](press%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Initiates a press-and-hold gesture, drags to another coordinate with a velocity you specify, and holds for a duration you specify.

# pressForDuration:thenDragToCoordinate: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

Initiates a press-and-hold gesture at the coordinate, then drags to another coordinate.

## Declaration

```objectivec
- (void) pressForDuration:(NSTimeInterval) duration thenDragToCoordinate:(XCUICoordinate *) otherCoordinate;
```

## Parameters

- `duration`: The duration of the initial press-and-hold gesture.
- `otherCoordinate`: The coordinate to finish the drag gesture over.

<a id="Discussion"></a>

## Discussion

This method is available in iOS and for Touch Bar interactions in macOS.

## See Also

### Tapping and pressing

- [tap](tap%28%29.md): Sends a tap event at the coordinate.
- [doubleTap](doubletap%28%29.md): Sends a double-tap event at the coordinate.
- [pressForDuration:](press%28forduration_%29.md): Initiates a press-and-hold gesture at the coordinate, holding for the duration you specify.
- [pressForDuration:thenDragToCoordinate:withVelocity:thenHoldForDuration:](press%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Initiates a press-and-hold gesture, drags to another coordinate with a velocity you specify, and holds for a duration you specify.
