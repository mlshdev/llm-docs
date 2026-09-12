> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderknownfoldersupporting](https://developer.apple.com/documentation/fileprovider/nsfileproviderknownfoldersupporting)

# NSFileProviderKnownFolderSupporting (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 15.0+

A protocol that defines the interface for sharing known-folder locations with the system.

## Declaration

```swift
protocol NSFileProviderKnownFolderSupporting : NSObjectProtocol
```

## Topics

### Providing known-folder locations to the system

- [getKnownFolderLocations(\_:completionHandler:)](nsfileproviderknownfoldersupporting/getknownfolderlocations%28__completionhandler_%29.md): Requests suitable locations for known folders.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Syncing Desktop and Documents folders

- [claimKnownFolders(\_:localizedReason:completionHandler:)](nsfileprovidermanager/claimknownfolders%28__localizedreason_completionhandler_%29.md): Asks the domain to sync the specified known folders.
- [releaseKnownFolders(\_:localizedReason:completionHandler:)](nsfileprovidermanager/releaseknownfolders%28__localizedreason_completionhandler_%29.md): Asks the system to stop replicating the specified known folders in the domain.
- [NSFileProviderKnownFolders](nsfileproviderknownfolders.md): Constants that identify known folders.
- [NSFileProviderKnownFolderLocations](nsfileproviderknownfolderlocations.md): A class for working with known-folder locations.

# NSFileProviderKnownFolderSupporting (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 15.0+

A protocol that defines the interface for sharing known-folder locations with the system.

## Declaration

```objectivec
@protocol NSFileProviderKnownFolderSupporting <NSObject>
```

## Topics

### Providing known-folder locations to the system

- [getKnownFolderLocations:completionHandler:](nsfileproviderknownfoldersupporting/getknownfolderlocations%28__completionhandler_%29.md): Requests suitable locations for known folders.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Syncing Desktop and Documents folders

- [claimKnownFolders:localizedReason:completionHandler:](nsfileprovidermanager/claimknownfolders%28__localizedreason_completionhandler_%29.md): Asks the domain to sync the specified known folders.
- [releaseKnownFolders:localizedReason:completionHandler:](nsfileprovidermanager/releaseknownfolders%28__localizedreason_completionhandler_%29.md): Asks the system to stop replicating the specified known folders in the domain.
- [NSFileProviderKnownFolders](nsfileproviderknownfolders.md): Constants that identify known folders.
- [NSFileProviderKnownFolderLocations](nsfileproviderknownfolderlocations.md): A class for working with known-folder locations.
