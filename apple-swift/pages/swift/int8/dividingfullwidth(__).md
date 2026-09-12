> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int8/dividingfullwidth(_:)](https://developer.apple.com/documentation/swift/int8/dividingfullwidth(_:))

# dividingFullWidth(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a tuple containing the quotient and remainder of dividing the given value by this value.

## Declaration

```swift
func dividingFullWidth(_ dividend: (high: Int8, low: Int8.Magnitude)) -> (quotient: Int8, remainder: Int8)
```

## Parameters

- `dividend`: A tuple containing the high and low parts of a double-width integer. The `high` component of the value carries the sign, if the type is signed.

<a id="return-value"></a>

## Return Value

A tuple containing the quotient and remainder of `dividend` divided by this value.

<a id="discussion"></a>

## Discussion

The resulting quotient must be representable within the bounds of the type. If the quotient of dividing `dividend` by this value is too large to represent in the type, a runtime error will occur.
