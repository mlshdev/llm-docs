> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutfragment/state-swift.property](https://developer.apple.com/documentation/appkit/nstextlayoutfragment/state-swift.property)

# state (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The layout information state.

## Declaration

```swift
var state: NSTextLayoutFragment.State { get }
```

<a id="Discussion"></a>

## Discussion

This property is KVO-compliant.

## See Also

### Getting element information

- [NSTextLayoutFragment.State](state-swift.enum.md): Values that describe the possible layout states.
- [rangeInElement](rangeinelement.md): The range inside the text element relative to the document origin.
- [textElement](textelement.md): The parent text element.

# state (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The layout information state.

## Declaration

```objectivec
@property (readonly) NSTextLayoutFragmentState state;
```

<a id="Discussion"></a>

## Discussion

This property is KVO-compliant.

## See Also

### Getting element information

- [NSTextLayoutFragmentState](state-swift.enum.md): Values that describe the possible layout states.
- [rangeInElement](rangeinelement.md): The range inside the text element relative to the document origin.
- [textElement](textelement.md): The parent text element.
