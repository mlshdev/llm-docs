> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglasseffectview/contentview](https://developer.apple.com/documentation/appkit/nsglasseffectview/contentview)

# contentView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The view to embed in glass.

## Declaration

```swift
var contentView: NSView? { get set }
```

<a id="discussion"></a>

## Discussion

> **Important**

> `NSGlassEffectView` only guarantees the `contentView` will be placed inside the glass effect; arbitrary subviews aren’t guaranteed specific behavior with regard to z-order in relation to the content view or glass effect.

# contentView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The view to embed in glass.

## Declaration

```objectivec
@property (strong, nullable) NSView * contentView;
```

<a id="discussion"></a>

## Discussion

> **Important**

> `NSGlassEffectView` only guarantees the `contentView` will be placed inside the glass effect; arbitrary subviews aren’t guaranteed specific behavior with regard to z-order in relation to the content view or glass effect.
