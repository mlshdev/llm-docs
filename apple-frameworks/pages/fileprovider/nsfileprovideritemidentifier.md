> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemidentifier](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemidentifier)

# NSFileProviderItemIdentifier (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 11.0+ · visionOS 1.0+

A unique identifier for an item managed by the File Provider extension.

## Declaration

```swift
struct NSFileProviderItemIdentifier
```

## Topics

### Constants

- [rootContainer](nsfileprovideritemidentifier/rootcontainer.md): The persistent identifier for the root directory of the file provider’s shared file hierarchy.
- [workingSet](nsfileprovideritemidentifier/workingset.md): The persistent identifier representing the working set of documents and directories.
- [trashContainer](nsfileprovideritemidentifier/trashcontainer.md): The persistent identifier for the parent of all trashed items.

### Initializers

- [init(\_:)](nsfileprovideritemidentifier/init%28__%29.md): Returns a newly instantiated persistent identifier.
- [init(rawValue:)](nsfileprovideritemidentifier/init%28rawvalue_%29.md): Returns a newly instantiated persistent identifier.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Provided items

- [NSFileProviderItem](nsfileprovideritem-swift.typealias.md): An item the File Provider extension manages.
- [NSFileProviderItemProtocol](nsfileprovideritemprotocol.md): A protocol that defines the properties of an item managed by the File Provider extension.
- [NSFileProviderItemCapabilities](nsfileprovideritemcapabilities.md): An item’s capabilities, which define the actions that the user can perform in the document browser.
- [NSFileProviderTypeAndCreator](nsfileprovidertypeandcreator.md): A structure that contains the file type and file creator codes for an item.

# NSFileProviderItemIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · macOS 11.0+ · visionOS 1.0+

A unique identifier for an item managed by the File Provider extension.

## Declaration

```objectivec
typedef NSString * NSFileProviderItemIdentifier;
```

## Topics

### Constants

- [NSFileProviderRootContainerItemIdentifier](nsfileprovideritemidentifier/rootcontainer.md): The persistent identifier for the root directory of the file provider’s shared file hierarchy.
- [NSFileProviderWorkingSetContainerItemIdentifier](nsfileprovideritemidentifier/workingset.md): The persistent identifier representing the working set of documents and directories.
- [NSFileProviderTrashContainerItemIdentifier](nsfileprovideritemidentifier/trashcontainer.md): The persistent identifier for the parent of all trashed items.

## See Also

### Provided items

- [NSFileProviderItem](nsfileprovideritem-swift.typealias.md): An item the File Provider extension manages.
- [NSFileProviderItem](nsfileprovideritemprotocol.md): A protocol that defines the properties of an item managed by the File Provider extension.
- [NSFileProviderItemCapabilities](nsfileprovideritemcapabilities.md): An item’s capabilities, which define the actions that the user can perform in the document browser.
- [NSFileProviderTypeAndCreator](nsfileprovidertypeandcreator.md): A structure that contains the file type and file creator codes for an item.
