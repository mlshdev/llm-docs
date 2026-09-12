> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/doubletap()](https://developer.apple.com/documentation/xcuiautomation/xcuielement/doubletap())

# doubleTap() (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

Sends a double-tap event to a hittable point the system computes for the element.

## Declaration

```swift
func doubleTap()
```

<a id="Discussion"></a>

## Discussion

If the element exists within a scrollable view but is offscreen, the framework attempts to scroll the element onscreen before performing the double tap.

## See Also

### Tapping and pressing

- [tap()](tap%28%29.md): Sends a tap event to a hittable point the system computes for the element.
- [press(forDuration:)](press%28forduration_%29.md): Sends a press-and-hold gesture to a hittable point the system computes for the element, holding for the duration you specify.
- [press(forDuration:thenDragTo:)](press%28forduration_thendragto_%29.md): Initiates a press-and-hold gesture, then drags to another element.
- [press(forDuration:thenDragTo:withVelocity:thenHoldForDuration:)](press%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Initiates a press-and-hold gesture, drags to another element at a velocity, and holds for a duration, all of which you specify.

# doubleTap (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

Sends a double-tap event to a hittable point the system computes for the element.

## Declaration

```objectivec
- (void) doubleTap;
```

<a id="Discussion"></a>

## Discussion

If the element exists within a scrollable view but is offscreen, the framework attempts to scroll the element onscreen before performing the double tap.

## See Also

### Tapping and pressing

- [tap](tap%28%29.md): Sends a tap event to a hittable point the system computes for the element.
- [pressForDuration:](press%28forduration_%29.md): Sends a press-and-hold gesture to a hittable point the system computes for the element, holding for the duration you specify.
- [pressForDuration:thenDragToElement:](press%28forduration_thendragto_%29.md): Initiates a press-and-hold gesture, then drags to another element.
- [pressForDuration:thenDragToElement:withVelocity:thenHoldForDuration:](press%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Initiates a press-and-hold gesture, drags to another element at a velocity, and holds for a duration, all of which you specify.
