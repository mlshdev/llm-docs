> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/scrubberlayout](https://developer.apple.com/documentation/appkit/nsscrubber/scrubberlayout)

# scrubberLayout (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

An object used to describe the layout of items within the scrubber.

## Declaration

```swift
var scrubberLayout: NSScrubberLayout { get set }
```

## See Also

### Changing the layout

- [mode](mode-swift.property.md): A setting that determines whether interaction with the scrubber is fixed or free.
- [NSScrubber.Mode](mode-swift.enum.md): The scrolling behavior for a scrubber.
- [itemAlignment](itemalignment.md): A setting that specifies the snapping behavior of items in the scrubber.
- [NSScrubber.Alignment](alignment.md): The specified preferred alignment of items within the scrubber, when they come to rest following a user’s scrolling or paging interaction.
- [isContinuous](iscontinuous.md): A Boolean value that, together with the [mode](mode-swift.property.md) property, determines scrubber interaction style.

# scrubberLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

An object used to describe the layout of items within the scrubber.

## Declaration

```objectivec
@property (strong) NSScrubberLayout * scrubberLayout;
```

## See Also

### Changing the layout

- [mode](mode-swift.property.md): A setting that determines whether interaction with the scrubber is fixed or free.
- [NSScrubberMode](mode-swift.enum.md): The scrolling behavior for a scrubber.
- [itemAlignment](itemalignment.md): A setting that specifies the snapping behavior of items in the scrubber.
- [NSScrubberAlignment](alignment.md): The specified preferred alignment of items within the scrubber, when they come to rest following a user’s scrolling or paging interaction.
- [continuous](iscontinuous.md): A Boolean value that, together with the [mode](mode-swift.property.md) property, determines scrubber interaction style.
