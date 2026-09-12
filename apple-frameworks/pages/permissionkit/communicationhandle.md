> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/communicationhandle](https://developer.apple.com/documentation/permissionkit/communicationhandle)

# CommunicationHandle

**Framework:** PermissionKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Contact information for identifying and communicating with a person.

## Declaration

```swift
struct CommunicationHandle
```

<a id="overview"></a>

## Overview

Use this structure to specify contact information like phone numbers, email addresses, or custom identifiers, along with the type of handle it represents.

## Topics

### Specifying handle types

- [CommunicationHandle.Kind](communicationhandle/kind-swift.enum.md): An enumeration that identifies different types of communication handles.

### Creating handles

- [init(value:kind:)](communicationhandle/init%28value_kind_%29.md): Creates a communication handle.

### Accessing properties

- [value](communicationhandle/value.md): The value of the communication handle.
- [kind](communicationhandle/kind-swift.property.md): The type of communication handle.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Response management

- [responses(for:)](askcenter/responses%28for_%29.md): Registers the topic type with the system and returns an asynchronous sequence of responses.
- [PermissionResponse](permissionresponse.md): A full permission response that includes the original question and chosen answer.
- [PermissionChoice](permissionchoice.md): A class that uniquely identifies a specific, statically defined permission choice.
- [CommunicationLimits](communicationlimits.md): A type that encapsulates the communication limits for your app.
