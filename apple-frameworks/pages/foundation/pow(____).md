> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/pow(_:_:)](https://developer.apple.com/documentation/foundation/pow(_:_:))

# pow(\_:\_:)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a decimal number raised to a given power.

## Declaration

```swift
func pow(_ x: Decimal, _ y: Int) -> Decimal
```

## Parameters

- `x`: A decimal value.
- `y`: The power by which to raise `x`.

<a id="return-value"></a>

## Return Value

The result of raising `x` to the power of `y`.

<a id="Discussion"></a>

## Discussion

If the result of this operation requires more precision than the `Decimal` type can provide, the result is rounded using the [NSDecimalNumber.RoundingMode.plain](nsdecimalnumber/roundingmode/plain.md) rounding mode. To specify a different rounding mode, use the [NSDecimalPower(\_:\_:\_:\_:)](nsdecimalpower%28________%29.md) function instead.
