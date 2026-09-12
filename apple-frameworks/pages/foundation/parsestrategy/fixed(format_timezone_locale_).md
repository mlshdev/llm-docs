> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/parsestrategy/fixed(format:timezone:locale:)](https://developer.apple.com/documentation/foundation/parsestrategy/fixed(format:timezone:locale:))

# fixed(format:timeZone:locale:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A fixed-format date parse strategy.

## Declaration

```swift
static func fixed(format: Date.FormatString, timeZone: TimeZone, locale: Locale? = nil) -> Self where Self == Date.ParseStrategy
```

## Parameters

- `format`: The string describing the parsing format.
- `timeZone`: The [TimeZone](../timezone.md) used to create the string representation of the date.
- `locale`: The [Locale](../locale.md) used to create the string representation of the date.

<a id="return-value"></a>

## Return Value

A strategy for parsing a date.

## See Also

### Commonly-used parsers

- [url](url.md): Conforms when `Self` is `URL.ParseStrategy`. A parse strategy for URLs.
- [name](name.md): Conforms when `Self` is `PersonNameComponents.ParseStrategy`. A parse strategy for person name components.
