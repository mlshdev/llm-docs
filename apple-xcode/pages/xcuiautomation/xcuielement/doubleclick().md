> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/doubleclick()](https://developer.apple.com/documentation/xcuiautomation/xcuielement/doubleclick())

# doubleClick() (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · Xcode 16.3+

Sends a double-click event to a hittable point the system computes for the element.

## Declaration

```swift
func doubleClick()
```

<a id="Discussion"></a>

## Discussion

If the element exists within a scrollable view but is offscreen, the framework attempts to scroll the element onscreen before performing the double click.

## See Also

### Clicking

- [click()](click%28%29.md): Sends a click event to a hittable point computed for the element.
- [click(forDuration:thenDragTo:)](click%28forduration_thendragto_%29.md): Clicks and holds an element for a duration you specify, and then drags it to another element.
- [click(forDuration:thenDragTo:withVelocity:thenHoldForDuration:)](click%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Clicks and holds an element for a duration, drags it at a velocity, and holds it over another element for a duration, all of which you specify.
- [rightClick()](rightclick%28%29.md): Sends a Control-click event to a hittable point the system computes for the element.

# doubleClick (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · Xcode 16.3+

Sends a double-click event to a hittable point the system computes for the element.

## Declaration

```objectivec
- (void) doubleClick;
```

<a id="Discussion"></a>

## Discussion

If the element exists within a scrollable view but is offscreen, the framework attempts to scroll the element onscreen before performing the double click.

## See Also

### Clicking

- [click](click%28%29.md): Sends a click event to a hittable point computed for the element.
- [clickForDuration:thenDragToElement:](click%28forduration_thendragto_%29.md): Clicks and holds an element for a duration you specify, and then drags it to another element.
- [clickForDuration:thenDragToElement:withVelocity:thenHoldForDuration:](click%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Clicks and holds an element for a duration, drags it at a velocity, and holds it over another element for a duration, all of which you specify.
- [rightClick](rightclick%28%29.md): Sends a Control-click event to a hittable point the system computes for the element.
