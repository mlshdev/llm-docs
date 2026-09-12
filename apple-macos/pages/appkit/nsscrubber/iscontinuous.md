> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/iscontinuous](https://developer.apple.com/documentation/appkit/nsscrubber/iscontinuous)

# isContinuous (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that, together with the [mode](mode-swift.property.md) property, determines scrubber interaction style.

## Declaration

```swift
var isContinuous: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

For details on how to choose the right [isContinuous](iscontinuous.md) value for your app, see [Choose a scrubber touch-interaction model](../nsscrubber.md#Choose-a-scrubber-touch-interaction-model).

## See Also

### Changing the layout

- [scrubberLayout](scrubberlayout.md): An object used to describe the layout of items within the scrubber.
- [mode](mode-swift.property.md): A setting that determines whether interaction with the scrubber is fixed or free.
- [NSScrubber.Mode](mode-swift.enum.md): The scrolling behavior for a scrubber.
- [itemAlignment](itemalignment.md): A setting that specifies the snapping behavior of items in the scrubber.
- [NSScrubber.Alignment](alignment.md): The specified preferred alignment of items within the scrubber, when they come to rest following a user’s scrolling or paging interaction.

# continuous (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that, together with the [mode](mode-swift.property.md) property, determines scrubber interaction style.

## Declaration

```objectivec
@property (getter=isContinuous) BOOL continuous;
```

<a id="Discussion"></a>

## Discussion

For details on how to choose the right [continuous](iscontinuous.md) value for your app, see [Choose a scrubber touch-interaction model](../nsscrubber.md#Choose-a-scrubber-touch-interaction-model).

## See Also

### Changing the layout

- [scrubberLayout](scrubberlayout.md): An object used to describe the layout of items within the scrubber.
- [mode](mode-swift.property.md): A setting that determines whether interaction with the scrubber is fixed or free.
- [NSScrubberMode](mode-swift.enum.md): The scrolling behavior for a scrubber.
- [itemAlignment](itemalignment.md): A setting that specifies the snapping behavior of items in the scrubber.
- [NSScrubberAlignment](alignment.md): The specified preferred alignment of items within the scrubber, when they come to rest following a user’s scrolling or paging interaction.
