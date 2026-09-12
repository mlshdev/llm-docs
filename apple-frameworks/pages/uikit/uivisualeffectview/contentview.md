> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivisualeffectview/contentview](https://developer.apple.com/documentation/uikit/uivisualeffectview/contentview)

# contentView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A view object that can have a visual effect view added to it.

## Declaration

```swift
var contentView: UIView { get }
```

<a id="Discussion"></a>

## Discussion

Add subviews to the [contentView](contentview.md) and not to [UIVisualEffectView](../uivisualeffectview.md) directly.

## See Also

### Retrieving view information

- [effect](effect.md): The visual effect provided by the view.

# contentView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A view object that can have a visual effect view added to it.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UIView * contentView;
```

<a id="Discussion"></a>

## Discussion

Add subviews to the [contentView](contentview.md) and not to [UIVisualEffectView](../uivisualeffectview.md) directly.

## See Also

### Retrieving view information

- [effect](effect.md): The visual effect provided by the view.
