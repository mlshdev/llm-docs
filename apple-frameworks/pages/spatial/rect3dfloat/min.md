> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3dfloat/min](https://developer.apple.com/documentation/spatial/rect3dfloat/min)

# min (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
var min: Point3DFloat { get }
```

<a id="discussion"></a>

## Discussion

Returns a point that represents the corner of the rectangle with smallest x-, y-, and z-coordinates.

# SPRect3DFloatGetMinimum (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPPoint3DFloat SPRect3DFloatGetMinimum(SPRect3DFloat rect);
```

## Parameters

- `rect`: The source rectangle.

<a id="return-value"></a>

## Return Value

A point that represents the corner of the rectangle with smallest x-, y-, and z-coordinates.

<a id="discussion"></a>

## Discussion

Returns a point that represents the corner of the rectangle with smallest x-, y-, and z-coordinates.
