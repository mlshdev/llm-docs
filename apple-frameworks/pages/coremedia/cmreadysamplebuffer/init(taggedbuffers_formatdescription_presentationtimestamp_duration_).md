> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/init(taggedbuffers:formatdescription:presentationtimestamp:duration:)

# init(taggedBuffers:formatDescription:presentationTimeStamp:duration:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a sample buffer carrying tagged buffers.

## Declaration

```swift
init(taggedBuffers content: Content, formatDescription: CMTaggedBufferGroupFormatDescription? = nil, presentationTimeStamp: CMTime, duration: CMTime = .invalid)
```

## Parameters

- `formatDescription`: Format description of the content. The format must be have tagged buffer group media type.
- `presentationTimeStamp`: The time at which sample will be presented. Must be valid numeric time.
- `duration`: Duration of the sample. Set to `CMTime/invalid` if not present.
