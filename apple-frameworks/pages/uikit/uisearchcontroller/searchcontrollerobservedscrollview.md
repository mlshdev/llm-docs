> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontroller/searchcontrollerobservedscrollview](https://developer.apple.com/documentation/uikit/uisearchcontroller/searchcontrollerobservedscrollview)

# searchControllerObservedScrollView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 27.0)

The view with which the controller coordinates scrolling animations.

> Use [setContentScrollView(\_:for:)](../uiviewcontroller/setcontentscrollview%28__for_%29.md) on the [searchResultsController](searchresultscontroller.md) instead.

## Declaration

```swift
var searchControllerObservedScrollView: UIScrollView? { get set }
```

## See Also

### Deprecated

- [dimsBackgroundDuringPresentation](dimsbackgroundduringpresentation.md): Deprecated. A Boolean indicating whether to dim the underlying content during a search.

# searchControllerObservedScrollView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 27.0)

The view with which the controller coordinates scrolling animations.

> Use [setContentScrollView:forEdge:](../uiviewcontroller/setcontentscrollview%28__for_%29.md) on the [searchResultsController](searchresultscontroller.md) instead.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIScrollView * searchControllerObservedScrollView;
```

## See Also

### Deprecated

- [dimsBackgroundDuringPresentation](dimsbackgroundduringpresentation.md): Deprecated. A Boolean indicating whether to dim the underlying content during a search.
