> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/permissionkit/communicationtopic/init(personinformation:)

# init(personInformation:)

**Framework:** PermissionKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a communication topic with person information for general communication.

## Declaration

```swift
init(personInformation: [CommunicationTopic.PersonInformation])
```

## Parameters

- `personInformation`: Information about the people the child wants to communicate with.

## See Also

### Creating topics

- [init(personInformation:actions:)](init%28personinformation_actions_%29.md): Creates a communication topic with person information and specific actions.
