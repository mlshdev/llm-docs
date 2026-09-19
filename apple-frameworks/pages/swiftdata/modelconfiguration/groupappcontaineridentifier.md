> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftdata/modelconfiguration/groupappcontaineridentifier

# groupAppContainerIdentifier

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

The identifier of the configuration’s app group container.

## Declaration

```swift
let groupAppContainerIdentifier: String?
```

## See Also

### Sharing and syncing the model store

- [cloudKitContainerIdentifier](cloudkitcontaineridentifier.md): The identifier of the configuration’s CloudKit database container.
- [cloudKitDatabase](cloudkitdatabase-swift.property.md): The option to use when detecting the container of the preferred CloudKit database.
- [ModelConfiguration.CloudKitDatabase](cloudkitdatabase-swift.struct.md): A type that describes the options for detecting a CloudKit database.
- [groupContainer](groupcontainer-swift.property.md): The option to use when detecting the preferred app group container.
- [ModelConfiguration.GroupContainer](groupcontainer-swift.struct.md): A type that describes the options for detecting an app group container.
