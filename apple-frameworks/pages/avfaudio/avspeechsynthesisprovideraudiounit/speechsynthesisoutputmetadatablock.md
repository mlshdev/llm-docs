> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisprovideraudiounit/speechsynthesisoutputmetadatablock](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisprovideraudiounit/speechsynthesisoutputmetadatablock)

# speechSynthesisOutputMetadataBlock (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A block that subclasses use to send marker information to the host.

## Declaration

```swift
var speechSynthesisOutputMetadataBlock: AVSpeechSynthesisProviderOutputBlock? { get set }
```

<a id="Discussion"></a>

## Discussion

A host sets this block to retrieve metadata for a request.

A synthesizer calls this method when it produces data relevant to the audio buffers it’s sending back to a host. In some cases, the system may delay speech output until it delivers these markers. For example, word highlighting depends on marker data from synthesizers to time what word to highlight. The array of markers can reference audio buffers that the system delivers at a later time.

There may be cases where a subclass doesn’t have marker data until it completes extra audio processing. If marker data changes, this block replaces that audio buffer range’s marker data.

## See Also

### Supplying metadata

- [AVSpeechSynthesisProviderOutputBlock](../avspeechsynthesisprovideroutputblock.md): A type that represents the method for sending marker information to the host.
- [AVSpeechSynthesisMarker](../avspeechsynthesismarker.md): An object that contains information about the synthesized audio.

# speechSynthesisOutputMetadataBlock (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A block that subclasses use to send marker information to the host.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AVSpeechSynthesisProviderOutputBlock speechSynthesisOutputMetadataBlock;
```

<a id="Discussion"></a>

## Discussion

A host sets this block to retrieve metadata for a request.

A synthesizer calls this method when it produces data relevant to the audio buffers it’s sending back to a host. In some cases, the system may delay speech output until it delivers these markers. For example, word highlighting depends on marker data from synthesizers to time what word to highlight. The array of markers can reference audio buffers that the system delivers at a later time.

There may be cases where a subclass doesn’t have marker data until it completes extra audio processing. If marker data changes, this block replaces that audio buffer range’s marker data.

## See Also

### Supplying metadata

- [AVSpeechSynthesisProviderOutputBlock](../avspeechsynthesisprovideroutputblock.md): A type that represents the method for sending marker information to the host.
- [AVSpeechSynthesisMarker](../avspeechsynthesismarker.md): An object that contains information about the synthesized audio.
