> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arraycastquery/init(origin:direction:allowing:alignment:)](https://developer.apple.com/documentation/arkit/arraycastquery/init(origin:direction:allowing:alignment:))

# init(origin:direction:allowing:alignment:) (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Creates a new raycast query.

## Declaration

```swift
init(origin: simd_float3, direction: simd_float3, allowing target: ARRaycastQuery.Target, alignment: ARRaycastQuery.TargetAlignment)
```

## Parameters

- `origin`: A 3D position that describes the raycast’s starting point.
- `direction`: A 3D vector that describes the raycast’s direction.
- `target`: The type of plane with which you allow the raycast to intersect.
- `alignment`: The target’s alignment with respect to gravity with which you allow the raycast to intersect.

<a id="Discussion"></a>

## Discussion

This creates a query by supplying a 3D starting place and vector. To acquire a raycast query using a screen point and vector that points outward from the user, call [raycastQuery(from:allowing:alignment:)](../arscnview/raycastquery%28from_allowing_alignment_%29.md) on [ARSCNView](../arscnview.md).

# initWithOrigin:direction:allowingTarget:alignment: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Creates a new raycast query.

## Declaration

```objectivec
- (instancetype) initWithOrigin:(simd_float3) origin direction:(simd_float3) direction allowingTarget:(ARRaycastTarget) target alignment:(ARRaycastTargetAlignment) alignment;
```

## Parameters

- `origin`: A 3D position that describes the raycast’s starting point.
- `direction`: A 3D vector that describes the raycast’s direction.
- `target`: The type of plane with which you allow the raycast to intersect.
- `alignment`: The target’s alignment with respect to gravity with which you allow the raycast to intersect.

<a id="Discussion"></a>

## Discussion

This creates a query by supplying a 3D starting place and vector. To acquire a raycast query using a screen point and vector that points outward from the user, call [raycastQueryFromPoint:allowingTarget:alignment:](../arscnview/raycastquery%28from_allowing_alignment_%29.md) on [ARSCNView](../arscnview.md).
