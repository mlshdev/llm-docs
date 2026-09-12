> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/optional/==(_:_:)-2tyup](https://developer.apple.com/documentation/swift/optional/==(_:_:)-2tyup)

# ==(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the left-hand-side argument is `nil`.

## Declaration

```swift
static func == (lhs: borrowing Wrapped?, rhs: _OptionalNilComparisonType) -> Bool
```

## Parameters

- `lhs`: A value to compare to `nil`.
- `rhs`: A `nil` literal.

<a id="discussion"></a>

## Discussion

You can use this equal-to operator (`==`) to test whether an optional instance is `nil` even when the wrapped value’s type does not conform to the `Equatable` protocol.

The following example declares the `stream` variable as an optional instance of a hypothetical `DataStream` type. Although `DataStream` is not an `Equatable` type, this operator allows checking whether `stream` is `nil`.

```swift
var stream: DataStream? = nil
if stream == nil {
    print("No data stream is configured.")
}
// Prints "No data stream is configured."
```
