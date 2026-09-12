> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorwell/pulldowntarget](https://developer.apple.com/documentation/appkit/nscolorwell/pulldowntarget)

# pulldownTarget (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The target object that defines the action you want to perform when someone interacts with the color well.

## Declaration

```swift
weak var pulldownTarget: AnyObject? { get set }
```

<a id="Discussion"></a>

## Discussion

Specify a custom action method to replace the system popover and color picker. For a color well with the [NSColorWell.Style.minimal](style/minimal.md) or [NSColorWell.Style.expanded](style/expanded.md) style, clicks in the color area normally display a popover with the system color picker.  If you specify a value for this property and the [pulldownAction](pulldownaction.md) property, clicks in the color area execute your custom action method instead.

## See Also

### Customizing the color selection behavior

- [pulldownAction](pulldownaction.md): The action to perform when someone clicks in the color area of the color well.

# pulldownTarget (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The target object that defines the action you want to perform when someone interacts with the color well.

## Declaration

```objectivec
@property (weak, nullable) id pulldownTarget;
```

<a id="Discussion"></a>

## Discussion

Specify a custom action method to replace the system popover and color picker. For a color well with the [NSColorWellStyleMinimal](style/minimal.md) or [NSColorWellStyleExpanded](style/expanded.md) style, clicks in the color area normally display a popover with the system color picker.  If you specify a value for this property and the [pulldownAction](pulldownaction.md) property, clicks in the color area execute your custom action method instead.

## See Also

### Customizing the color selection behavior

- [pulldownAction](pulldownaction.md): The action to perform when someone clicks in the color area of the color well.
