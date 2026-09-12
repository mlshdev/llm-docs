> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/communicationhandle/kind-swift.enum](https://developer.apple.com/documentation/permissionkit/communicationhandle/kind-swift.enum)

# CommunicationHandle.Kind

**Framework:** PermissionKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

An enumeration that identifies different types of communication handles.

## Declaration

```swift
enum Kind
```

<a id="overview"></a>

## Overview

Use these cases to specify whether a handle represents an email address, phone number, username, or custom identifier when requesting communication permission.

## Topics

### Identifying a handle type

- [CommunicationHandle.Kind.phoneNumber](kind-swift.enum/phonenumber.md): A person’s phone number.
- [CommunicationHandle.Kind.emailAddress](kind-swift.enum/emailaddress.md): A person’s email address.
- [CommunicationHandle.Kind.custom](kind-swift.enum/custom.md): A unique identifier that distinguishes one person from another.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
