> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllogstate](https://developer.apple.com/documentation/metal/mtllogstate)

# MTLLogState (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A container for shader log messages.

## Declaration

```swift
protocol MTLLogState : NSObjectProtocol, Sendable
```

## Mentioned In

- [Logging shader debug messages](logging-shader-debug-messages.md)

<a id="overview"></a>

## Overview

Create an [MTLCommandQueue](mtlcommandqueue.md) or [MTLCommandBuffer](mtlcommandbuffer.md) with a log state to hold messages logged from shaders. Attach a log state to a command buffer by assigning it to the command buffer descriptor’s [logState](mtlcommandbufferdescriptor/logstate.md). Similarly, to attach a log state to a command queue, use the command queue descriptor’s [logState](mtlcommandqueuedescriptor/logstate.md).

When you attach a log state to a command queue, the command queue shares the log state with all the command buffers it creates. If you attach different log states to a command buffer and command queue, then the system uses the state attached to the command buffer.

Because logging incurs an overhead, regardless of whether the system prints messages, you need to explicitly enable logging with [enableLogging](mtlcompileoptions/enablelogging.md).

## Topics

### Instance Methods

- [addLogHandler(\_:)](mtllogstate/addloghandler%28__%29.md): Adds a log handler to customize the presentation of shader logging.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shader logging

- [MTLLogStateDescriptor](mtllogstatedescriptor.md): An interface that represents a log state configuration.

# MTLLogState (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A container for shader log messages.

## Declaration

```objectivec
@protocol MTLLogState <NSObject>
```

## Mentioned In

- [Logging shader debug messages](logging-shader-debug-messages.md)

<a id="overview"></a>

## Overview

Create an [MTLCommandQueue](mtlcommandqueue.md) or [MTLCommandBuffer](mtlcommandbuffer.md) with a log state to hold messages logged from shaders. Attach a log state to a command buffer by assigning it to the command buffer descriptor’s [logState](mtlcommandbufferdescriptor/logstate.md). Similarly, to attach a log state to a command queue, use the command queue descriptor’s [logState](mtlcommandqueuedescriptor/logstate.md).

When you attach a log state to a command queue, the command queue shares the log state with all the command buffers it creates. If you attach different log states to a command buffer and command queue, then the system uses the state attached to the command buffer.

Because logging incurs an overhead, regardless of whether the system prints messages, you need to explicitly enable logging with [enableLogging](mtlcompileoptions/enablelogging.md).

## Topics

### Instance Methods

- [addLogHandler:](mtllogstate/addloghandler%28__%29.md): Adds a log handler to customize the presentation of shader logging.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Shader logging

- [MTLLogStateDescriptor](mtllogstatedescriptor.md): An interface that represents a log state configuration.
