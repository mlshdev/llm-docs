> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewsender/send(audiobuffer:)

# send(audioBuffer:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Sends an audio frame to all connected receivers.

## Declaration

```swift
func send(audioBuffer: CMSampleBuffer) async throws
```

## Parameters

- `audioBuffer`: The audio buffer to be sent to the receivers.

<a id="discussion"></a>

## Discussion

> **Throws**

> This function throws if anything fails while sending the audio data, for example, if the audio sample buffer has an invalid format or data.
