> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutfragment/textelement](https://developer.apple.com/documentation/appkit/nstextlayoutfragment/textelement)

# textElement (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The parent text element.

## Declaration

```swift
weak var textElement: NSTextElement? { get }
```

## See Also

### Getting element information

- [state](state-swift.property.md): The layout information state.
- [NSTextLayoutFragment.State](state-swift.enum.md): Values that describe the possible layout states.
- [rangeInElement](rangeinelement.md): The range inside the text element relative to the document origin.

# textElement (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The parent text element.

## Declaration

```objectivec
@property (weak, readonly) NSTextElement * textElement;
```

## See Also

### Getting element information

- [state](state-swift.property.md): The layout information state.
- [NSTextLayoutFragmentState](state-swift.enum.md): Values that describe the possible layout states.
- [rangeInElement](rangeinelement.md): The range inside the text element relative to the document origin.
