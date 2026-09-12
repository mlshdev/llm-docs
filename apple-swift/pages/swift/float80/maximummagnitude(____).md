> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/maximummagnitude(_:_:)](https://developer.apple.com/documentation/swift/float80/maximummagnitude(_:_:))

# maximumMagnitude(\_:\_:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** macOS 10.10+

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
