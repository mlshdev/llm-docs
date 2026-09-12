> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3dfloat/integral](https://developer.apple.com/documentation/spatial/rect3dfloat/integral)

# integral (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
var integral: Rect3DFloat { get }
```

<a id="discussion"></a>

## Discussion

Returns the smallest rectangle with integer coordinates that contains the source rectangle.

A rectangle with the smallest integer values for its origin and size that contains the source rectangle. That is, given a rectangle with fractional origin or size values, integral rounds the rectangle’s origin downward and its size upward to the nearest whole integers, such that the result contains the original rectangle.

# SPRect3DFloatIntegral (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatIntegral(SPRect3DFloat rect);
```

## Parameters

- `rect`: The source rectangle.

<a id="return-value"></a>

## Return Value

The smallest rectangle with integer coordinates that contains the source rectangle.

<a id="discussion"></a>

## Discussion

Returns the smallest rectangle with integer coordinates that contains the source rectangle.

A rectangle with the smallest integer values for its origin and size that contains the source rectangle. That is, given a rectangle with fractional origin or size values, integral rounds the rectangle’s origin downward and its size upward to the nearest whole integers, such that the result contains the original rectangle.
