> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/multipliedreportingoverflow(by:)](https://developer.apple.com/documentation/swift/int/multipliedreportingoverflow(by:))

# multipliedReportingOverflow(by:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the product of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.

## Declaration

```swift
func multipliedReportingOverflow(by other: Int) -> (partialValue: Int, overflow: Bool)
```

<a id="return-value"></a>

## Return Value

A tuple containing the result of the multiplication along with a Boolean value indicating whether overflow occurred. If the `overflow` component is `false`, the `partialValue` component contains the entire product. If the `overflow` component is `true`, an overflow occurred and the `partialValue` component contains the truncated product of this value and `rhs`.

## See Also

### Performing Calculations with Overflow

- [addingReportingOverflow(\_:)](addingreportingoverflow%28__%29.md): Returns the sum of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [subtractingReportingOverflow(\_:)](subtractingreportingoverflow%28__%29.md): Returns the difference obtained by subtracting the given value from this value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividedReportingOverflow(by:)](dividedreportingoverflow%28by_%29.md): Returns the quotient obtained by dividing this value by the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [remainderReportingOverflow(dividingBy:)](remainderreportingoverflow%28dividingby_%29.md): Returns the remainder after dividing this value by the given value, along with a Boolean value indicating whether overflow occurred during division.
