> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsparagraphstyle/defaulttabinterval](https://developer.apple.com/documentation/uikit/nsparagraphstyle/defaulttabinterval)

# defaultTabInterval (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The documentwide default tab interval.

## Declaration

```swift
var defaultTabInterval: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This property represents the default tab interval in points. Tabs after the last specified in [tabStops](tabstops.md) are placed at integer multiples of this distance (if positive). Default value is 0.0.

## See Also

### Accessing tab information

- [tabStops](tabstops.md): The text tab objects that represent the paragraph’s tab stops.
- [NSParagraphStyle.TextTabType](https://developer.apple.com/documentation/appkit/nsparagraphstyle/texttabtype): Deprecated. Constants that specify the type of tab stop.

# defaultTabInterval (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The documentwide default tab interval.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat defaultTabInterval;
```

<a id="Discussion"></a>

## Discussion

This property represents the default tab interval in points. Tabs after the last specified in [tabStops](tabstops.md) are placed at integer multiples of this distance (if positive). Default value is 0.0.

## See Also

### Accessing tab information

- [tabStops](tabstops.md): The text tab objects that represent the paragraph’s tab stops.
- [NSTextTabType](https://developer.apple.com/documentation/appkit/nsparagraphstyle/texttabtype): Deprecated. Constants that specify the type of tab stop.
