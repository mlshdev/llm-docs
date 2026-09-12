> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosounddeviceinputstreamconfiguration/source](https://developer.apple.com/documentation/virtualization/vzvirtiosounddeviceinputstreamconfiguration/source)

# source (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An audio stream source that defines how the host supplies audio data for the guest.

## Declaration

```swift
var source: VZAudioInputStreamSource? { get set }
```

<a id="Discussion"></a>

## Discussion

Not specifying a source results in a default handler that produces audio silence. The default is `nil`.

## See Also

### Related Documentation

- [VZAudioInputStreamSource](../vzaudioinputstreamsource.md): The base class for an audio input stream source.
- [VZHostAudioInputStreamSource](../vzhostaudioinputstreamsource.md): The host audio input stream source that provides audio from the host system’s default input device.

# source (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An audio stream source that defines how the host supplies audio data for the guest.

## Declaration

```objectivec
@property (strong, nullable) VZAudioInputStreamSource * source;
```

<a id="Discussion"></a>

## Discussion

Not specifying a source results in a default handler that produces audio silence. The default is `nil`.

## See Also

### Related Documentation

- [VZAudioInputStreamSource](../vzaudioinputstreamsource.md): The base class for an audio input stream source.
- [VZHostAudioInputStreamSource](../vzhostaudioinputstreamsource.md): The host audio input stream source that provides audio from the host system’s default input device.
