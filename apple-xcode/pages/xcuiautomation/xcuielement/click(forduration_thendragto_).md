> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/click(forduration:thendragto:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/click(forduration:thendragto:))

# click(forDuration:thenDragTo:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · Xcode 16.3+

Clicks and holds an element for a duration you specify, and then drags it to another element.

## Declaration

```swift
func click(forDuration duration: TimeInterval, thenDragTo otherElement: XCUIElement)
```

## Parameters

- `duration`: The duration of the initial click and hold.
- `otherElement`: The element over which to finish the drag.

<a id="Discussion"></a>

## Discussion

Specify a duration long enough to initiate a drag operation. If the element exists within a scrollable view but is offscreen, the framework attempts to scroll the element onscreen before performing the click.

## See Also

### Clicking

- [click()](click%28%29.md): Sends a click event to a hittable point computed for the element.
- [click(forDuration:thenDragTo:withVelocity:thenHoldForDuration:)](click%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Clicks and holds an element for a duration, drags it at a velocity, and holds it over another element for a duration, all of which you specify.
- [doubleClick()](doubleclick%28%29.md): Sends a double-click event to a hittable point the system computes for the element.
- [rightClick()](rightclick%28%29.md): Sends a Control-click event to a hittable point the system computes for the element.

# clickForDuration:thenDragToElement: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · Xcode 16.3+

Clicks and holds an element for a duration you specify, and then drags it to another element.

## Declaration

```objectivec
- (void) clickForDuration:(NSTimeInterval) duration thenDragToElement:(XCUIElement *) otherElement;
```

## Parameters

- `duration`: The duration of the initial click and hold.
- `otherElement`: The element over which to finish the drag.

<a id="Discussion"></a>

## Discussion

Specify a duration long enough to initiate a drag operation. If the element exists within a scrollable view but is offscreen, the framework attempts to scroll the element onscreen before performing the click.

## See Also

### Clicking

- [click](click%28%29.md): Sends a click event to a hittable point computed for the element.
- [clickForDuration:thenDragToElement:withVelocity:thenHoldForDuration:](click%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Clicks and holds an element for a duration, drags it at a velocity, and holds it over another element for a duration, all of which you specify.
- [doubleClick](doubleclick%28%29.md): Sends a double-click event to a hittable point the system computes for the element.
- [rightClick](rightclick%28%29.md): Sends a Control-click event to a hittable point the system computes for the element.
