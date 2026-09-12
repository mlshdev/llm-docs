> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/press(forduration:thendragto:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/press(forduration:thendragto:))

# press(forDuration:thenDragTo:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

Initiates a press-and-hold gesture, then drags to another element.

## Declaration

```swift
func press(forDuration duration: TimeInterval, thenDragTo otherElement: XCUIElement)
```

## Parameters

- `duration`: The duration of the initial press-and-hold gesture.
- `otherElement`: The element over which to finish the drag. For example, when reordering table cells, this element is the reorder icon of the destination row.

<a id="Discussion"></a>

## Discussion

This interaction is suitable for table-cell reordering and similar operations.

## See Also

### Tapping and pressing

- [tap()](tap%28%29.md): Sends a tap event to a hittable point the system computes for the element.
- [doubleTap()](doubletap%28%29.md): Sends a double-tap event to a hittable point the system computes for the element.
- [press(forDuration:)](press%28forduration_%29.md): Sends a press-and-hold gesture to a hittable point the system computes for the element, holding for the duration you specify.
- [press(forDuration:thenDragTo:withVelocity:thenHoldForDuration:)](press%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Initiates a press-and-hold gesture, drags to another element at a velocity, and holds for a duration, all of which you specify.

# pressForDuration:thenDragToElement: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

Initiates a press-and-hold gesture, then drags to another element.

## Declaration

```objectivec
- (void) pressForDuration:(NSTimeInterval) duration thenDragToElement:(XCUIElement *) otherElement;
```

## Parameters

- `duration`: The duration of the initial press-and-hold gesture.
- `otherElement`: The element over which to finish the drag. For example, when reordering table cells, this element is the reorder icon of the destination row.

<a id="Discussion"></a>

## Discussion

This interaction is suitable for table-cell reordering and similar operations.

## See Also

### Tapping and pressing

- [tap](tap%28%29.md): Sends a tap event to a hittable point the system computes for the element.
- [doubleTap](doubletap%28%29.md): Sends a double-tap event to a hittable point the system computes for the element.
- [pressForDuration:](press%28forduration_%29.md): Sends a press-and-hold gesture to a hittable point the system computes for the element, holding for the duration you specify.
- [pressForDuration:thenDragToElement:withVelocity:thenHoldForDuration:](press%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Initiates a press-and-hold gesture, drags to another element at a velocity, and holds for a duration, all of which you specify.
