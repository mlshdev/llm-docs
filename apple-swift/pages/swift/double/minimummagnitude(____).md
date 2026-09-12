> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/minimummagnitude(_:_:)](https://developer.apple.com/documentation/swift/double/minimummagnitude(_:_:))

# minimumMagnitude(\_:\_:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value with lesser magnitude.

## Declaration

```swift
static func minimumMagnitude(_ x: Self, _ y: Self) -> Self
```

## Parameters

- `x`: A floating-point value.
- `y`: Another floating-point value.

<a id="return-value"></a>

## Return Value

Whichever of `x` or `y` has lesser magnitude, or whichever is a number if the other is NaN.

<a id="discussion"></a>

## Discussion

This method returns the value with lesser magnitude of the two given values, preserving order and eliminating NaN when possible. For two values `x` and `y`, the result of `minimumMagnitude(x, y)` is `x` if `x.magnitude <= y.magnitude`, `y` if `y.magnitude < x.magnitude`, or whichever of `x` or `y` is a number if the other is a quiet NaN. If both `x` and `y` are NaN, or either `x` or `y` is a signaling NaN, the result is NaN.

```swift
Double.minimumMagnitude(10.0, -25.0)
// 10.0
Double.minimumMagnitude(10.0, .nan)
// 10.0
Double.minimumMagnitude(.nan, -25.0)
// -25.0
Double.minimumMagnitude(.nan, .nan)
// nan
```

The `minimumMagnitude` method implements the `minNumMag` operation defined by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933).

## See Also

### Comparing Values

- [Floating-Point Operators for Double](../floating-point-operators-for-double.md): Perform arithmetic and bitwise operations or compare values.
- [isEqual(to:)](isequal%28to_%29.md): Returns a Boolean value indicating whether this instance is equal to the given value.
- [isLess(than:)](isless%28than_%29.md): Returns a Boolean value indicating whether this instance is less than the given value.
- [isLessThanOrEqualTo(\_:)](islessthanorequalto%28__%29.md): Returns a Boolean value indicating whether this instance is less than or equal to the given value.
- [isTotallyOrdered(belowOrEqualTo:)](istotallyordered%28beloworequalto_%29.md): Returns a Boolean value indicating whether this instance should precede or tie positions with the given value in an ascending sort.
- [minimum(\_:\_:)](minimum%28____%29.md): Returns the lesser of the two given values.
- [maximum(\_:\_:)](maximum%28____%29.md): Returns the greater of the two given values.
- [maximumMagnitude(\_:\_:)](maximummagnitude%28____%29.md): Returns the value with greater magnitude.
