> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivemediaremotepreviewsender/send(taggedbuffers:presentationtimestamp:frameduration:)](https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewsender/send(taggedbuffers:presentationtimestamp:frameduration:))

# send(taggedBuffers:presentationTimeStamp:frameDuration:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Sends a video frame to all the connected receivers using its tagged buffers representation.

## Declaration

```swift
func send(taggedBuffers: [CMTaggedBuffer], presentationTimeStamp: CMTime, frameDuration: CMTime) async throws
```

## Parameters

- `presentationTimeStamp`: The presentation time stamp of the frame.
- `frameDuration`: The duration of the frame in seconds.

<a id="discussion"></a>

## Discussion

> **Throws**

> This function throws if anything fails while sending the frame, for example, if the frame has an invalid format or data.
