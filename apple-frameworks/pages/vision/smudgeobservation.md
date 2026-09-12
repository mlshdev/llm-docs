> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/smudgeobservation](https://developer.apple.com/documentation/vision/smudgeobservation)

# SmudgeObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

An observation that provides an overall score of the presence of a smudge in an image or video frame capture.

## Declaration

```swift
struct SmudgeObservation
```

## Topics

### Inspecting an observation

- [description](smudgeobservation/description.md): A textual representation of this instance.
- [confidence](smudgeobservation/confidence.md): The level of confidence in the observation’s accuracy of smudge detection on a lens.
- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.

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
