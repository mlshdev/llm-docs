> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/click(forduration:thendragto:withvelocity:thenholdforduration:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/click(forduration:thendragto:withvelocity:thenholdforduration:))

# click(forDuration:thenDragTo:withVelocity:thenHoldForDuration:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · Xcode 16.3+

Clicks and holds an element for a duration, drags it at a velocity, and holds it over another element for a duration, all of which you specify.

## Declaration

```swift
func click(forDuration duration: TimeInterval, thenDragTo otherElement: XCUIElement, withVelocity velocity: XCUIGestureVelocity, thenHoldForDuration holdDuration: TimeInterval)
```

## Parameters

- `duration`: The duration of the initial click and hold.
- `otherElement`: The element over which to finish the drag.
- `velocity`: The speed at which to move from the initial click position to the other element, expressed in pixels per second.
- `holdDuration`: The duration for which to hold the dragged element over the other element.

<a id="Discussion"></a>

## Discussion

Specify a duration long enough to initiate a drag operation. If the element exists within a scrollable view but is offscreen, the framework attempts to scroll the element onscreen before performing the click.

## See Also

### Clicking

- [click()](click%28%29.md): Sends a click event to a hittable point computed for the element.
- [click(forDuration:thenDragTo:)](click%28forduration_thendragto_%29.md): Clicks and holds an element for a duration you specify, and then drags it to another element.
- [doubleClick()](doubleclick%28%29.md): Sends a double-click event to a hittable point the system computes for the element.
- [rightClick()](rightclick%28%29.md): Sends a Control-click event to a hittable point the system computes for the element.

# clickForDuration:thenDragToElement:withVelocity:thenHoldForDuration: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · Xcode 16.3+

Clicks and holds an element for a duration, drags it at a velocity, and holds it over another element for a duration, all of which you specify.

## Declaration

```objectivec
- (void) clickForDuration:(NSTimeInterval) duration thenDragToElement:(XCUIElement *) otherElement withVelocity:(XCUIGestureVelocity) velocity thenHoldForDuration:(NSTimeInterval) holdDuration;
```

## Parameters

- `duration`: The duration of the initial click and hold.
- `otherElement`: The element over which to finish the drag.
- `velocity`: The speed at which to move from the initial click position to the other element, expressed in pixels per second.
- `holdDuration`: The duration for which to hold the dragged element over the other element.

<a id="Discussion"></a>

## Discussion

Specify a duration long enough to initiate a drag operation. If the element exists within a scrollable view but is offscreen, the framework attempts to scroll the element onscreen before performing the click.

## See Also

### Clicking

- [click](click%28%29.md): Sends a click event to a hittable point computed for the element.
- [clickForDuration:thenDragToElement:](click%28forduration_thendragto_%29.md): Clicks and holds an element for a duration you specify, and then drags it to another element.
- [doubleClick](doubleclick%28%29.md): Sends a double-click event to a hittable point the system computes for the element.
- [rightClick](rightclick%28%29.md): Sends a Control-click event to a hittable point the system computes for the element.
