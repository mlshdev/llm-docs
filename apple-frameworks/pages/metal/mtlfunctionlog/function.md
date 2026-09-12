> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionlog/function](https://developer.apple.com/documentation/metal/mtlfunctionlog/function)

# function (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

When known, the function object corresponding to the logged message.

## Declaration

```swift
var function: (any MTLFunction)? { get }
```

## See Also

### Getting execution details

- [debugLocation](debuglocation.md): If known, the location of the logging command within a shader source file.
- [encoderLabel](encoderlabel.md): The label for the encoder that logged the message.
- [MTLFunctionLogDebugLocation](../mtlfunctionlogdebuglocation.md): The source code that logged a debug message.

# function (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

When known, the function object corresponding to the logged message.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<MTLFunction> function;
```

## See Also

### Getting execution details

- [debugLocation](debuglocation.md): If known, the location of the logging command within a shader source file.
- [encoderLabel](encoderlabel.md): The label for the encoder that logged the message.
- [MTLFunctionLogDebugLocation](../mtlfunctionlogdebuglocation.md): The source code that logged a debug message.
