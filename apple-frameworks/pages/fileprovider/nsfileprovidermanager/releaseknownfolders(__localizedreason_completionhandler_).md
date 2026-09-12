> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/releaseknownfolders(_:localizedreason:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/releaseknownfolders(_:localizedreason:completionhandler:))

# releaseKnownFolders(\_:localizedReason:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Asks the system to stop replicating the specified known folders in the domain.

## Declaration

```swift
func releaseKnownFolders(_ knownFolders: NSFileProviderKnownFolders, localizedReason: String, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func releaseKnownFolders(_ knownFolders: NSFileProviderKnownFolders, localizedReason: String) async throws
```

<a id="discussion"></a>

## Discussion

Use this method to immediately disable replication of the specified known folders.

## See Also

### Syncing Desktop and Documents folders

- [claimKnownFolders(\_:localizedReason:completionHandler:)](claimknownfolders%28__localizedreason_completionhandler_%29.md): Asks the domain to sync the specified known folders.
- [NSFileProviderKnownFolders](../nsfileproviderknownfolders.md): Constants that identify known folders.
- [NSFileProviderKnownFolderLocations](../nsfileproviderknownfolderlocations.md): A class for working with known-folder locations.
- [NSFileProviderKnownFolderSupporting](../nsfileproviderknownfoldersupporting.md): A protocol that defines the interface for sharing known-folder locations with the system.

# releaseKnownFolders:localizedReason:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Asks the system to stop replicating the specified known folders in the domain.

## Declaration

```objectivec
- (void) releaseKnownFolders:(NSFileProviderKnownFolders) knownFolders localizedReason:(NSString *) localizedReason completionHandler:(void (^)(NSError *)) completionHandler;
```

<a id="discussion"></a>

## Discussion

Use this method to immediately disable replication of the specified known folders.

## See Also

### Syncing Desktop and Documents folders

- [claimKnownFolders:localizedReason:completionHandler:](claimknownfolders%28__localizedreason_completionhandler_%29.md): Asks the domain to sync the specified known folders.
- [NSFileProviderKnownFolders](../nsfileproviderknownfolders.md): Constants that identify known folders.
- [NSFileProviderKnownFolderLocations](../nsfileproviderknownfolderlocations.md): A class for working with known-folder locations.
- [NSFileProviderKnownFolderSupporting](../nsfileproviderknownfoldersupporting.md): A protocol that defines the interface for sharing known-folder locations with the system.
