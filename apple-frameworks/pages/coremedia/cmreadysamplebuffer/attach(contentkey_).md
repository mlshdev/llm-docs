> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadysamplebuffer/attach(contentkey:)](https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/attach(contentkey:))

# attach(contentKey:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Attaches an AVContentKey to a CMReadySampleBuffer for the purpose of content decryption. The client is expected to attach AVContentKeys to CMReadySampleBuffers that have been created by the client for enqueueing with AVSampleBufferDisplayLayer or AVSampleBufferAudioRenderer, for which the AVContentKeySpecifier matches indications of suitability that are available to the client according to the content key system that’s in use.

## Declaration

```swift
mutating func attach(contentKey: AVContentKey) throws
```

## Parameters

- `contentKey`: The content key to be attached.

<a id="discussion"></a>

## Discussion

> **Throws**

> Describes the reason for failure to attach the content key.
