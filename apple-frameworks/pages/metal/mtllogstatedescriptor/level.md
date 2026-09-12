> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllogstatedescriptor/level](https://developer.apple.com/documentation/metal/mtllogstatedescriptor/level)

# level (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The minimum level of messages that the shader can log.

## Declaration

```swift
var level: MTLLogLevel { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLLogLevel.debug](../mtlloglevel/debug.md).

Use this value to limit which logs from your shader the log state stores. The log state doesn’t store messages at a lower level. Increase the level to reduce verbosity of logging.

## See Also

### Instance properties

- [bufferSize](buffersize.md): The size of the internal buffer the log state uses, specified in bytes.

# level (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The minimum level of messages that the shader can log.

## Declaration

```objectivec
@property (assign, readwrite) MTLLogLevel level;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLLogLevelDebug](../mtlloglevel/debug.md).

Use this value to limit which logs from your shader the log state stores. The log state doesn’t store messages at a lower level. Increase the level to reduce verbosity of logging.

## See Also

### Instance properties

- [bufferSize](buffersize.md): The size of the internal buffer the log state uses, specified in bytes.
