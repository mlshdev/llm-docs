> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzvirtiosounddeviceoutputstreamconfiguration/sink

# sink (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An audio stream sink that defines how the host handles audio data produced by the guest.

## Declaration

```swift
var sink: VZAudioOutputStreamSink? { get set }
```

<a id="Discussion"></a>

## Discussion

Not specifying a sink results in a default handler that suppresses the audio. The default is `nil`.

## See Also

### Related Documentation

- [VZAudioOutputStreamSink](../vzaudiooutputstreamsink.md): The base class for an audio output stream sink.
- [VZHostAudioOutputStreamSink](../vzhostaudiooutputstreamsink.md): Host audio output stream sink plays audio to the host system’s default output device.

# sink (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An audio stream sink that defines how the host handles audio data produced by the guest.

## Declaration

```objectivec
@property (strong, nullable) VZAudioOutputStreamSink * sink;
```

<a id="Discussion"></a>

## Discussion

Not specifying a sink results in a default handler that suppresses the audio. The default is `nil`.

## See Also

### Related Documentation

- [VZAudioOutputStreamSink](../vzaudiooutputstreamsink.md): The base class for an audio output stream sink.
- [VZHostAudioOutputStreamSink](../vzhostaudiooutputstreamsink.md): Host audio output stream sink plays audio to the host system’s default output device.
