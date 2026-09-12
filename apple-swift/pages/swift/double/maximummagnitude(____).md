> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/maximummagnitude(_:_:)](https://developer.apple.com/documentation/swift/double/maximummagnitude(_:_:))

# maximumMagnitude(\_:\_:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value with greater magnitude.

## Declaration

```swift
static func maximumMagnitude(_ x: Self, _ y: Self) -> Self
```

## Parameters

- `x`: A floating-point value.
- `y`: Another floating-point value.

<a id="return-value"></a>

## Return Value

Whichever of `x` or `y` has greater magnitude, or whichever is a number if the other is NaN.

<a id="discussion"></a>

## Discussion

This method returns the value with greater magnitude of the two given values, preserving order and eliminating NaN when possible. For two values `x` and `y`, the result of `maximumMagnitude(x, y)` is `x` if `x.magnitude > y.magnitude`, `y` if `x.magnitude <= y.magnitude`, or whichever of `x` or `y` is a number if the other is a quiet NaN. If both `x` and `y` are NaN, or either `x` or `y` is a signaling NaN, the result is NaN.

```swift
Double.maximumMagnitude(10.0, -25.0)
// -25.0
Double.maximumMagnitude(10.0, .nan)
// 10.0
Double.maximumMagnitude(.nan, -25.0)
// -25.0
Double.maximumMagnitude(.nan, .nan)
// nan
```

The `maximumMagnitude` method implements the `maxNumMag` operation defined by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933).

## See Also

### Comparing Values

- [Floating-Point Operators for Double](../floating-point-operators-for-double.md): Perform arithmetic and bitwise operations or compare values.
- [isEqual(to:)](isequal%28to_%29.md): Returns a Boolean value indicating whether this instance is equal to the given value.
- [isLess(than:)](isless%28than_%29.md): Returns a Boolean value indicating whether this instance is less than the given value.
- [isLessThanOrEqualTo(\_:)](islessthanorequalto%28__%29.md): Returns a Boolean value indicating whether this instance is less than or equal to the given value.
- [isTotallyOrdered(belowOrEqualTo:)](istotallyordered%28beloworequalto_%29.md): Returns a Boolean value indicating whether this instance should precede or tie positions with the given value in an ascending sort.
- [minimum(\_:\_:)](minimum%28____%29.md): Returns the lesser of the two given values.
- [minimumMagnitude(\_:\_:)](minimummagnitude%28____%29.md): Returns the value with lesser magnitude.
- [maximum(\_:\_:)](maximum%28____%29.md): Returns the greater of the two given values.
