> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/scrollconfiguration-swift.class)

# PaperMarkupViewController.ScrollConfiguration

**Framework:** PaperKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A cross-platform type that provides access to scroll view functionality.

## Declaration

```swift
final class ScrollConfiguration
```

## Topics

### Configuring scroll indicators

- [visibleScrollIndicators](scrollconfiguration-swift.class/visiblescrollindicators.md): The axes for which scroll indicators are visible.
- [PaperMarkupViewController.ScrollConfiguration.Axis](scrollconfiguration-swift.class/axis.md): The axes you use to specify scroll view behavior.

### Configuring bouncing behavior

- [bounces](scrollconfiguration-swift.class/bounces.md): The axes for which the scroll view bounces past the edge of content and back again.
- [alwaysBounces](scrollconfiguration-swift.class/alwaysbounces.md): The axes for which bouncing always occurs when scrolling reaches the end of the content.
- [bouncesZoom](scrollconfiguration-swift.class/bounceszoom.md): A Boolean value that controls whether the scroll view animates the content scaling when the scaling exceeds the maximum or minimum limits.

### Configuring content insets

- [contentInset](scrollconfiguration-swift.class/contentinset-1ktjn.md): The custom distance to inset the content view from the scroll view edges.
- [contentInset](scrollconfiguration-swift.class/contentinset-3vn4v.md): The custom distance to inset the content view from the safe area or scroll view edges.
- [adjustedContentInset](scrollconfiguration-swift.class/adjustedcontentinset.md): The insets that the system derives from the content insets and safe area insets.
- [contentInsetAdjustmentBehavior](scrollconfiguration-swift.class/contentinsetadjustmentbehavior.md): The behavior for determining the adjusted content inset.

### Configuring scroll state

- [isScrollEnabled](scrollconfiguration-swift.class/isscrollenabled.md): A Boolean value that determines whether scrolling is enabled.
- [isDirectionalLockEnabled](scrollconfiguration-swift.class/isdirectionallockenabled.md): A Boolean value that determines whether scrolling is disabled in a particular direction.
- [scrollsToTop](scrollconfiguration-swift.class/scrollstotop.md): A Boolean value that controls whether the scroll-to-top gesture is enabled.

### Configuring scroll indicator insets

- [verticalScrollIndicatorInsets](scrollconfiguration-swift.class/verticalscrollindicatorinsets-4gy4y.md): The vertical scroll indicator’s insets.
- [verticalScrollIndicatorInsets](scrollconfiguration-swift.class/verticalscrollindicatorinsets-79jxb.md): The vertical scroll indicator’s insets.
- [horizontalScrollIndicatorInsets](scrollconfiguration-swift.class/horizontalscrollindicatorinsets-5nzvz.md): The horizontal scroll indicator’s insets.
- [horizontalScrollIndicatorInsets](scrollconfiguration-swift.class/horizontalscrollindicatorinsets-6inpv.md): The horizontal scroll indicator’s insets.

### Configuring zoom scale

- [zoomScale](scrollconfiguration-swift.class/zoomscale.md): The current scale factor applied to the scroll view’s content.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)

## See Also

### Scrolling and zooming

- [scrollConfiguration](scrollconfiguration-swift.property.md): The configuration object that provides access to scroll view functionality.
- [contentVisibleFrame](contentvisibleframe.md): The visible area of content in the scroll view.
- [setContentVisibleFrame(\_:animated:)](setcontentvisibleframe%28__animated_%29.md): Zooms to a specific area of the content so that it’s visible in the scroll view.
- [zoomRange](zoomrange.md): A floating-point range that specifies the minimum and maximum scale factor that can apply to the canvas’ content.
