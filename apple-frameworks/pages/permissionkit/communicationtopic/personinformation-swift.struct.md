> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/communicationtopic/personinformation-swift.struct](https://developer.apple.com/documentation/permissionkit/communicationtopic/personinformation-swift.struct)

# CommunicationTopic.PersonInformation

**Framework:** PermissionKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Information about a person the child wants to communicate with.

## Declaration

```swift
struct PersonInformation
```

## Topics

### Creating contact details

- [init(handle:nameComponents:avatarImage:)](personinformation-swift.struct/init%28handle_namecomponents_avatarimage_%29.md): Creates person information with contact details and optional display information.
- [init(from:)](personinformation-swift.struct/init%28from_%29.md): Creates an instance from the given decoder.

### Accessing properties

- [avatarImage](personinformation-swift.struct/avatarimage.md): An image that represents the person.
- [handle](personinformation-swift.struct/handle.md): The handle to identify and communicate with the person.
- [nameComponents](personinformation-swift.struct/namecomponents.md): The components that make up the person’s name.

### Encoding

- [encode(to:)](personinformation-swift.struct/encode%28to_%29.md): Performs the inverse of the decoding process.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)

## See Also

### Working with supporting types

- [CommunicationTopic.Action](action.md): A communication action you can request permission for.
