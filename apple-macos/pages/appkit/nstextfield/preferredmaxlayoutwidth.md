> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/preferredmaxlayoutwidth](https://developer.apple.com/documentation/appkit/nstextfield/preferredmaxlayoutwidth)

# preferredMaxLayoutWidth (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The maximum width of the text field’s intrinsic content size.

## Declaration

```swift
var preferredMaxLayoutWidth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If the text field wraps, the intrinsic height is large enough to show the entire text contents at that width.

The default value is `0`, indicating no maximum preferred width.

# preferredMaxLayoutWidth (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The maximum width of the text field’s intrinsic content size.

## Declaration

```objectivec
@property CGFloat preferredMaxLayoutWidth;
```

<a id="Discussion"></a>

## Discussion

If the text field wraps, the intrinsic height is large enough to show the entire text contents at that width.

The default value is `0`, indicating no maximum preferred width.
