> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarviewdecoration/decorationwithcolor:size:](https://developer.apple.com/documentation/uikit/uicalendarviewdecoration/decorationwithcolor:size:)

# decorationWithColor:size:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a new calendar view decoration with a filled circle image, using the color and size that you specify.

## Declaration

```objectivec
+ (instancetype) decorationWithColor:(UIColor *) color size:(UICalendarViewDecorationSize) size;
```

## Parameters

- `color`: A color for the decoration.
- `size`: A relative size for the decoration.

<a id="return-value"></a>

## Return Value

A calendar view decoration.

<a id="Discussion"></a>

## Discussion

The color defaults to [systemFillColor](../uicolor/systemfill.md) if you don’t specify it.

The size defaults to .[UICalendarViewDecorationSizeMedium](../uicalendarview/decorationsize/medium.md) if you don’t specify it.

## See Also

### Creating a Default Decoration View

- [init](../uicalendarview/decoration/init%28%29.md): Creates a default calendar view decoration with a filled circle image, using the system fill color and medium size.
