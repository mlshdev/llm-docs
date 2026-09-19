> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/relativedatetimeformatter/datetimestyle-swift.enum/named

# RelativeDateTimeFormatter.DateTimeStyle.named (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A style that uses named styles to describe relative dates, such as “yesterday”, “last week”, or “next week”.

## Declaration

```swift
case named
```

<a id="Discussion"></a>

## Discussion

The formatter falls back to using [RelativeDateTimeFormatter.DateTimeStyle.numeric](numeric.md) if a name isn’t available.

## See Also

### Formatting Dates and Times

- [RelativeDateTimeFormatter.DateTimeStyle.numeric](numeric.md): A style that uses a numeric style to describe relative dates, such as “1 day ago” or “in 3 weeks”.

# NSRelativeDateTimeFormatterStyleNamed (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A style that uses named styles to describe relative dates, such as “yesterday”, “last week”, or “next week”.

## Declaration

```objectivec
NSRelativeDateTimeFormatterStyleNamed
```

<a id="Discussion"></a>

## Discussion

The formatter falls back to using [NSRelativeDateTimeFormatterStyleNumeric](numeric.md) if a name isn’t available.

## See Also

### Formatting Dates and Times

- [NSRelativeDateTimeFormatterStyleNumeric](numeric.md): A style that uses a numeric style to describe relative dates, such as “1 day ago” or “in 3 weeks”.
