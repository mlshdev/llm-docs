> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/init(_:strategy:)](https://developer.apple.com/documentation/foundation/decimal/init(_:strategy:))

# init(\_:strategy:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates and initializes a decimal by parsing an arbitrary type according to the provided parse strategy.

## Declaration

```swift
init<S>(_ value: S.ParseInput, strategy: S) throws where S : ParseStrategy, S.ParseOutput == Decimal
```

## Parameters

- `value`: An instance of `strategy`’s input type.
- `strategy`: A parse strategy that describes how the parser converts the string to a decimal value.

## See Also

### Creating a decimal by parsing a string

- [init(\_:format:lenient:)](init%28__format_lenient_%29-6fk71.md): Creates and initializes a decimal by parsing a string according to the provided format style.
- [init(\_:format:lenient:)](init%28__format_lenient_%29-8t5o2.md): Creates and initializes a decimal by parsing a string according to the provided currency format style.
- [init(\_:format:lenient:)](init%28__format_lenient_%29-3u6o6.md): Creates and initializes a percentage decimal by parsing a string according to the provided format style.
- [init(string:locale:)](init%28string_locale_%29.md): Creates and initializes a decimal by parsing a string according to the provided locale’s conventions.
- [Decimal.ParseStrategy](parsestrategy.md): A parse strategy for creating decimal values from formatted strings.
