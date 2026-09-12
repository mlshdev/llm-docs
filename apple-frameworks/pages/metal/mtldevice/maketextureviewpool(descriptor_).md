> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/maketextureviewpool(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/maketextureviewpool(descriptor:))

# makeTextureViewPool(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new texture view pool from a resource view pool descriptor.

## Declaration

```swift
func makeTextureViewPool(descriptor: MTLResourceViewPoolDescriptor) throws -> any MTLTextureViewPool
```

## Parameters

- `descriptor`: A [MTLResourceViewPoolDescriptor](../mtlresourceviewpooldescriptor.md) instance that configures the [MTLTextureViewPool](../mtltextureviewpool.md) instance.

<a id="return-value"></a>

## Return Value

A [MTLTextureViewPool](../mtltextureviewpool.md) instance, or `nil` if the function failed.

# newTextureViewPoolWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new texture view pool from a resource view pool descriptor.

## Declaration

```objectivec
- (id<MTLTextureViewPool>) newTextureViewPoolWithDescriptor:(MTLResourceViewPoolDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: A [MTLResourceViewPoolDescriptor](../mtlresourceviewpooldescriptor.md) instance that configures the [MTLTextureViewPool](../mtltextureviewpool.md) instance.
- `error`: Optional pointer to a `NSError` instance that Metal uses to describe the failure if this function fails.

<a id="return-value"></a>

## Return Value

A [MTLTextureViewPool](../mtltextureviewpool.md) instance, or `nil` if the function failed.
