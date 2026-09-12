> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/makeblitcommandencoder()](https://developer.apple.com/documentation/metal/mtlcommandbuffer/makeblitcommandencoder())

# makeBlitCommandEncoder() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a block information transfer (blit) encoder.

## Declaration

```swift
func makeBlitCommandEncoder() -> (any MTLBlitCommandEncoder)?
```

<a id="discussion"></a>

## Discussion

Use an [MTLBlitCommandEncoder](../mtlblitcommandencoder.md) instance’s methods to create a block information transfer (blit) pass that quickly copies memory between a GPU device’s resources.

## See Also

### Creating blit encoders

- [makeBlitCommandEncoder(descriptor:)](makeblitcommandencoder%28descriptor_%29.md): Creates a block information transfer (blit) encoder from a descriptor.

# blitCommandEncoder (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a block information transfer (blit) encoder.

## Declaration

```objectivec
- (id<MTLBlitCommandEncoder>) blitCommandEncoder;
```

<a id="discussion"></a>

## Discussion

Use an [MTLBlitCommandEncoder](../mtlblitcommandencoder.md) instance’s methods to create a block information transfer (blit) pass that quickly copies memory between a GPU device’s resources.

## See Also

### Creating blit encoders

- [blitCommandEncoderWithDescriptor:](makeblitcommandencoder%28descriptor_%29.md): Creates a block information transfer (blit) encoder from a descriptor.
