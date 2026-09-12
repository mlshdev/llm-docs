> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/formatstyle/currency/init(code:locale:)](https://developer.apple.com/documentation/foundation/decimal/formatstyle/currency/init(code:locale:))

# init(code:locale:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a decimal currency format style that uses the given currency code and locale.

## Declaration

```swift
init(code: String, locale: Locale = .autoupdatingCurrent)
```

## Parameters

- `code`: The currency code to use, such as `EUR` or `JPY`.
- `locale`: The locale to use when formatting or parsing decimal values. Defaults to [autoupdatingCurrent](../../../locale/autoupdatingcurrent.md).
