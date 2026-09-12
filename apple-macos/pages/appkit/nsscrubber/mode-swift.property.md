> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/mode-swift.property](https://developer.apple.com/documentation/appkit/nsscrubber/mode-swift.property)

# mode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A setting that determines whether interaction with the scrubber is fixed or free.

## Declaration

```swift
var mode: NSScrubber.Mode { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [NSScrubber.Mode.fixed](mode-swift.enum/fixed.md), the scrubber’s content doesn’t scroll as the user pans. Instead, the element under the user’s finger is highlighted. The highlighted item becomes selected when the user completes the pan gesture. The default value is [NSScrubber.Mode.fixed](mode-swift.enum/fixed.md).

When [mode](mode-swift.property.md) is set to [NSScrubber.Mode.free](mode-swift.enum/free.md), panning over the scrubber scrolls the scrubber’s content. A user selects items by tapping on them.

## See Also

### Changing the layout

- [scrubberLayout](scrubberlayout.md): An object used to describe the layout of items within the scrubber.
- [NSScrubber.Mode](mode-swift.enum.md): The scrolling behavior for a scrubber.
- [itemAlignment](itemalignment.md): A setting that specifies the snapping behavior of items in the scrubber.
- [NSScrubber.Alignment](alignment.md): The specified preferred alignment of items within the scrubber, when they come to rest following a user’s scrolling or paging interaction.
- [isContinuous](iscontinuous.md): A Boolean value that, together with the [mode](mode-swift.property.md) property, determines scrubber interaction style.

# mode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A setting that determines whether interaction with the scrubber is fixed or free.

## Declaration

```objectivec
@property NSScrubberMode mode;
```

<a id="Discussion"></a>

## Discussion

When set to [NSScrubberModeFixed](mode-swift.enum/fixed.md), the scrubber’s content doesn’t scroll as the user pans. Instead, the element under the user’s finger is highlighted. The highlighted item becomes selected when the user completes the pan gesture. The default value is [NSScrubberModeFixed](mode-swift.enum/fixed.md).

When [mode](mode-swift.property.md) is set to [NSScrubberModeFree](mode-swift.enum/free.md), panning over the scrubber scrolls the scrubber’s content. A user selects items by tapping on them.

## See Also

### Changing the layout

- [scrubberLayout](scrubberlayout.md): An object used to describe the layout of items within the scrubber.
- [NSScrubberMode](mode-swift.enum.md): The scrolling behavior for a scrubber.
- [itemAlignment](itemalignment.md): A setting that specifies the snapping behavior of items in the scrubber.
- [NSScrubberAlignment](alignment.md): The specified preferred alignment of items within the scrubber, when they come to rest following a user’s scrolling or paging interaction.
- [continuous](iscontinuous.md): A Boolean value that, together with the [mode](mode-swift.property.md) property, determines scrubber interaction style.
