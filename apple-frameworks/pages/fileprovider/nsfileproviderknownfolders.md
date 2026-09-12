> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderknownfolders](https://developer.apple.com/documentation/fileprovider/nsfileproviderknownfolders)

# NSFileProviderKnownFolders (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** macOS 15.0+

Constants that identify known folders.

## Declaration

```swift
struct NSFileProviderKnownFolders
```

## Topics

### Identifying known folders

- [desktop](nsfileproviderknownfolders/desktop.md)
- [documents](nsfileproviderknownfolders/documents.md)

### Creating a known-folder identifier

- [init(rawValue:)](nsfileproviderknownfolders/init%28rawvalue_%29.md)

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

### Syncing Desktop and Documents folders

- [replicatedKnownFolders](nsfileproviderdomain/replicatedknownfolders.md): A list of known folders that the domain currently replicates.
- [supportedKnownFolders](nsfileproviderdomain/supportedknownfolders.md): A list of known folders that the domain can replicate.

# NSFileProviderKnownFolders (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

Constants that identify known folders.

## Declaration

```objectivec
enum NSFileProviderKnownFolders : NSUInteger;
```

## Topics

### Identifying known folders

- [NSFileProviderDesktop](nsfileproviderknownfolders/desktop.md)
- [NSFileProviderDocuments](nsfileproviderknownfolders/documents.md)

## See Also

### Syncing Desktop and Documents folders

- [replicatedKnownFolders](nsfileproviderdomain/replicatedknownfolders.md): A list of known folders that the domain currently replicates.
- [supportedKnownFolders](nsfileproviderdomain/supportedknownfolders.md): A list of known folders that the domain can replicate.
