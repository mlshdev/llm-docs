> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbufferencoderinfo](https://developer.apple.com/documentation/metal/mtlcommandbufferencoderinfo)

# MTLCommandBufferEncoderInfo (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A container that provides additional information about a runtime failure a GPU encounters as it runs the commands in a command buffer.

## Declaration

```swift
protocol MTLCommandBufferEncoderInfo : NSObjectProtocol
```

<a id="overview"></a>

## Overview

To create a command buffer that generates additional information (when a GPU encounters an error running it), configure an [MTLCommandBufferDescriptor](mtlcommandbufferdescriptor.md) instance’s [errorOptions](mtlcommandbufferdescriptor/erroroptions.md) property. For information about how to retrieve the information from an [MTLCommandBuffer](mtlcommandbuffer.md) instance, see its [error](mtlcommandbuffer/error.md) property.

## Topics

### Inspecting execution information

- [label](mtlcommandbufferencoderinfo/label.md): The name of the encoder that generates the error information.
- [debugSignposts](mtlcommandbufferencoderinfo/debugsignposts.md): An array of debug signposts that Metal records as the GPU executes the commands of the encoder’s pass.
- [errorState](mtlcommandbufferencoderinfo/errorstate.md): The execution status of the command encoder.
- [MTLCommandEncoderErrorState](mtlcommandencodererrorstate.md): Possible error conditions for the command encoder’s commands.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Getting error details

- [error](mtlcommandbuffer/error.md): A description of an error when the GPU encounters an issue as it runs the command buffer.
- [errorOptions](mtlcommandbuffer/erroroptions.md): Settings that determine which information the command buffer records about execution errors, and how it does it.
- [MTLCommandBufferEncoderInfoErrorKey](mtlcommandbufferencoderinfoerrorkey.md): A key to a command buffer error’s user information dictionary that retrieves additional information about a GPU’s runtime error.

# MTLCommandBufferEncoderInfo (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A container that provides additional information about a runtime failure a GPU encounters as it runs the commands in a command buffer.

## Declaration

```objectivec
@protocol MTLCommandBufferEncoderInfo <NSObject>
```

<a id="overview"></a>

## Overview

To create a command buffer that generates additional information (when a GPU encounters an error running it), configure an [MTLCommandBufferDescriptor](mtlcommandbufferdescriptor.md) instance’s [errorOptions](mtlcommandbufferdescriptor/erroroptions.md) property. For information about how to retrieve the information from an [MTLCommandBuffer](mtlcommandbuffer.md) instance, see its [error](mtlcommandbuffer/error.md) property.

## Topics

### Inspecting execution information

- [label](mtlcommandbufferencoderinfo/label.md): The name of the encoder that generates the error information.
- [debugSignposts](mtlcommandbufferencoderinfo/debugsignposts.md): An array of debug signposts that Metal records as the GPU executes the commands of the encoder’s pass.
- [errorState](mtlcommandbufferencoderinfo/errorstate.md): The execution status of the command encoder.
- [MTLCommandEncoderErrorState](mtlcommandencodererrorstate.md): Possible error conditions for the command encoder’s commands.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Getting error details

- [error](mtlcommandbuffer/error.md): A description of an error when the GPU encounters an issue as it runs the command buffer.
- [errorOptions](mtlcommandbuffer/erroroptions.md): Settings that determine which information the command buffer records about execution errors, and how it does it.
- [MTLCommandBufferEncoderInfoErrorKey](mtlcommandbufferencoderinfoerrorkey.md): A key to a command buffer error’s user information dictionary that retrieves additional information about a GPU’s runtime error.
