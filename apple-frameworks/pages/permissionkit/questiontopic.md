> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/questiontopic](https://developer.apple.com/documentation/permissionkit/questiontopic)

# QuestionTopic

**Framework:** PermissionKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A protocol that defines a question topic that can be used to interpret what a person is asking for.

## Declaration

```swift
protocol QuestionTopic : Decodable, Encodable
```

## Topics

### Getting the topic identifier

- [id](questiontopic/id.md): The unique identifier for the topic.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)

### Conforming Types

- [CommunicationTopic](communicationtopic.md)
- [SignificantAppUpdateTopic](significantappupdatetopic.md)
