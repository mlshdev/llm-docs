> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/init(string:locale:)](https://developer.apple.com/documentation/foundation/decimal/init(string:locale:))

# init(string:locale:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a decimal by parsing a string according to the provided locale’s conventions.

## Declaration

```swift
init?(string: String, locale: Locale? = nil)
```

## Parameters

- `string`: A string containing a formatted decimal value.
- `locale`: A locale that indicates the formatting conventions used by `string`.

## See Also

### Creating a decimal by parsing a string

- [init(\_:format:lenient:)](init%28__format_lenient_%29-6fk71.md): Creates and initializes a decimal by parsing a string according to the provided format style.
- [init(\_:format:lenient:)](init%28__format_lenient_%29-8t5o2.md): Creates and initializes a decimal by parsing a string according to the provided currency format style.
- [init(\_:format:lenient:)](init%28__format_lenient_%29-3u6o6.md): Creates and initializes a percentage decimal by parsing a string according to the provided format style.
- [init(\_:strategy:)](init%28__strategy_%29.md): Creates and initializes a decimal by parsing an arbitrary type according to the provided parse strategy.
- [Decimal.ParseStrategy](parsestrategy.md): A parse strategy for creating decimal values from formatted strings.
