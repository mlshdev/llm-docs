> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsglasseffectcontainerview/contentview

# contentView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The view that contains descendant views to merge together when in proximity to each other.

## Declaration

```swift
var contentView: NSView? { get set }
```

<a id="discussion"></a>

## Discussion

The glass effect container view does the following:

1. Elevates the z-order of descendants of `contentView` to position them above the `contentView`.
2. Merges descendants together if the views are sufficiently similar and within the proximity specified in [spacing](spacing.md).
3. Processes similar glass effect views as a batch to improve performance.

# contentView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The view that contains descendant views to merge together when in proximity to each other.

## Declaration

```objectivec
@property (strong, nullable) NSView * contentView;
```

<a id="discussion"></a>

## Discussion

The glass effect container view does the following:

1. Elevates the z-order of descendants of `contentView` to position them above the `contentView`.
2. Merges descendants together if the views are sufficiently similar and within the proximity specified in [spacing](spacing.md).
3. Processes similar glass effect views as a batch to improve performance.
