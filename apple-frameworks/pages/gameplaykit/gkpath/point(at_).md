> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkpath/point(at:)](https://developer.apple.com/documentation/gameplaykit/gkpath/point(at:))

# point(at:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the 2D point at the specified index in the path’s list of vertices.

> Use the [float2(at:)](float2%28at_%29.md) method instead.

## Declaration

```swift
func point(at index: Int) -> vector_float2
```

## Parameters

- `index`: The index of the vertex to return, between `0` and the [numPoints](numpoints.md) value.

<a id="return-value"></a>

## Return Value

The vertex at the specified index.

## See Also

### Inspecting a Path’s Shape

- [numPoints](numpoints.md): The number of vertices in the path.
- [float2(at:)](float2%28at_%29.md): Returns the 2D point at the specified index in the path’s list of vertices.
- [float3(at:)](float3%28at_%29.md): Returns the 3D point at the specified index in the path’s list of vertices.

# pointAtIndex: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the 2D point at the specified index in the path’s list of vertices.

> Use the [float2AtIndex:](float2%28at_%29.md) method instead.

## Declaration

```objectivec
- (vector_float2) pointAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of the vertex to return, between `0` and the [numPoints](numpoints.md) value.

<a id="return-value"></a>

## Return Value

The vertex at the specified index.

## See Also

### Inspecting a Path’s Shape

- [numPoints](numpoints.md): The number of vertices in the path.
- [float2AtIndex:](float2%28at_%29.md): Returns the 2D point at the specified index in the path’s list of vertices.
- [float3AtIndex:](float3%28at_%29.md): Returns the 3D point at the specified index in the path’s list of vertices.
