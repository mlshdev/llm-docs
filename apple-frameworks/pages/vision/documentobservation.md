> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/documentobservation](https://developer.apple.com/documentation/vision/documentobservation)

# DocumentObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Information about the sections of content that an image-analysis request detects in a document.

## Declaration

```swift
struct DocumentObservation
```

<a id="overview"></a>

## Overview

The observation allows you to access a document’s content and group it within different sections. An observation is the result of using a [RecognizeDocumentsRequest](recognizedocumentsrequest.md) to process an image of a document and detects the content within that document using a container. Each container provides access to any text, lists, barcodes, or any other detected data that appears within the region of the container.

## Topics

### Inspecting an observation

- [uuid](documentobservation/uuid.md): A unique alphanumeric value that the framework assigns to the observation.
- [confidence](documentobservation/confidence.md): The level of confidence in the observation’s accuracy.
- [document](documentobservation/document.md): The contents of the document.
- [timeRange](documentobservation/timerange.md): Time in a video frame where the observation was detected.

### Getting the recognized text

- [DocumentObservation.Container](documentobservation/container.md): A region of content recognized in a document.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionObservation](visionobservation.md)
