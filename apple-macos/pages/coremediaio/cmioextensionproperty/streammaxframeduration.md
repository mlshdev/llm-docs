> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproperty/streammaxframeduration](https://developer.apple.com/documentation/coremediaio/cmioextensionproperty/streammaxframeduration)

# streamMaxFrameDuration (Swift)

**Framework:** Core Media I/O  
**Kind:** Type Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for the maximum frame duration.

## Declaration

```swift
static let streamMaxFrameDuration: CMIOExtensionProperty
```

<a id="Discussion"></a>

## Discussion

The property state for this property is a dictionary representation of a [CMTime](https://developer.apple.com/documentation/coremedia/cmtime) structure.

## See Also

### Stream Properties

- [streamActiveFormatIndex](streamactiveformatindex.md): A property key for the index of the active stream format.
- [streamFrameDuration](streamframeduration.md): A property key for the frame duration.
- [streamSinkBufferQueueSize](streamsinkbufferqueuesize.md): A property key for the sink buffer queue size.
- [streamSinkBuffersRequiredForStartup](streamsinkbuffersrequiredforstartup.md): A property key for the number of buffers required for startup.
- [streamSinkBufferUnderrunCount](streamsinkbufferunderruncount.md): A property key for the buffer underrun count.
- [streamSinkEndOfData](streamsinkendofdata.md): A property key for a Boolean value that indicates whether the stream has more data.

# CMIOExtensionPropertyStreamMaxFrameDuration (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for the maximum frame duration.

## Declaration

```objectivec
extern CMIOExtensionProperty const CMIOExtensionPropertyStreamMaxFrameDuration;
```

<a id="Discussion"></a>

## Discussion

The property state for this property is a dictionary representation of a [CMTime](https://developer.apple.com/documentation/coremedia/cmtime) structure.

## See Also

### Stream Properties

- [CMIOExtensionPropertyStreamActiveFormatIndex](streamactiveformatindex.md): A property key for the index of the active stream format.
- [CMIOExtensionPropertyStreamFrameDuration](streamframeduration.md): A property key for the frame duration.
- [CMIOExtensionPropertyStreamSinkBufferQueueSize](streamsinkbufferqueuesize.md): A property key for the sink buffer queue size.
- [CMIOExtensionPropertyStreamSinkBuffersRequiredForStartup](streamsinkbuffersrequiredforstartup.md): A property key for the number of buffers required for startup.
- [CMIOExtensionPropertyStreamSinkBufferUnderrunCount](streamsinkbufferunderruncount.md): A property key for the buffer underrun count.
- [CMIOExtensionPropertyStreamSinkEndOfData](streamsinkendofdata.md): A property key for a Boolean value that indicates whether the stream has more data.
