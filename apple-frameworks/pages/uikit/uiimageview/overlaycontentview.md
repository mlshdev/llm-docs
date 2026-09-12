> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/overlaycontentview](https://developer.apple.com/documentation/uikit/uiimageview/overlaycontentview)

# overlayContentView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+

A view for hosting layered content on top of the image view.

## Declaration

```swift
var overlayContentView: UIView { get }
```

<a id="Discussion"></a>

## Discussion

Use this view to host content that you want layered on top of the image view. This view is managed by the image view itself and is automatically sized to fill the image view’s frame rectangle. Add your subviews and use layout constraints to position them within the view. When the [adjustsImageWhenAncestorFocused](adjustsimagewhenancestorfocused.md) property is [true](https://developer.apple.com/documentation/swift/true), the overlay view receives the same floating effects as the image view when it’s focused.

The view in this property clips its subviews to its bounds rectangle by default, but you can change that behavior using the [clipsToBounds](../uiview/clipstobounds.md) property.

# overlayContentView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+

A view for hosting layered content on top of the image view.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UIView * overlayContentView;
```

<a id="Discussion"></a>

## Discussion

Use this view to host content that you want layered on top of the image view. This view is managed by the image view itself and is automatically sized to fill the image view’s frame rectangle. Add your subviews and use layout constraints to position them within the view. When the [adjustsImageWhenAncestorFocused](adjustsimagewhenancestorfocused.md) property is [true](https://developer.apple.com/documentation/swift/true), the overlay view receives the same floating effects as the image view when it’s focused.

The view in this property clips its subviews to its bounds rectangle by default, but you can change that behavior using the [clipsToBounds](../uiview/clipstobounds.md) property.
