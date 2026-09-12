> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontmetrics/init(fortextstyle:)](https://developer.apple.com/documentation/uikit/uifontmetrics/init(fortextstyle:))

# init(forTextStyle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a font metrics object for the specified text style.

## Declaration

```swift
init(forTextStyle textStyle: UIFont.TextStyle)
```

## Parameters

- `textStyle`: The text style that you want to apply to the font. For example, you might specify [body](../uifont/textstyle/body.md) for your app’s main content.

<a id="return-value"></a>

## Return Value

An initialized font metrics object.

## See Also

### Creating a Font Metrics Object

- [default](default.md): The default font metrics object for content.
- [UIFont.TextStyle](../uifont/textstyle.md): Constants that describe the preferred styles for fonts.

# initForTextStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a font metrics object for the specified text style.

## Declaration

```objectivec
- (instancetype) initForTextStyle:(UIFontTextStyle) textStyle;
```

## Parameters

- `textStyle`: The text style that you want to apply to the font. For example, you might specify [UIFontTextStyleBody](../uifont/textstyle/body.md) for your app’s main content.

<a id="return-value"></a>

## Return Value

An initialized font metrics object.

## See Also

### Creating a Font Metrics Object

- [metricsForTextStyle:](metricsfortextstyle_.md): Creates and returns a font metrics object for the specified text style.
- [defaultMetrics](default.md): The default font metrics object for content.
- [UIFontTextStyle](../uifont/textstyle.md): Constants that describe the preferred styles for fonts.
