> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/makematerialresource(descriptor:)-8pruc](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makematerialresource(descriptor:)-8pruc)

# makeMaterialResource(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Asynchronously compiles a material resource from a geometry modifier, surface shader, and lighting function.

## Declaration

```swift
nonisolated(nonsending) final func makeMaterialResource(descriptor: LowLevelMaterialResource.Descriptor) async throws -> sending LowLevelMaterialResource
```

## Parameters

- `descriptor`: The geometry modifier, surface shader, and lighting function to compile into a material.

<a id="return-value"></a>

## Return Value

A newly compiled [LowLevelMaterialResource](../lowlevelmaterialresource.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if shader compilation fails.
