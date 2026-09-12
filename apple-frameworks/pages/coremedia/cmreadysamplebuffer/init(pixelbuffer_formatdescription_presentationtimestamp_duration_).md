> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadysamplebuffer/init(pixelbuffer:formatdescription:presentationtimestamp:duration:)](https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/init(pixelbuffer:formatdescription:presentationtimestamp:duration:))

# init(pixelBuffer:formatDescription:presentationTimeStamp:duration:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a sample buffer carrying image buffer.

## Declaration

```swift
init(pixelBuffer content: Content, formatDescription: CMVideoFormatDescription? = nil, presentationTimeStamp: CMTime, duration: CMTime = .invalid)
```

## Parameters

- `formatDescription`: Format description of the content. If provided, the format must be have video media type. If not provided, one will be created using `CMVideoFormatDescription.init(pixelBuffer:)`.
- `presentationTimeStamp`: The time at which sample will be presented. Must be valid numeric time.
- `duration`: Duration of the sample. Set to `CMTime/invalid` if not present.
