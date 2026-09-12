> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int64/subtractingreportingoverflow(_:)](https://developer.apple.com/documentation/swift/int64/subtractingreportingoverflow(_:))

# subtractingReportingOverflow(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the difference obtained by subtracting the given value from this value, along with a Boolean value indicating whether overflow occurred in the operation.

## Declaration

```swift
func subtractingReportingOverflow(_ other: Int64) -> (partialValue: Int64, overflow: Bool)
```

<a id="return-value"></a>

## Return Value

A tuple containing the result of the subtraction along with a Boolean value indicating whether overflow occurred. If the `overflow` component is `false`, the `partialValue` component contains the entire difference. If the `overflow` component is `true`, an overflow occurred and the `partialValue` component contains the truncated result of `rhs` subtracted from this value.
