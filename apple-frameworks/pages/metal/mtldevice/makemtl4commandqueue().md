> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makemtl4commandqueue()](https://developer.apple.com/documentation/metal/mtldevice/makemtl4commandqueue())

# makeMTL4CommandQueue() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new command queue.

## Declaration

```swift
func makeMTL4CommandQueue() -> (any MTL4CommandQueue)?
```

<a id="return-value"></a>

## Return Value

A [MTL4CommandQueue](../mtl4commandqueue.md) instance, or `nil` if the function failed.

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

# newMTL4CommandQueue (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new command queue.

## Declaration

```objectivec
- (id<MTL4CommandQueue>) newMTL4CommandQueue;
```

<a id="return-value"></a>

## Return Value

A [MTL4CommandQueue](../mtl4commandqueue.md) instance, or `nil` if the function failed.

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)
