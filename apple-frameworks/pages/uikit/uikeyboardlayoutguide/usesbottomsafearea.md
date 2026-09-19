> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uikeyboardlayoutguide/usesbottomsafearea

# usesBottomSafeArea (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the layout guide uses the view’s safe area layout guide.

## Declaration

```swift
var usesBottomSafeArea: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to [true](https://developer.apple.com/documentation/swift/true), indicating that the layout guide ties to the [bottomAnchor](../uilayoutguide/bottomanchor.md) of the view’s [safeAreaLayoutGuide](../uiview/safearealayoutguide.md).

Set to [false](https://developer.apple.com/documentation/swift/false) to tie the layout guide to the [bottomAnchor](../uiview/bottomanchor.md) of the view instead.

# usesBottomSafeArea (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the layout guide uses the view’s safe area layout guide.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL usesBottomSafeArea;
```

<a id="Discussion"></a>

## Discussion

Defaults to [true](https://developer.apple.com/documentation/swift/true), indicating that the layout guide ties to the [bottomAnchor](../uilayoutguide/bottomanchor.md) of the view’s [safeAreaLayoutGuide](../uiview/safearealayoutguide.md).

Set to [false](https://developer.apple.com/documentation/swift/false) to tie the layout guide to the [bottomAnchor](../uiview/bottomanchor.md) of the view instead.
