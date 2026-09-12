> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelconfiguration/groupcontainer-swift.struct](https://developer.apple.com/documentation/swiftdata/modelconfiguration/groupcontainer-swift.struct)

# ModelConfiguration.GroupContainer

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

A type that describes the options for detecting an app group container.

## Declaration

```swift
struct GroupContainer
```

## Topics

### Getting discovery options

- [automatic](groupcontainer-swift.struct/automatic.md): Tells SwiftData to use the app’s primary group container as the root location for the persistent storage.
- [identifier(\_:)](groupcontainer-swift.struct/identifier%28__%29.md): Tells SwiftData to use the specified group container as the root location for the app’s persistent storage.
- [none](groupcontainer-swift.struct/none.md): Prevents SwiftData from using a group container as the root location for the app’s persistent storage.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sharing and syncing the model store

- [cloudKitContainerIdentifier](cloudkitcontaineridentifier.md): The identifier of the configuration’s CloudKit database container.
- [cloudKitDatabase](cloudkitdatabase-swift.property.md): The option to use when detecting the container of the preferred CloudKit database.
- [ModelConfiguration.CloudKitDatabase](cloudkitdatabase-swift.struct.md): A type that describes the options for detecting a CloudKit database.
- [groupAppContainerIdentifier](groupappcontaineridentifier.md): The identifier of the configuration’s app group container.
- [groupContainer](groupcontainer-swift.property.md): The option to use when detecting the preferred app group container.
