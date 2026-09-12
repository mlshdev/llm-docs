> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/tintcolor](https://developer.apple.com/documentation/uikit/uiimageview/tintcolor)

# tintColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A color used to tint template images in the view hierarchy.

## Declaration

```swift
var tintColor: UIColor! { get set }
```

<a id="Discussion"></a>

## Discussion

The default is `nil`. If a non-`nil` value is specified, the color is applied to any template images attached to the image view. For more information, see the [renderingMode](../uiimage/renderingmode-swift.property.md) property on the [UIImage](../uiimage.md) class.

## See Also

### Configuring the image view

- [isUserInteractionEnabled](isuserinteractionenabled.md): A Boolean value that determines whether user events are ignored and removed from the event queue.
- [isHighlighted](ishighlighted.md): A Boolean value that determines whether the image is highlighted.

# tintColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A color used to tint template images in the view hierarchy.

## Declaration

```objectivec
@property (nonatomic, strong, null_resettable) UIColor * tintColor;
```

<a id="Discussion"></a>

## Discussion

The default is `nil`. If a non-`nil` value is specified, the color is applied to any template images attached to the image view. For more information, see the [renderingMode](../uiimage/renderingmode-swift.property.md) property on the [UIImage](../uiimage.md) class.

## See Also

### Configuring the image view

- [userInteractionEnabled](isuserinteractionenabled.md): A Boolean value that determines whether user events are ignored and removed from the event queue.
- [highlighted](ishighlighted.md): A Boolean value that determines whether the image is highlighted.
