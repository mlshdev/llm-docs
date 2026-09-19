> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextlayoutfragment/textelement

# textElement (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
