> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makecommandallocator()](https://developer.apple.com/documentation/metal/mtldevice/makecommandallocator())

# makeCommandAllocator() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new command allocator.

## Declaration

```swift
func makeCommandAllocator() -> (any MTL4CommandAllocator)?
```

<a id="return-value"></a>

## Return Value

A [MTL4CommandAllocator](../mtl4commandallocator.md) instance, or `nil` if the function failed.

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

# newCommandAllocator (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new command allocator.

## Declaration

```objectivec
- (id<MTL4CommandAllocator>) newCommandAllocator;
```

<a id="return-value"></a>

## Return Value

A [MTL4CommandAllocator](../mtl4commandallocator.md) instance, or `nil` if the function failed.

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)
