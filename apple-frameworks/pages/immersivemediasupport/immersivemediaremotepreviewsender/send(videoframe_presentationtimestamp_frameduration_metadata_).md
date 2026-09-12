> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivemediaremotepreviewsender/send(videoframe:presentationtimestamp:frameduration:metadata:)](https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewsender/send(videoframe:presentationtimestamp:frameduration:metadata:))

# send(videoFrame:presentationTimeStamp:frameDuration:metadata:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Sends a video frame to all the connected receivers using its sample buffer representation.

## Declaration

```swift
func send(videoFrame: ImmersiveVideoFrame, presentationTimeStamp: CMTime, frameDuration: CMTime, metadata: [PresentationCommand] = []) async throws
```

## Parameters

- `videoFrame`: The video frame to be sent to the receivers.
- `presentationTimeStamp`: The presentation time stamp of the frame.
- `frameDuration`: The duration of the frame in seconds.
- `metadata`: Metadata information to be send with this frame.

<a id="discussion"></a>

## Discussion

> **Throws**

> This function throws if anything fails while sending the frame, for example, if the frame has an invalid format or data.
