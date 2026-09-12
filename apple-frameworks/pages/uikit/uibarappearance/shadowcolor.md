> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarappearance/shadowcolor](https://developer.apple.com/documentation/uikit/uibarappearance/shadowcolor)

# shadowColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The color to apply to the bar’s custom or default shadow.

## Declaration

```swift
@NSCopying var shadowColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

UIKit uses this property and the [shadowImage](shadowimage.md) property to determine the shadow’s appearance. When [shadowImage](shadowimage.md) is `nil`, the bar displays a default shadow tinted according to the value of this property. If this property is `nil` or contains the [clear](../uicolor/clear.md) color, the bar displays no shadow.

If [shadowImage](shadowimage.md) contains a template image, the bar uses the image for the shadow and tints it using the value in this property. If this property is `nil` or contains the [clear](../uicolor/clear.md) color, the bar displays no shadow. However, if [shadowImage](shadowimage.md) doesn’t contain a template image, the bar displays the image without applying the color in this property.

## See Also

### Configuring the shadow appearance

- [shadowImage](shadowimage.md): The image to use for the bar’s shadow.

# shadowColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The color to apply to the bar’s custom or default shadow.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIColor * shadowColor;
```

<a id="Discussion"></a>

## Discussion

UIKit uses this property and the [shadowImage](shadowimage.md) property to determine the shadow’s appearance. When [shadowImage](shadowimage.md) is `nil`, the bar displays a default shadow tinted according to the value of this property. If this property is `nil` or contains the [clearColor](../uicolor/clear.md) color, the bar displays no shadow.

If [shadowImage](shadowimage.md) contains a template image, the bar uses the image for the shadow and tints it using the value in this property. If this property is `nil` or contains the [clearColor](../uicolor/clear.md) color, the bar displays no shadow. However, if [shadowImage](shadowimage.md) doesn’t contain a template image, the bar displays the image without applying the color in this property.

## See Also

### Configuring the shadow appearance

- [shadowImage](shadowimage.md): The image to use for the bar’s shadow.
