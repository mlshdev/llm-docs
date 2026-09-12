> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/contentstretch](https://developer.apple.com/documentation/uikit/uiview/contentstretch)

# contentStretch

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 6.0) · iPadOS 3.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The rectangle that defines the stretchable and nonstretchable regions of a view.

> To achieve the same effect, use [resizableImageWithCapInsets:](../uiimage/resizableimage%28withcapinsets_%29.md) instead.

## Declaration

```objectivec
@property (nonatomic) CGRect contentStretch;
```

<a id="Discussion"></a>

## Discussion

You use this property to control how a view’s content is stretched to fill its bounds when the view is resized. Content stretching is often used to animate the resizing of a view. For example, buttons and other controls use stretching to maintain crisp borders while allowing the middle portions of the control to stretch and fill the available space.

> **Note**

>  For stretching image-based content, it is simpler to use a [UIImageView](../uiimageview.md) object with a stretchable image instead of setting this property. You can create a stretchable image using the [stretchableImageWithLeftCapWidth:topCapHeight:](../uiimage/stretchableimage%28withleftcapwidth_topcapheight_%29.md) method of [UIImage](../uiimage.md).

The values you specify for this rectangle must be normalized to the range `0.0` to `1.0`. These values are then scaled to the size of the view’s content to obtain the appropriate pixel values. The default value for this rectangle has an origin of `(0.0, 0.0)` and a size of `(1.0, 1.0)`. This reflects a rectangle whose stretchable portion encompasses the entire content.
