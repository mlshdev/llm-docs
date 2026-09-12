> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/makeinstancetransformresource(instancecapacity:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makeinstancetransformresource(instancecapacity:))

# makeInstanceTransformResource(instanceCapacity:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a transform buffer resource for GPU instancing.

## Declaration

```swift
final func makeInstanceTransformResource(instanceCapacity: Int) throws -> LowLevelInstanceTransformResource
```

## Parameters

- `instanceCapacity`: The maximum number of instances the buffer holds.

<a id="return-value"></a>

## Return Value

A newly created [LowLevelInstanceTransformResource](../lowlevelinstancetransformresource.md).

<a id="discussion"></a>

## Discussion

The buffer stores up to `instanceCapacity` model-to-local transforms as `float4x4` values. Assign the result to a [LowLevelMeshInstance](../lowlevelmeshinstance.md) via [setInstanceTransforms(\_:)](../lowlevelmeshinstance/setinstancetransforms%28__%29.md) to enable GPU instancing.

> **Throws**

> An error if the allocation fails.
