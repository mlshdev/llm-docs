> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3dfloat/init(origin:size:)-8tqau](https://developer.apple.com/documentation/spatial/rect3dfloat/init(origin:size:)-8tqau)

# init(origin:size:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init(origin: Point3DFloat, size: Size3DFloat)
```

## Parameters

- `origin`: A point structure that specifies the origin of the rectangle.
- `size`: A size structure that specifies the size of the rectangle.

<a id="return-value"></a>

## Return Value

A new rectangle stucture.

<a id="discussion"></a>

## Discussion

Returns a rectangle at the specified origin.

# SPRect3DFloatMakeAtOrigin (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatMakeAtOrigin(SPPoint3DFloat origin, SPSize3DFloat size);
```

## Parameters

- `origin`: A point structure that specifies the origin of the rectangle.
- `size`: A size structure that specifies the size of the rectangle.

<a id="return-value"></a>

## Return Value

A new rectangle stucture.

<a id="discussion"></a>

## Discussion

Returns a rectangle at the specified origin.
