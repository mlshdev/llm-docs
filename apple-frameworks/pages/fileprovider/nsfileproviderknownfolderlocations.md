> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderknownfolderlocations](https://developer.apple.com/documentation/fileprovider/nsfileproviderknownfolderlocations)

# NSFileProviderKnownFolderLocations (Swift)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** macOS 15.0+

A class for working with known-folder locations.

## Declaration

```swift
class NSFileProviderKnownFolderLocations
```

## Topics

### Identifying known-folder locations

- [desktopLocation](nsfileproviderknownfolderlocations/desktoplocation.md)
- [documentsLocation](nsfileproviderknownfolderlocations/documentslocation.md)
- [NSFileProviderKnownFolderLocations.Location](nsfileproviderknownfolderlocations/location.md)

### Configuring folder options

- [shouldCreateBinaryCompatibilitySymlink](nsfileproviderknownfolderlocations/shouldcreatebinarycompatibilitysymlink.md)

### Creating a known-folder locations object

- [init()](nsfileproviderknownfolderlocations/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Syncing Desktop and Documents folders

- [claimKnownFolders(\_:localizedReason:completionHandler:)](nsfileprovidermanager/claimknownfolders%28__localizedreason_completionhandler_%29.md): Asks the domain to sync the specified known folders.
- [releaseKnownFolders(\_:localizedReason:completionHandler:)](nsfileprovidermanager/releaseknownfolders%28__localizedreason_completionhandler_%29.md): Asks the system to stop replicating the specified known folders in the domain.
- [NSFileProviderKnownFolders](nsfileproviderknownfolders.md): Constants that identify known folders.
- [NSFileProviderKnownFolderSupporting](nsfileproviderknownfoldersupporting.md): A protocol that defines the interface for sharing known-folder locations with the system.

# NSFileProviderKnownFolderLocations (Objective-C)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** macOS 15.0+

A class for working with known-folder locations.

## Declaration

```objectivec
@interface NSFileProviderKnownFolderLocations : NSObject
```

## Topics

### Identifying known-folder locations

- [desktopLocation](nsfileproviderknownfolderlocations/desktoplocation.md)
- [documentsLocation](nsfileproviderknownfolderlocations/documentslocation.md)
- [NSFileProviderKnownFolderLocation](nsfileproviderknownfolderlocations/location.md)

### Configuring folder options

- [shouldCreateBinaryCompatibilitySymlink](nsfileproviderknownfolderlocations/shouldcreatebinarycompatibilitysymlink.md)

### Creating a known-folder locations object

- [init](nsfileproviderknownfolderlocations/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Syncing Desktop and Documents folders

- [claimKnownFolders:localizedReason:completionHandler:](nsfileprovidermanager/claimknownfolders%28__localizedreason_completionhandler_%29.md): Asks the domain to sync the specified known folders.
- [releaseKnownFolders:localizedReason:completionHandler:](nsfileprovidermanager/releaseknownfolders%28__localizedreason_completionhandler_%29.md): Asks the system to stop replicating the specified known folders in the domain.
- [NSFileProviderKnownFolders](nsfileproviderknownfolders.md): Constants that identify known folders.
- [NSFileProviderKnownFolderSupporting](nsfileproviderknownfoldersupporting.md): A protocol that defines the interface for sharing known-folder locations with the system.
