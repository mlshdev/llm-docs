> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproperty/streamframeduration](https://developer.apple.com/documentation/coremediaio/cmioextensionproperty/streamframeduration)

# streamFrameDuration (Swift)

**Framework:** Core Media I/O  
**Kind:** Type Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for the frame duration.

## Declaration

```swift
static let streamFrameDuration: CMIOExtensionProperty
```

<a id="Discussion"></a>

## Discussion

The property state for this property is a dictionary that represents a [CMTime](https://developer.apple.com/documentation/coremedia/cmtime) value that matches the frame duration of the active stream format.

## See Also

### Stream Properties

- [streamActiveFormatIndex](streamactiveformatindex.md): A property key for the index of the active stream format.
- [streamMaxFrameDuration](streammaxframeduration.md): A property key for the maximum frame duration.
- [streamSinkBufferQueueSize](streamsinkbufferqueuesize.md): A property key for the sink buffer queue size.
- [streamSinkBuffersRequiredForStartup](streamsinkbuffersrequiredforstartup.md): A property key for the number of buffers required for startup.
- [streamSinkBufferUnderrunCount](streamsinkbufferunderruncount.md): A property key for the buffer underrun count.
- [streamSinkEndOfData](streamsinkendofdata.md): A property key for a Boolean value that indicates whether the stream has more data.

# CMIOExtensionPropertyStreamFrameDuration (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for the frame duration.

## Declaration

```objectivec
extern CMIOExtensionProperty const CMIOExtensionPropertyStreamFrameDuration;
```

<a id="Discussion"></a>

## Discussion

The property state for this property is a dictionary that represents a [CMTime](https://developer.apple.com/documentation/coremedia/cmtime) value that matches the frame duration of the active stream format.

## See Also

### Stream Properties

- [CMIOExtensionPropertyStreamActiveFormatIndex](streamactiveformatindex.md): A property key for the index of the active stream format.
- [CMIOExtensionPropertyStreamMaxFrameDuration](streammaxframeduration.md): A property key for the maximum frame duration.
- [CMIOExtensionPropertyStreamSinkBufferQueueSize](streamsinkbufferqueuesize.md): A property key for the sink buffer queue size.
- [CMIOExtensionPropertyStreamSinkBuffersRequiredForStartup](streamsinkbuffersrequiredforstartup.md): A property key for the number of buffers required for startup.
- [CMIOExtensionPropertyStreamSinkBufferUnderrunCount](streamsinkbufferunderruncount.md): A property key for the buffer underrun count.
- [CMIOExtensionPropertyStreamSinkEndOfData](streamsinkendofdata.md): A property key for a Boolean value that indicates whether the stream has more data.
