> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint16/dividingfullwidth(_:)](https://developer.apple.com/documentation/swift/uint16/dividingfullwidth(_:))

# dividingFullWidth(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a tuple containing the quotient and remainder of dividing the given value by this value.

## Declaration

```swift
func dividingFullWidth(_ dividend: (high: UInt16, low: UInt16.Magnitude)) -> (quotient: UInt16, remainder: UInt16)
```

## Parameters

- `dividend`: A tuple containing the high and low parts of a double-width integer. The `high` component of the value carries the sign, if the type is signed.

<a id="return-value"></a>

## Return Value

A tuple containing the quotient and remainder of `dividend` divided by this value.

<a id="discussion"></a>

## Discussion

The resulting quotient must be representable within the bounds of the type. If the quotient of dividing `dividend` by this value is too large to represent in the type, a runtime error will occur.
