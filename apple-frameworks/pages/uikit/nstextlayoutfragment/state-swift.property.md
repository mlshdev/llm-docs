> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutfragment/state-swift.property](https://developer.apple.com/documentation/uikit/nstextlayoutfragment/state-swift.property)

# state (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
