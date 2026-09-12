> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarappearance/shadowimage](https://developer.apple.com/documentation/uikit/uibarappearance/shadowimage)

# shadowImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The image to use for the bar’s shadow.

## Declaration

```swift
var shadowImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

UIKit uses this property and the [shadowColor](shadowcolor.md) property to determine the shadow’s appearance. When this property is `nil`, the bar displays a default shadow tinted according to the value in the [shadowColor](shadowcolor.md) property. If [shadowColor](shadowcolor.md) is `nil` or contains the [clear](../uicolor/clear.md) color, the bar displays no shadow.

If this property contains a template image, the bar uses the image for the shadow and tints it using the value in [shadowColor](shadowcolor.md). If [shadowColor](shadowcolor.md) is `nil` or contains the [clear](../uicolor/clear.md) color, the bar displays no shadow. However, if this property doesn’t contain a template image, the bar displays the image without applying the shadow color.

## See Also

### Configuring the shadow appearance

- [shadowColor](shadowcolor.md): The color to apply to the bar’s custom or default shadow.

# shadowImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The image to use for the bar’s shadow.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) UIImage * shadowImage;
```

<a id="Discussion"></a>

## Discussion

UIKit uses this property and the [shadowColor](shadowcolor.md) property to determine the shadow’s appearance. When this property is `nil`, the bar displays a default shadow tinted according to the value in the [shadowColor](shadowcolor.md) property. If [shadowColor](shadowcolor.md) is `nil` or contains the [clearColor](../uicolor/clear.md) color, the bar displays no shadow.

If this property contains a template image, the bar uses the image for the shadow and tints it using the value in [shadowColor](shadowcolor.md). If [shadowColor](shadowcolor.md) is `nil` or contains the [clearColor](../uicolor/clear.md) color, the bar displays no shadow. However, if this property doesn’t contain a template image, the bar displays the image without applying the shadow color.

## See Also

### Configuring the shadow appearance

- [shadowColor](shadowcolor.md): The color to apply to the bar’s custom or default shadow.
