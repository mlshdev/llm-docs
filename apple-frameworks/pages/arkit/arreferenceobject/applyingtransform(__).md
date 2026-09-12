> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceobject/applyingtransform(_:)](https://developer.apple.com/documentation/arkit/arreferenceobject/applyingtransform(_:))

# applyingTransform(\_:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0)

Returns a new reference object created by applying the specified transform to this reference object’s geometric data.

> Only supported for legacy reference objects.

## Declaration

```swift
func applyingTransform(_ transform: simd_float4x4) -> ARReferenceObject
```

## Parameters

- `transform`: A transform matrix in the local coordinate space of the reference object.

<a id="return-value"></a>

## Return Value

The transformed reference object.

<a id="Discussion"></a>

## Discussion

You define the local coordinate space of a reference object when you extract it from an [ARWorldMap](../arworldmap.md). If an existing reference object has a local coordinate origin that doesn’t fit well with the object’s intended use, call this method to change the reference object’s origin with respect to the physical object it represents.

When ARKit detects a reference object, the [transform](../aranchor/transform.md) of the resulting [ARObjectAnchor](../arobjectanchor.md) is based on the orgin of the reference object’s coordinate system. For example, if a reference object represents a physical item that sits on a horizontal surface, virtual content should appear to sit on whatever surface the physical object does. As such, it’s typically useful to align a reference object’s coordinate origin with the bottom of the physical object.

## See Also

### Creating Derivative Reference Objects

- [merging(\_:)](merging%28__%29.md): Deprecated. Returns a new reference object that combines spatial information from both this reference object and another.

# referenceObjectByApplyingTransform: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0)

Returns a new reference object created by applying the specified transform to this reference object’s geometric data.

> Only supported for legacy reference objects.

## Declaration

```objectivec
- (ARReferenceObject *) referenceObjectByApplyingTransform:(simd_float4x4) transform;
```

## Parameters

- `transform`: A transform matrix in the local coordinate space of the reference object.

<a id="return-value"></a>

## Return Value

The transformed reference object.

<a id="Discussion"></a>

## Discussion

You define the local coordinate space of a reference object when you extract it from an [ARWorldMap](../arworldmap.md). If an existing reference object has a local coordinate origin that doesn’t fit well with the object’s intended use, call this method to change the reference object’s origin with respect to the physical object it represents.

When ARKit detects a reference object, the [transform](../aranchor/transform.md) of the resulting [ARObjectAnchor](../arobjectanchor.md) is based on the orgin of the reference object’s coordinate system. For example, if a reference object represents a physical item that sits on a horizontal surface, virtual content should appear to sit on whatever surface the physical object does. As such, it’s typically useful to align a reference object’s coordinate origin with the bottom of the physical object.

## See Also

### Creating Derivative Reference Objects

- [referenceObjectByMergingObject:error:](merging%28__%29.md): Deprecated. Returns a new reference object that combines spatial information from both this reference object and another.
