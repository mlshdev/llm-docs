> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionlogdebuglocation](https://developer.apple.com/documentation/metal/mtlfunctionlogdebuglocation)

# MTLFunctionLogDebugLocation (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The source code that logged a debug message.

## Declaration

```swift
protocol MTLFunctionLogDebugLocation : NSObjectProtocol
```

## Topics

### Inspecting the location details

- [functionName](mtlfunctionlogdebuglocation/functionname.md): The name of the shader function.
- [url](mtlfunctionlogdebuglocation/url.md): The URL of the file that contains the shader function.
- [line](mtlfunctionlogdebuglocation/line.md): The line that the log message appears on.
- [column](mtlfunctionlogdebuglocation/column.md): The column where the log message appears.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Getting execution details

- [debugLocation](mtlfunctionlog/debuglocation.md): If known, the location of the logging command within a shader source file.
- [encoderLabel](mtlfunctionlog/encoderlabel.md): The label for the encoder that logged the message.
- [function](mtlfunctionlog/function.md): When known, the function object corresponding to the logged message.

# MTLFunctionLogDebugLocation (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The source code that logged a debug message.

## Declaration

```objectivec
@protocol MTLFunctionLogDebugLocation <NSObject>
```

## Topics

### Inspecting the location details

- [functionName](mtlfunctionlogdebuglocation/functionname.md): The name of the shader function.
- [URL](mtlfunctionlogdebuglocation/url.md): The URL of the file that contains the shader function.
- [line](mtlfunctionlogdebuglocation/line.md): The line that the log message appears on.
- [column](mtlfunctionlogdebuglocation/column.md): The column where the log message appears.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Getting execution details

- [debugLocation](mtlfunctionlog/debuglocation.md): If known, the location of the logging command within a shader source file.
- [encoderLabel](mtlfunctionlog/encoderlabel.md): The label for the encoder that logged the message.
- [function](mtlfunctionlog/function.md): When known, the function object corresponding to the logged message.
