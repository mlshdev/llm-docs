> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionlog/debuglocation](https://developer.apple.com/documentation/metal/mtlfunctionlog/debuglocation)

# debugLocation (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

If known, the location of the logging command within a shader source file.

## Declaration

```swift
var debugLocation: (any MTLFunctionLogDebugLocation)? { get }
```

## See Also

### Getting execution details

- [encoderLabel](encoderlabel.md): The label for the encoder that logged the message.
- [function](function.md): When known, the function object corresponding to the logged message.
- [MTLFunctionLogDebugLocation](../mtlfunctionlogdebuglocation.md): The source code that logged a debug message.

# debugLocation (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

If known, the location of the logging command within a shader source file.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<MTLFunctionLogDebugLocation> debugLocation;
```

## See Also

### Getting execution details

- [encoderLabel](encoderlabel.md): The label for the encoder that logged the message.
- [function](function.md): When known, the function object corresponding to the logged message.
- [MTLFunctionLogDebugLocation](../mtlfunctionlogdebuglocation.md): The source code that logged a debug message.
