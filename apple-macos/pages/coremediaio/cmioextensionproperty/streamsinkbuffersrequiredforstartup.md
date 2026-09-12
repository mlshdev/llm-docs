> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproperty/streamsinkbuffersrequiredforstartup](https://developer.apple.com/documentation/coremediaio/cmioextensionproperty/streamsinkbuffersrequiredforstartup)

# streamSinkBuffersRequiredForStartup (Swift)

**Framework:** Core Media I/O  
**Kind:** Type Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for the number of buffers required for startup.

## Declaration

```swift
static let streamSinkBuffersRequiredForStartup: CMIOExtensionProperty
```

<a id="Discussion"></a>

## Discussion

The property state for this property is a number. The property value matches the value of the [kCMIOStreamPropertyOutputBuffersRequiredForStartup](../kcmiostreampropertyoutputbuffersrequiredforstartup.md) property.

## See Also

### Stream Properties

- [streamActiveFormatIndex](streamactiveformatindex.md): A property key for the index of the active stream format.
- [streamFrameDuration](streamframeduration.md): A property key for the frame duration.
- [streamMaxFrameDuration](streammaxframeduration.md): A property key for the maximum frame duration.
- [streamSinkBufferQueueSize](streamsinkbufferqueuesize.md): A property key for the sink buffer queue size.
- [streamSinkBufferUnderrunCount](streamsinkbufferunderruncount.md): A property key for the buffer underrun count.
- [streamSinkEndOfData](streamsinkendofdata.md): A property key for a Boolean value that indicates whether the stream has more data.

# CMIOExtensionPropertyStreamSinkBuffersRequiredForStartup (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A property key for the number of buffers required for startup.

## Declaration

```objectivec
extern CMIOExtensionProperty const CMIOExtensionPropertyStreamSinkBuffersRequiredForStartup;
```

<a id="Discussion"></a>

## Discussion

The property state for this property is a number. The property value matches the value of the [kCMIOStreamPropertyOutputBuffersRequiredForStartup](../kcmiostreampropertyoutputbuffersrequiredforstartup.md) property.

## See Also

### Stream Properties

- [CMIOExtensionPropertyStreamActiveFormatIndex](streamactiveformatindex.md): A property key for the index of the active stream format.
- [CMIOExtensionPropertyStreamFrameDuration](streamframeduration.md): A property key for the frame duration.
- [CMIOExtensionPropertyStreamMaxFrameDuration](streammaxframeduration.md): A property key for the maximum frame duration.
- [CMIOExtensionPropertyStreamSinkBufferQueueSize](streamsinkbufferqueuesize.md): A property key for the sink buffer queue size.
- [CMIOExtensionPropertyStreamSinkBufferUnderrunCount](streamsinkbufferunderruncount.md): A property key for the buffer underrun count.
- [CMIOExtensionPropertyStreamSinkEndOfData](streamsinkendofdata.md): A property key for a Boolean value that indicates whether the stream has more data.
