> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisproviderrequest/init(ssmlrepresentation:voice:)-7elh](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisproviderrequest/init(ssmlrepresentation:voice:)-7elh)

# init(ssmlRepresentation:voice:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a request with a voice and a description.

## Declaration

```swift
init(ssmlRepresentation text: String, voice: AVSpeechSynthesisProviderVoice)
```

## Parameters

- `text`: The description of the text to synthesize.
- `voice`: The voice to use in the speech request.

# initWithSSMLRepresentation:voice: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a request with a voice and a description.

## Declaration

```objectivec
- (instancetype) initWithSSMLRepresentation:(NSString *) text voice:(AVSpeechSynthesisProviderVoice *) voice;
```

## Parameters

- `text`: The description of the text to synthesize.
- `voice`: The voice to use in the speech request.
