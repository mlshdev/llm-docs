> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/rect3dfloat/init(center:size:)-e8la

# init(center:size:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle at the specified center with the specified size.

## Declaration

```swift
init(center: Point3DFloat, size: Size3DFloat)
```

## Parameters

- `center`: A point structure that specifies the center of the rectangle.
- `size`: A size structure that specifies the sie of the rectangle.

<a id="return-value"></a>

## Return Value

A new rectangle stucture.

<a id="discussion"></a>

## Discussion

Returns a rectangle at the specified center.

# SPRect3DFloatMakeAtCenter (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle at the specified center with the specified size.

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatMakeAtCenter(SPPoint3DFloat center, SPSize3DFloat size);
```

## Parameters

- `center`: A point structure that specifies the center of the rectangle.
- `size`: A size structure that specifies the sie of the rectangle.

<a id="return-value"></a>

## Return Value

A new rectangle stucture.

<a id="discussion"></a>

## Discussion

Returns a rectangle at the specified center.
