> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuicoordinate/press(forduration:)](https://developer.apple.com/documentation/xcuiautomation/xcuicoordinate/press(forduration:))

# press(forDuration:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

Initiates a press-and-hold gesture at the coordinate, holding for the duration you specify.

## Declaration

```swift
func press(forDuration duration: TimeInterval)
```

## Parameters

- `duration`: The duration of the press, in seconds.

## See Also

### Tapping and pressing

- [tap()](tap%28%29.md): Sends a tap event at the coordinate.
- [doubleTap()](doubletap%28%29.md): Sends a double-tap event at the coordinate.
- [press(forDuration:thenDragTo:)](press%28forduration_thendragto_%29.md): Initiates a press-and-hold gesture at the coordinate, then drags to another coordinate.
- [press(forDuration:thenDragTo:withVelocity:thenHoldForDuration:)](press%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Initiates a press-and-hold gesture, drags to another coordinate with a velocity you specify, and holds for a duration you specify.

# pressForDuration: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

Initiates a press-and-hold gesture at the coordinate, holding for the duration you specify.

## Declaration

```objectivec
- (void) pressForDuration:(NSTimeInterval) duration;
```

## Parameters

- `duration`: The duration of the press, in seconds.

## See Also

### Tapping and pressing

- [tap](tap%28%29.md): Sends a tap event at the coordinate.
- [doubleTap](doubletap%28%29.md): Sends a double-tap event at the coordinate.
- [pressForDuration:thenDragToCoordinate:](press%28forduration_thendragto_%29.md): Initiates a press-and-hold gesture at the coordinate, then drags to another coordinate.
- [pressForDuration:thenDragToCoordinate:withVelocity:thenHoldForDuration:](press%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Initiates a press-and-hold gesture, drags to another coordinate with a velocity you specify, and holds for a duration you specify.
