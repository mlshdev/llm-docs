> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproperty/streamsinkendofdata](https://developer.apple.com/documentation/coremediaio/cmioextensionproperty/streamsinkendofdata)

# streamSinkEndOfData (Swift)

**Framework:** Core Media I/O  
**Kind:** Type Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for a Boolean value that indicates whether the stream has more data.

## Declaration

```swift
static let streamSinkEndOfData: CMIOExtensionProperty
```

<a id="Discussion"></a>

## Discussion

The property state for this property is a number that represents a Boolean value: `1` indicates the stream is at its end, and `0` indicates that more data exists.

The value of this property matches the [kCMIOStreamPropertyEndOfData](../kcmiostreampropertyendofdata.md) property.

## See Also

### Stream Properties

- [streamActiveFormatIndex](streamactiveformatindex.md): A property key for the index of the active stream format.
- [streamFrameDuration](streamframeduration.md): A property key for the frame duration.
- [streamMaxFrameDuration](streammaxframeduration.md): A property key for the maximum frame duration.
- [streamSinkBufferQueueSize](streamsinkbufferqueuesize.md): A property key for the sink buffer queue size.
- [streamSinkBuffersRequiredForStartup](streamsinkbuffersrequiredforstartup.md): A property key for the number of buffers required for startup.
- [streamSinkBufferUnderrunCount](streamsinkbufferunderruncount.md): A property key for the buffer underrun count.

# CMIOExtensionPropertyStreamSinkEndOfData (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for a Boolean value that indicates whether the stream has more data.

## Declaration

```objectivec
extern CMIOExtensionProperty const CMIOExtensionPropertyStreamSinkEndOfData;
```

<a id="Discussion"></a>

## Discussion

The property state for this property is a number that represents a Boolean value: `1` indicates the stream is at its end, and `0` indicates that more data exists.

The value of this property matches the [kCMIOStreamPropertyEndOfData](../kcmiostreampropertyendofdata.md) property.

## See Also

### Stream Properties

- [CMIOExtensionPropertyStreamActiveFormatIndex](streamactiveformatindex.md): A property key for the index of the active stream format.
- [CMIOExtensionPropertyStreamFrameDuration](streamframeduration.md): A property key for the frame duration.
- [CMIOExtensionPropertyStreamMaxFrameDuration](streammaxframeduration.md): A property key for the maximum frame duration.
- [CMIOExtensionPropertyStreamSinkBufferQueueSize](streamsinkbufferqueuesize.md): A property key for the sink buffer queue size.
- [CMIOExtensionPropertyStreamSinkBuffersRequiredForStartup](streamsinkbuffersrequiredforstartup.md): A property key for the number of buffers required for startup.
- [CMIOExtensionPropertyStreamSinkBufferUnderrunCount](streamsinkbufferunderruncount.md): A property key for the buffer underrun count.
