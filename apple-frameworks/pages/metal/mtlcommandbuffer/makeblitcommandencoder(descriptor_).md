> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/makeblitcommandencoder(descriptor:)](https://developer.apple.com/documentation/metal/mtlcommandbuffer/makeblitcommandencoder(descriptor:))

# makeBlitCommandEncoder(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a block information transfer (blit) encoder from a descriptor.

## Declaration

```swift
func makeBlitCommandEncoder(descriptor blitPassDescriptor: MTLBlitPassDescriptor) -> (any MTLBlitCommandEncoder)?
```

## Parameters

- `blitPassDescriptor`: An [MTLBlitPassDescriptor](../mtlblitpassdescriptor.md) instance that configures the [MTLBlitCommandEncoder](../mtlblitcommandencoder.md) the method returns.

<a id="discussion"></a>

## Discussion

Use an [MTLBlitCommandEncoder](../mtlblitcommandencoder.md) instance’s methods to create a block information transfer (blit) pass that quickly copies memory between a GPU device’s resources.

## See Also

### Creating blit encoders

- [makeBlitCommandEncoder()](makeblitcommandencoder%28%29.md): Creates a block information transfer (blit) encoder.

# blitCommandEncoderWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a block information transfer (blit) encoder from a descriptor.

## Declaration

```objectivec
- (id<MTLBlitCommandEncoder>) blitCommandEncoderWithDescriptor:(MTLBlitPassDescriptor *) blitPassDescriptor;
```

## Parameters

- `blitPassDescriptor`: An [MTLBlitPassDescriptor](../mtlblitpassdescriptor.md) instance that configures the [MTLBlitCommandEncoder](../mtlblitcommandencoder.md) the method returns.

<a id="discussion"></a>

## Discussion

Use an [MTLBlitCommandEncoder](../mtlblitcommandencoder.md) instance’s methods to create a block information transfer (blit) pass that quickly copies memory between a GPU device’s resources.

## See Also

### Creating blit encoders

- [blitCommandEncoder](makeblitcommandencoder%28%29.md): Creates a block information transfer (blit) encoder.
