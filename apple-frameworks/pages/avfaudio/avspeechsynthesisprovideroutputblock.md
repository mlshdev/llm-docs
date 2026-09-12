> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisprovideroutputblock](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisprovideroutputblock)

# AVSpeechSynthesisProviderOutputBlock (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A type that represents the method for sending marker information to the host.

## Declaration

```swift
typealias AVSpeechSynthesisProviderOutputBlock = ([AVSpeechSynthesisMarker], AVSpeechSynthesisProviderRequest) -> Void
```

## Parameters

- `markers`: An array of speech synthesis metadata.
- `speechRequest`: A speech request the system associates with the metadata.

## See Also

### Supplying metadata

- [speechSynthesisOutputMetadataBlock](avspeechsynthesisprovideraudiounit/speechsynthesisoutputmetadatablock.md): A block that subclasses use to send marker information to the host.
- [AVSpeechSynthesisMarker](avspeechsynthesismarker.md): An object that contains information about the synthesized audio.

# AVSpeechSynthesisProviderOutputBlock (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A type that represents the method for sending marker information to the host.

## Declaration

```objectivec
typedef void (^)(NSArray<AVSpeechSynthesisMarker *> *, AVSpeechSynthesisProviderRequest *) AVSpeechSynthesisProviderOutputBlock;
```

## Parameters

- `markers`: An array of speech synthesis metadata.
- `speechRequest`: A speech request the system associates with the metadata.

## See Also

### Supplying metadata

- [speechSynthesisOutputMetadataBlock](avspeechsynthesisprovideraudiounit/speechsynthesisoutputmetadatablock.md): A block that subclasses use to send marker information to the host.
- [AVSpeechSynthesisMarker](avspeechsynthesismarker.md): An object that contains information about the synthesized audio.
