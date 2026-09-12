> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderknownfoldersupporting/getknownfolderlocations(_:completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderknownfoldersupporting/getknownfolderlocations(_:completionhandler:))

# getKnownFolderLocations(\_:completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Requests suitable locations for known folders.

## Declaration

```swift
func getKnownFolderLocations(_ knownFolders: NSFileProviderKnownFolders, completionHandler: @escaping @Sendable (NSFileProviderKnownFolderLocations?, (any Error)?) -> Void)
```

```swift
func knownFolderLocations(_ knownFolders: NSFileProviderKnownFolders) async throws -> NSFileProviderKnownFolderLocations
```

# getKnownFolderLocations:completionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Requests suitable locations for known folders.

## Declaration

```objectivec
- (void) getKnownFolderLocations:(NSFileProviderKnownFolders) knownFolders completionHandler:(void (^)(NSFileProviderKnownFolderLocations *, NSError *)) completionHandler;
```
