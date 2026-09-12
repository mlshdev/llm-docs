> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/integerformatstyle/init(locale:)](https://developer.apple.com/documentation/foundation/integerformatstyle/init(locale:))

# init(locale:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an integer format style that uses the given locale.

## Declaration

```swift
init(locale: Locale = .autoupdatingCurrent)
```

## Parameters

- `locale`: The locale to use when formatting or parsing integers. Defaults to [autoupdatingCurrent](../locale/autoupdatingcurrent.md).

<a id="Discussion"></a>

## Discussion

Create an [IntegerFormatStyle](../integerformatstyle.md) when you intend to apply a given style to multiple integers. The following example creates a style that uses the `en_US` locale, which uses three-based grouping and comma separators. It then applies this style to all the integers in an array.

```swift
let enUSstyle = IntegerFormatStyle<Int>(locale: Locale(identifier: "en_US"))
let nums = [100, 1000, 10000, 100000, 1000000]
let formattedNums = nums.map { enUSstyle.format($0) } // ["100", "1,000", "10,000", "100,000", "1,000,000"]
```

To format a single integer, you can use the [BinaryInteger](https://developer.apple.com/documentation/swift/binaryinteger) instance method [formatted(\_:)](https://developer.apple.com/documentation/swift/binaryinteger/formatted%28_:%29-4qd73), passing in an instance of [IntegerFormatStyle](../integerformatstyle.md).
