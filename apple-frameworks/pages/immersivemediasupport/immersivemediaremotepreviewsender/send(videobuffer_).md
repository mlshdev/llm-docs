> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivemediaremotepreviewsender/send(videobuffer:)](https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewsender/send(videobuffer:))

# send(videoBuffer:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Sends the video frame to the receivers.

## Declaration

```swift
func send(videoBuffer: CMSampleBuffer) async throws
```

## Parameters

- `videoBuffer`: The video buffer to be sent to the receivers - this needs to be a sample buffer with **mediaType** equals to **.taggedBufferGroup** and containing frames properly tagged to be used as Immersive Video frames.

<a id="discussion"></a>

## Discussion

> **Throws**

> This function throws if anything fails while sending the frame, for example, if the frame has an invalid format or data.
