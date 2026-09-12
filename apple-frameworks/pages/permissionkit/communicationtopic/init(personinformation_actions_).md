> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/communicationtopic/init(personinformation:actions:)](https://developer.apple.com/documentation/permissionkit/communicationtopic/init(personinformation:actions:))

# init(personInformation:actions:)

**Framework:** PermissionKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a communication topic with person information and specific actions.

## Declaration

```swift
init(personInformation: [CommunicationTopic.PersonInformation], actions: Set<CommunicationTopic.Action>)
```

## Parameters

- `personInformation`: Information about the people the child wants to communicate with.
- `actions`: The communication actions the child wants to perform.

## See Also

### Creating topics

- [init(personInformation:)](init%28personinformation_%29.md): Creates a communication topic with person information for general communication.
