> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisprovideraudiounit/synthesizespeechrequest(_:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisprovideraudiounit/synthesizespeechrequest(_:))

# synthesizeSpeechRequest(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Sets the text to synthesize and the voice to use.

## Declaration

```swift
func synthesizeSpeechRequest(_ speechRequest: AVSpeechSynthesisProviderRequest)
```

## Parameters

- `speechRequest`: A speech request to synthesize.

<a id="Discussion"></a>

## Discussion

When the synthesizer finishes generating audio buffers for the speech request, use [AUInternalRenderBlock](../../audiotoolbox/auinternalrenderblock.md) to report [offlineUnitRenderAction_Complete](../../audiotoolbox/audiounitrenderactionflags/offlineunitrenderaction_complete.md).

## See Also

### Rendering speech

- [AVSpeechSynthesisProviderRequest](../avspeechsynthesisproviderrequest.md): An object that represents the text to synthesize and the voice to use.

# synthesizeSpeechRequest: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Sets the text to synthesize and the voice to use.

## Declaration

```objectivec
- (void) synthesizeSpeechRequest:(AVSpeechSynthesisProviderRequest *) speechRequest;
```

## Parameters

- `speechRequest`: A speech request to synthesize.

<a id="Discussion"></a>

## Discussion

When the synthesizer finishes generating audio buffers for the speech request, use [AUInternalRenderBlock](../../audiotoolbox/auinternalrenderblock.md) to report [kAudioOfflineUnitRenderAction_Complete](../../audiotoolbox/audiounitrenderactionflags/offlineunitrenderaction_complete.md).

## See Also

### Rendering speech

- [AVSpeechSynthesisProviderRequest](../avspeechsynthesisproviderrequest.md): An object that represents the text to synthesize and the voice to use.
