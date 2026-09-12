> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/claimknownfolders(_:localizedreason:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/claimknownfolders(_:localizedreason:completionhandler:))

# claimKnownFolders(\_:localizedReason:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Asks the domain to sync the specified known folders.

## Declaration

```swift
func claimKnownFolders(_ knownFolders: NSFileProviderKnownFolderLocations, localizedReason: String, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func claimKnownFolders(_ knownFolders: NSFileProviderKnownFolderLocations, localizedReason: String) async throws
```

<a id="discussion"></a>

## Discussion

Use this method to claim a set of known folders according to the information in the `knownFolders` parameter. The system only enables sync for these folders in the domain if the set of locations is valid and if the user agrees.

## See Also

### Syncing Desktop and Documents folders

- [releaseKnownFolders(\_:localizedReason:completionHandler:)](releaseknownfolders%28__localizedreason_completionhandler_%29.md): Asks the system to stop replicating the specified known folders in the domain.
- [NSFileProviderKnownFolders](../nsfileproviderknownfolders.md): Constants that identify known folders.
- [NSFileProviderKnownFolderLocations](../nsfileproviderknownfolderlocations.md): A class for working with known-folder locations.
- [NSFileProviderKnownFolderSupporting](../nsfileproviderknownfoldersupporting.md): A protocol that defines the interface for sharing known-folder locations with the system.

# claimKnownFolders:localizedReason:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Asks the domain to sync the specified known folders.

## Declaration

```objectivec
- (void) claimKnownFolders:(NSFileProviderKnownFolderLocations *) knownFolders localizedReason:(NSString *) localizedReason completionHandler:(void (^)(NSError *)) completionHandler;
```

<a id="discussion"></a>

## Discussion

Use this method to claim a set of known folders according to the information in the `knownFolders` parameter. The system only enables sync for these folders in the domain if the set of locations is valid and if the user agrees.

## See Also

### Syncing Desktop and Documents folders

- [releaseKnownFolders:localizedReason:completionHandler:](releaseknownfolders%28__localizedreason_completionhandler_%29.md): Asks the system to stop replicating the specified known folders in the domain.
- [NSFileProviderKnownFolders](../nsfileproviderknownfolders.md): Constants that identify known folders.
- [NSFileProviderKnownFolderLocations](../nsfileproviderknownfolderlocations.md): A class for working with known-folder locations.
- [NSFileProviderKnownFolderSupporting](../nsfileproviderknownfoldersupporting.md): A protocol that defines the interface for sharing known-folder locations with the system.
