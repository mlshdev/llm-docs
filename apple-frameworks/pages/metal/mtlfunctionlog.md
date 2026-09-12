> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionlog](https://developer.apple.com/documentation/metal/mtlfunctionlog)

# MTLFunctionLog (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A log entry a Metal device generates when the it runs a command buffer.

## Declaration

```swift
protocol MTLFunctionLog : NSObjectProtocol
```

## Topics

### Getting the log messsage

- [type](mtlfunctionlog/type.md): The type of message that was logged.
- [MTLFunctionLogType](mtlfunctionlogtype.md): Options for different kinds of function logs.

### Getting execution details

- [debugLocation](mtlfunctionlog/debuglocation.md): If known, the location of the logging command within a shader source file.
- [encoderLabel](mtlfunctionlog/encoderlabel.md): The label for the encoder that logged the message.
- [function](mtlfunctionlog/function.md): When known, the function object corresponding to the logged message.
- [MTLFunctionLogDebugLocation](mtlfunctionlogdebuglocation.md): The source code that logged a debug message.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shader logs

- [MTLLogContainer](mtllogcontainer-swift.struct.md): A collection of logged messages, created when a Metal device runs a command buffer.

# MTLFunctionLog (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A log entry a Metal device generates when the it runs a command buffer.

## Declaration

```objectivec
@protocol MTLFunctionLog <NSObject>
```

## Topics

### Getting the log messsage

- [type](mtlfunctionlog/type.md): The type of message that was logged.
- [MTLFunctionLogType](mtlfunctionlogtype.md): Options for different kinds of function logs.

### Getting execution details

- [debugLocation](mtlfunctionlog/debuglocation.md): If known, the location of the logging command within a shader source file.
- [encoderLabel](mtlfunctionlog/encoderlabel.md): The label for the encoder that logged the message.
- [function](mtlfunctionlog/function.md): When known, the function object corresponding to the logged message.
- [MTLFunctionLogDebugLocation](mtlfunctionlogdebuglocation.md): The source code that logged a debug message.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Shader logs

- [MTLLogContainer](mtllogcontainer-c.protocol.md): A collection of logged messages, created when a Metal device runs a command buffer.
