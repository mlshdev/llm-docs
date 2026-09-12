> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllogstatedescriptor/buffersize](https://developer.apple.com/documentation/metal/mtllogstatedescriptor/buffersize)

# bufferSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The size of the internal buffer the log state uses, specified in bytes.

## Declaration

```swift
var bufferSize: Int { get set }
```

<a id="discussion"></a>

## Discussion

The default value is 1MB. The minimum size of log buffer is 1KB and the maximum size is 1GB.

Carefully consider the size of this buffer based on how many messages you expect your shader to log and be useful to diagnose problems. A smaller size might lead to the shader dropping more messages while a larger size might result in a larger memory footprint and reduced performance due to excessive logging.

## See Also

### Instance properties

- [level](level.md): The minimum level of messages that the shader can log.

# bufferSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The size of the internal buffer the log state uses, specified in bytes.

## Declaration

```objectivec
@property (assign, readwrite) NSInteger bufferSize;
```

<a id="discussion"></a>

## Discussion

The default value is 1MB. The minimum size of log buffer is 1KB and the maximum size is 1GB.

Carefully consider the size of this buffer based on how many messages you expect your shader to log and be useful to diagnose problems. A smaller size might lead to the shader dropping more messages while a larger size might result in a larger memory footprint and reduced performance due to excessive logging.

## See Also

### Instance properties

- [level](level.md): The minimum level of messages that the shader can log.
