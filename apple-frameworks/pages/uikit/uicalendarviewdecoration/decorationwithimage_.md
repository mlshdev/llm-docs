> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarviewdecoration/decorationwithimage:](https://developer.apple.com/documentation/uikit/uicalendarviewdecoration/decorationwithimage:)

# decorationWithImage:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a new calendar view decoration with the image you specify, using the system fill color and medium relative size.

## Declaration

```objectivec
+ (instancetype) decorationWithImage:(UIImage *) image;
```

## Parameters

- `image`: An image to display as the decoration.

<a id="return-value"></a>

## Return Value

A calendar view decoration.

<a id="Discussion"></a>

## Discussion

The color defaults to [systemFillColor](../uicolor/systemfill.md) if you don’t specify it.

The size defaults to [UICalendarViewDecorationSizeMedium](../uicalendarview/decorationsize/medium.md) if you don’t specify it.

## See Also

### Creating Image Decoration Views

- [initWithImage:color:size:](initwithimage_color_size_.md): Creates a new calendar view decoration with the image, color, and size that you specify.
- [decorationWithImage:color:size:](decorationwithimage_color_size_.md): Creates a new calendar view decoration with the image, color, and size that you specify.
