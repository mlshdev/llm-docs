> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontmetrics/metricsfortextstyle:](https://developer.apple.com/documentation/uikit/uifontmetrics/metricsfortextstyle:)

# metricsForTextStyle:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates and returns a font metrics object for the specified text style.

## Declaration

```objectivec
+ (instancetype) metricsForTextStyle:(UIFontTextStyle) textStyle;
```

## Parameters

- `textStyle`: The text style that you want to apply to the font. For example, you might specify [UIFontTextStyleBody](../uifont/textstyle/body.md) for your app’s main content.

<a id="return-value"></a>

## Return Value

An initialized font metrics object.

## See Also

### Creating a Font Metrics Object

- [initForTextStyle:](init%28fortextstyle_%29.md): Creates a font metrics object for the specified text style.
- [defaultMetrics](default.md): The default font metrics object for content.
- [UIFontTextStyle](../uifont/textstyle.md): Constants that describe the preferred styles for fonts.
