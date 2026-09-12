> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontmetrics/default](https://developer.apple.com/documentation/uikit/uifontmetrics/default)

# default (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The default font metrics object for content.

## Declaration

```swift
class var `default`: UIFontMetrics { get }
```

<a id="Discussion"></a>

## Discussion

The font metrics object in this property uses the [body](../uifont/textstyle/body.md) style.

## See Also

### Creating a Font Metrics Object

- [init(forTextStyle:)](init%28fortextstyle_%29.md): Creates a font metrics object for the specified text style.
- [UIFont.TextStyle](../uifont/textstyle.md): Constants that describe the preferred styles for fonts.

# defaultMetrics (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The default font metrics object for content.

## Declaration

```objectivec
@property (class, strong, readonly) UIFontMetrics * defaultMetrics;
```

<a id="Discussion"></a>

## Discussion

The font metrics object in this property uses the [UIFontTextStyleBody](../uifont/textstyle/body.md) style.

## See Also

### Creating a Font Metrics Object

- [initForTextStyle:](init%28fortextstyle_%29.md): Creates a font metrics object for the specified text style.
- [metricsForTextStyle:](metricsfortextstyle_.md): Creates and returns a font metrics object for the specified text style.
- [UIFontTextStyle](../uifont/textstyle.md): Constants that describe the preferred styles for fonts.
