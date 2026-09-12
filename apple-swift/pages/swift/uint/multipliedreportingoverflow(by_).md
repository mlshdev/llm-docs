> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint/multipliedreportingoverflow(by:)](https://developer.apple.com/documentation/swift/uint/multipliedreportingoverflow(by:))

# multipliedReportingOverflow(by:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the product of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.

## Declaration

```swift
func multipliedReportingOverflow(by other: UInt) -> (partialValue: UInt, overflow: Bool)
```

<a id="return-value"></a>

## Return Value

A tuple containing the result of the multiplication along with a Boolean value indicating whether overflow occurred. If the `overflow` component is `false`, the `partialValue` component contains the entire product. If the `overflow` component is `true`, an overflow occurred and the `partialValue` component contains the truncated product of this value and `rhs`.
