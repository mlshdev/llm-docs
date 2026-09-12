> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/makerendercommandencoder(descriptor:)](https://developer.apple.com/documentation/metal/mtlcommandbuffer/makerendercommandencoder(descriptor:))

# makeRenderCommandEncoder(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a render command encoder from a descriptor.

## Declaration

```swift
func makeRenderCommandEncoder(descriptor renderPassDescriptor: MTLRenderPassDescriptor) -> (any MTLRenderCommandEncoder)?
```

## Parameters

- `renderPassDescriptor`: An [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) instance that configures the [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) the method returns.

<a id="discussion"></a>

## Discussion

Use an [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) instance’s methods to set up a single graphics-rendering pass.

# renderCommandEncoderWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a render command encoder from a descriptor.

## Declaration

```objectivec
- (id<MTLRenderCommandEncoder>) renderCommandEncoderWithDescriptor:(MTLRenderPassDescriptor *) renderPassDescriptor;
```

## Parameters

- `renderPassDescriptor`: An [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) instance that configures the [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) the method returns.

<a id="discussion"></a>

## Discussion

Use an [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) instance’s methods to set up a single graphics-rendering pass.
