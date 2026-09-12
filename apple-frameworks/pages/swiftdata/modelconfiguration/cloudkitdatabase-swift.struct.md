> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelconfiguration/cloudkitdatabase-swift.struct](https://developer.apple.com/documentation/swiftdata/modelconfiguration/cloudkitdatabase-swift.struct)

# ModelConfiguration.CloudKitDatabase

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

A type that describes the options for detecting a CloudKit database.

## Declaration

```swift
struct CloudKitDatabase
```

## Topics

### Getting discovery options

- [automatic](cloudkitdatabase-swift.struct/automatic.md): Enables managed CloudKit sync using the primary ubiquity container from the app’s entitlements.
- [private(\_:)](cloudkitdatabase-swift.struct/private%28__%29.md): Enables managed CloudKit sync using the specified ubiquity container.
- [none](cloudkitdatabase-swift.struct/none.md): Disables managed CloudKit sync.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sharing and syncing the model store

- [cloudKitContainerIdentifier](cloudkitcontaineridentifier.md): The identifier of the configuration’s CloudKit database container.
- [cloudKitDatabase](cloudkitdatabase-swift.property.md): The option to use when detecting the container of the preferred CloudKit database.
- [groupAppContainerIdentifier](groupappcontaineridentifier.md): The identifier of the configuration’s app group container.
- [groupContainer](groupcontainer-swift.property.md): The option to use when detecting the preferred app group container.
- [ModelConfiguration.GroupContainer](groupcontainer-swift.struct.md): A type that describes the options for detecting an app group container.
