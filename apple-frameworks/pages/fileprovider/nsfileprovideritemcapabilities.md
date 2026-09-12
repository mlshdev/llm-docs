> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemcapabilities](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemcapabilities)

# NSFileProviderItemCapabilities (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

An item’s capabilities, which define the actions that the user can perform in the document browser.

## Declaration

```swift
struct NSFileProviderItemCapabilities
```

## Mentioned In

- [Exporting file provider metrics data](exporting-file-provider-metrics-data.md)

## Topics

### Initializers

- [init(rawValue:)](nsfileprovideritemcapabilities/init%28rawvalue_%29.md): Returns a newly created item capabilities value.

### Constants

- [allowsAddingSubItems](nsfileprovideritemcapabilities/allowsaddingsubitems.md): A value indicating that the user can add subitems.
- [allowsContentEnumerating](nsfileprovideritemcapabilities/allowscontentenumerating.md): A value indicating that the item’s contents can be enumerated.
- [allowsDeleting](nsfileprovideritemcapabilities/allowsdeleting.md): A value indicating that the item can be deleted.
- [allowsEvicting](nsfileprovideritemcapabilities/allowsevicting.md): Deprecated. A value indicating that the system can delete the local copy of the item.
- [allowsReading](nsfileprovideritemcapabilities/allowsreading.md): A value indicating that the value can be read from.
- [allowsRenaming](nsfileprovideritemcapabilities/allowsrenaming.md): A value indicating that the item can be renamed.
- [allowsReparenting](nsfileprovideritemcapabilities/allowsreparenting.md): A value indicating that the item can be moved.
- [allowsTrashing](nsfileprovideritemcapabilities/allowstrashing.md): A value indicating that the item can be moved to the trash.
- [allowsWriting](nsfileprovideritemcapabilities/allowswriting.md): A value indicating that the item can be written to.
- [allowsExcludingFromSync](nsfileprovideritemcapabilities/allowsexcludingfromsync.md): A value indicating that the user can exclude the item from sync operations.
- [allowsAll](nsfileprovideritemcapabilities/allowsall.md): Deprecated. A convenience value for enabling all capabilities.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Provided items

- [NSFileProviderItem](nsfileprovideritem-swift.typealias.md): An item the File Provider extension manages.
- [NSFileProviderItemProtocol](nsfileprovideritemprotocol.md): A protocol that defines the properties of an item managed by the File Provider extension.
- [NSFileProviderItemIdentifier](nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.
- [NSFileProviderTypeAndCreator](nsfileprovidertypeandcreator.md): A structure that contains the file type and file creator codes for an item.

# NSFileProviderItemCapabilities (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

An item’s capabilities, which define the actions that the user can perform in the document browser.

## Declaration

```objectivec
enum NSFileProviderItemCapabilities : NSUInteger;
```

## Mentioned In

- [Exporting file provider metrics data](exporting-file-provider-metrics-data.md)

## Topics

### Constants

- [NSFileProviderItemCapabilitiesAllowsAddingSubItems](nsfileprovideritemcapabilities/allowsaddingsubitems.md): A value indicating that the user can add subitems.
- [NSFileProviderItemCapabilitiesAllowsContentEnumerating](nsfileprovideritemcapabilities/allowscontentenumerating.md): A value indicating that the item’s contents can be enumerated.
- [NSFileProviderItemCapabilitiesAllowsDeleting](nsfileprovideritemcapabilities/allowsdeleting.md): A value indicating that the item can be deleted.
- [NSFileProviderItemCapabilitiesAllowsEvicting](nsfileprovideritemcapabilities/allowsevicting.md): Deprecated. A value indicating that the system can delete the local copy of the item.
- [NSFileProviderItemCapabilitiesAllowsReading](nsfileprovideritemcapabilities/allowsreading.md): A value indicating that the value can be read from.
- [NSFileProviderItemCapabilitiesAllowsRenaming](nsfileprovideritemcapabilities/allowsrenaming.md): A value indicating that the item can be renamed.
- [NSFileProviderItemCapabilitiesAllowsReparenting](nsfileprovideritemcapabilities/allowsreparenting.md): A value indicating that the item can be moved.
- [NSFileProviderItemCapabilitiesAllowsTrashing](nsfileprovideritemcapabilities/allowstrashing.md): A value indicating that the item can be moved to the trash.
- [NSFileProviderItemCapabilitiesAllowsWriting](nsfileprovideritemcapabilities/allowswriting.md): A value indicating that the item can be written to.
- [NSFileProviderItemCapabilitiesAllowsExcludingFromSync](nsfileprovideritemcapabilities/allowsexcludingfromsync.md): A value indicating that the user can exclude the item from sync operations.
- [NSFileProviderItemCapabilitiesAllowsAll](nsfileprovideritemcapabilities/allowsall.md): Deprecated. A convenience value for enabling all capabilities.

## See Also

### Provided items

- [NSFileProviderItem](nsfileprovideritem-swift.typealias.md): An item the File Provider extension manages.
- [NSFileProviderItem](nsfileprovideritemprotocol.md): A protocol that defines the properties of an item managed by the File Provider extension.
- [NSFileProviderItemIdentifier](nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.
- [NSFileProviderTypeAndCreator](nsfileprovidertypeandcreator.md): A structure that contains the file type and file creator codes for an item.
