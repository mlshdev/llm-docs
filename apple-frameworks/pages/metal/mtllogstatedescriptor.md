> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllogstatedescriptor](https://developer.apple.com/documentation/metal/mtllogstatedescriptor)

# MTLLogStateDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An interface that represents a log state configuration.

## Declaration

```swift
class MTLLogStateDescriptor
```

## Mentioned In

- [Logging shader debug messages](logging-shader-debug-messages.md)

<a id="overview"></a>

## Overview

Configure the descriptor to create an [MTLLogState](mtllogstate.md) by calling [makeLogState(descriptor:)](mtldevice/makelogstate%28descriptor_%29.md).

If you’ve set the environment variables `MTL_LOG_BUFFER_SIZE` or `MTL_LOG_LEVEL`, then the system automatically enables logging. If any command buffer or command queue has an attached log state, then the system uses the log state’s settings instead of the environment variable values.

## Topics

### Instance properties

- [bufferSize](mtllogstatedescriptor/buffersize.md): The size of the internal buffer the log state uses, specified in bytes.
- [level](mtllogstatedescriptor/level.md): The minimum level of messages that the shader can log.

### Log levels

- [MTLLogLevel](mtlloglevel.md): The supported log levels for shader logging.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shader logging

- [MTLLogState](mtllogstate.md): A container for shader log messages.

# MTLLogStateDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An interface that represents a log state configuration.

## Declaration

```objectivec
@interface MTLLogStateDescriptor : NSObject
```

## Mentioned In

- [Logging shader debug messages](logging-shader-debug-messages.md)

<a id="overview"></a>

## Overview

Configure the descriptor to create an [MTLLogState](mtllogstate.md) by calling [newLogStateWithDescriptor:error:](mtldevice/makelogstate%28descriptor_%29.md).

If you’ve set the environment variables `MTL_LOG_BUFFER_SIZE` or `MTL_LOG_LEVEL`, then the system automatically enables logging. If any command buffer or command queue has an attached log state, then the system uses the log state’s settings instead of the environment variable values.

## Topics

### Instance properties

- [bufferSize](mtllogstatedescriptor/buffersize.md): The size of the internal buffer the log state uses, specified in bytes.
- [level](mtllogstatedescriptor/level.md): The minimum level of messages that the shader can log.

### Log levels

- [MTLLogLevel](mtlloglevel.md): The supported log levels for shader logging.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Shader logging

- [MTLLogState](mtllogstate.md): A container for shader log messages.
