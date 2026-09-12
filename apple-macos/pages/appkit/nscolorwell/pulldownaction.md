> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorwell/pulldownaction](https://developer.apple.com/documentation/appkit/nscolorwell/pulldownaction)

# pulldownAction (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The action to perform when someone clicks in the color area of the color well.

## Declaration

```swift
var pulldownAction: Selector? { get set }
```

<a id="Discussion"></a>

## Discussion

Specify a custom action method to replace the system popover and color picker. For a color well with the [NSColorWell.Style.minimal](style/minimal.md) or [NSColorWell.Style.expanded](style/expanded.md) style, clicks in the color area normally display a popover with the system color picker.  If you specify a value for this property and the [pulldownTarget](pulldowntarget.md) property, clicks in the color area execute your custom action method instead.

## See Also

### Customizing the color selection behavior

- [pulldownTarget](pulldowntarget.md): The target object that defines the action you want to perform when someone interacts with the color well.

# pulldownAction (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The action to perform when someone clicks in the color area of the color well.

## Declaration

```objectivec
@property (nullable) SEL pulldownAction;
```

<a id="Discussion"></a>

## Discussion

Specify a custom action method to replace the system popover and color picker. For a color well with the [NSColorWellStyleMinimal](style/minimal.md) or [NSColorWellStyleExpanded](style/expanded.md) style, clicks in the color area normally display a popover with the system color picker.  If you specify a value for this property and the [pulldownTarget](pulldowntarget.md) property, clicks in the color area execute your custom action method instead.

## See Also

### Customizing the color selection behavior

- [pulldownTarget](pulldowntarget.md): The target object that defines the action you want to perform when someone interacts with the color well.
