> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint128/addingreportingoverflow(_:)](https://developer.apple.com/documentation/swift/uint128/addingreportingoverflow(_:))

# addingReportingOverflow(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the sum of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.

## Declaration

```swift
func addingReportingOverflow(_ other: UInt128) -> (partialValue: UInt128, overflow: Bool)
```

<a id="return-value"></a>

## Return Value

A tuple containing the result of the addition along with a Boolean value indicating whether overflow occurred. If the `overflow` component is `false`, the `partialValue` component contains the entire sum. If the `overflow` component is `true`, an overflow occurred and the `partialValue` component contains the truncated sum of this value and `rhs`.
