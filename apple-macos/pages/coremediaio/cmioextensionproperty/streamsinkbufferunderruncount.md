> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproperty/streamsinkbufferunderruncount](https://developer.apple.com/documentation/coremediaio/cmioextensionproperty/streamsinkbufferunderruncount)

# streamSinkBufferUnderrunCount (Swift)

**Framework:** Core Media I/O  
**Kind:** Type Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for the buffer underrun count.

## Declaration

```swift
static let streamSinkBufferUnderrunCount: CMIOExtensionProperty
```

<a id="Discussion"></a>

## Discussion

The system updates this value every time you don’t service a stream’s buffer fast enough.

The property state for property is a number with a read-only attribute. The value of this property matches the value of the [kCMIOStreamPropertyOutputBufferUnderrunCount](../kcmiostreampropertyoutputbufferunderruncount.md) property.

## See Also

### Stream Properties

- [streamActiveFormatIndex](streamactiveformatindex.md): A property key for the index of the active stream format.
- [streamFrameDuration](streamframeduration.md): A property key for the frame duration.
- [streamMaxFrameDuration](streammaxframeduration.md): A property key for the maximum frame duration.
- [streamSinkBufferQueueSize](streamsinkbufferqueuesize.md): A property key for the sink buffer queue size.
- [streamSinkBuffersRequiredForStartup](streamsinkbuffersrequiredforstartup.md): A property key for the number of buffers required for startup.
- [streamSinkEndOfData](streamsinkendofdata.md): A property key for a Boolean value that indicates whether the stream has more data.

# CMIOExtensionPropertyStreamSinkBufferUnderrunCount (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for the buffer underrun count.

## Declaration

```objectivec
extern CMIOExtensionProperty const CMIOExtensionPropertyStreamSinkBufferUnderrunCount;
```

<a id="Discussion"></a>

## Discussion

The system updates this value every time you don’t service a stream’s buffer fast enough.

The property state for property is a number with a read-only attribute. The value of this property matches the value of the [kCMIOStreamPropertyOutputBufferUnderrunCount](../kcmiostreampropertyoutputbufferunderruncount.md) property.

## See Also

### Stream Properties

- [CMIOExtensionPropertyStreamActiveFormatIndex](streamactiveformatindex.md): A property key for the index of the active stream format.
- [CMIOExtensionPropertyStreamFrameDuration](streamframeduration.md): A property key for the frame duration.
- [CMIOExtensionPropertyStreamMaxFrameDuration](streammaxframeduration.md): A property key for the maximum frame duration.
- [CMIOExtensionPropertyStreamSinkBufferQueueSize](streamsinkbufferqueuesize.md): A property key for the sink buffer queue size.
- [CMIOExtensionPropertyStreamSinkBuffersRequiredForStartup](streamsinkbuffersrequiredforstartup.md): A property key for the number of buffers required for startup.
- [CMIOExtensionPropertyStreamSinkEndOfData](streamsinkendofdata.md): A property key for a Boolean value that indicates whether the stream has more data.
