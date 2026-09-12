> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/raycast(_:)](https://developer.apple.com/documentation/arkit/arsession/raycast(_:))

# raycast(\_:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Checks once for intersections between a ray and real-world surfaces.

## Declaration

```swift
func raycast(_ query: ARRaycastQuery) -> [ARRaycastResult]
```

## Parameters

- `query`: The ray you create from a screen point you’re interested in.

<a id="return-value"></a>

## Return Value

An array of ray-cast results, sorted from nearest to furthest from the camera. The array is empty if the ray cast fails to find an intersection between the query’s ray and a real-world surface.

<a id="Discussion"></a>

## Discussion

Ray casting provides a 3D location in physical space that corresponds to a given 2D location on the screen. When you call this function, it succeeds in returning a result when a mathematical ray that ARKit casts outward from the user intersects with any real-world surfaces that ARKit detects in the physical environment.

## See Also

### Finding real-world surfaces

- [trackedRaycast(\_:updateHandler:)](trackedraycast%28__updatehandler_%29.md): Repeats a ray-cast query over time to notify you of updated surfaces in the physical environment.

# raycast: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Checks once for intersections between a ray and real-world surfaces.

## Declaration

```objectivec
- (NSArray<ARRaycastResult *> *) raycast:(ARRaycastQuery *) query;
```

## Parameters

- `query`: The ray you create from a screen point you’re interested in.

<a id="return-value"></a>

## Return Value

An array of ray-cast results, sorted from nearest to furthest from the camera. The array is empty if the ray cast fails to find an intersection between the query’s ray and a real-world surface.

<a id="Discussion"></a>

## Discussion

Ray casting provides a 3D location in physical space that corresponds to a given 2D location on the screen. When you call this function, it succeeds in returning a result when a mathematical ray that ARKit casts outward from the user intersects with any real-world surfaces that ARKit detects in the physical environment.

## See Also

### Finding real-world surfaces

- [trackedRaycast:updateHandler:](trackedraycast%28__updatehandler_%29.md): Repeats a ray-cast query over time to notify you of updated surfaces in the physical environment.
