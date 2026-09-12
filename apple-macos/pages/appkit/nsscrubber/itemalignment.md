> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/itemalignment](https://developer.apple.com/documentation/appkit/nsscrubber/itemalignment)

# itemAlignment (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A setting that specifies the snapping behavior of items in the scrubber.

## Declaration

```swift
var itemAlignment: NSScrubber.Alignment { get set }
```

<a id="Discussion"></a>

## Discussion

Set the value to something other than [NSScrubber.Alignment.none](alignment/none.md) to ensure that an item is aligned with the specified position when the scrubber comes to rest.

The default value is [NSScrubber.Alignment.none](alignment/none.md).

## See Also

### Changing the layout

- [scrubberLayout](scrubberlayout.md): An object used to describe the layout of items within the scrubber.
- [mode](mode-swift.property.md): A setting that determines whether interaction with the scrubber is fixed or free.
- [NSScrubber.Mode](mode-swift.enum.md): The scrolling behavior for a scrubber.
- [NSScrubber.Alignment](alignment.md): The specified preferred alignment of items within the scrubber, when they come to rest following a user’s scrolling or paging interaction.
- [isContinuous](iscontinuous.md): A Boolean value that, together with the [mode](mode-swift.property.md) property, determines scrubber interaction style.

# itemAlignment (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A setting that specifies the snapping behavior of items in the scrubber.

## Declaration

```objectivec
@property NSScrubberAlignment itemAlignment;
```

<a id="Discussion"></a>

## Discussion

Set the value to something other than [NSScrubberAlignmentNone](alignment/none.md) to ensure that an item is aligned with the specified position when the scrubber comes to rest.

The default value is [NSScrubberAlignmentNone](alignment/none.md).

## See Also

### Changing the layout

- [scrubberLayout](scrubberlayout.md): An object used to describe the layout of items within the scrubber.
- [mode](mode-swift.property.md): A setting that determines whether interaction with the scrubber is fixed or free.
- [NSScrubberMode](mode-swift.enum.md): The scrolling behavior for a scrubber.
- [NSScrubberAlignment](alignment.md): The specified preferred alignment of items within the scrubber, when they come to rest following a user’s scrolling or paging interaction.
- [continuous](iscontinuous.md): A Boolean value that, together with the [mode](mode-swift.property.md) property, determines scrubber interaction style.
