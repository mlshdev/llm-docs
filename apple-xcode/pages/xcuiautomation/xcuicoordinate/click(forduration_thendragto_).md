> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuicoordinate/click(forduration:thendragto:)](https://developer.apple.com/documentation/xcuiautomation/xcuicoordinate/click(forduration:thendragto:))

# click(forDuration:thenDragTo:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · Xcode 16.3+

Clicks and holds for a duration you specify, then drags to the other coordinate.

## Declaration

```swift
func click(forDuration duration: TimeInterval, thenDragTo otherCoordinate: XCUICoordinate)
```

## Parameters

- `duration`: The duration of the initial click and hold.
- `otherCoordinate`: The coordinate over which to finish the drag gesture.

## See Also

### Clicking

- [click()](click%28%29.md): Sends a click event at the coordinate.
- [click(forDuration:thenDragTo:withVelocity:thenHoldForDuration:)](click%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Clicks and holds for a duration, drags at a velocity, and holds over the other coordinate for a duration, all of which you specify.
- [doubleClick()](doubleclick%28%29.md): Sends a double-click event at the coordinate.
- [rightClick()](rightclick%28%29.md): Sends a Control-click event at the coordinate.

# clickForDuration:thenDragToCoordinate: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · Xcode 16.3+

Clicks and holds for a duration you specify, then drags to the other coordinate.

## Declaration

```objectivec
- (void) clickForDuration:(NSTimeInterval) duration thenDragToCoordinate:(XCUICoordinate *) otherCoordinate;
```

## Parameters

- `duration`: The duration of the initial click and hold.
- `otherCoordinate`: The coordinate over which to finish the drag gesture.

## See Also

### Clicking

- [click](click%28%29.md): Sends a click event at the coordinate.
- [clickForDuration:thenDragToCoordinate:withVelocity:thenHoldForDuration:](click%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Clicks and holds for a duration, drags at a velocity, and holds over the other coordinate for a duration, all of which you specify.
- [doubleClick](doubleclick%28%29.md): Sends a double-click event at the coordinate.
- [rightClick](rightclick%28%29.md): Sends a Control-click event at the coordinate.
