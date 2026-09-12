> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionlog/encoderlabel](https://developer.apple.com/documentation/metal/mtlfunctionlog/encoderlabel)

# encoderLabel (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The label for the encoder that logged the message.

## Declaration

```swift
var encoderLabel: String? { get }
```

## See Also

### Getting execution details

- [debugLocation](debuglocation.md): If known, the location of the logging command within a shader source file.
- [function](function.md): When known, the function object corresponding to the logged message.
- [MTLFunctionLogDebugLocation](../mtlfunctionlogdebuglocation.md): The source code that logged a debug message.

# encoderLabel (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The label for the encoder that logged the message.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * encoderLabel;
```

## See Also

### Getting execution details

- [debugLocation](debuglocation.md): If known, the location of the logging command within a shader source file.
- [function](function.md): When known, the function object corresponding to the logged message.
- [MTLFunctionLogDebugLocation](../mtlfunctionlogdebuglocation.md): The source code that logged a debug message.
