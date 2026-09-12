> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidererror/providerdomainnotfound](https://developer.apple.com/documentation/fileprovider/nsfileprovidererror/providerdomainnotfound)

# providerDomainNotFound

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 17.1+ · iPadOS 17.1+ · macOS 14.1+ · visionOS 1.0+

An error indicating that there isn’t a registered domain for the corresponding identifier.

## Declaration

```swift
static var providerDomainNotFound: NSFileProviderError.Code { get }
```

## See Also

### Accessing error codes

- [NSFileProviderError.Code](code.md): The error codes for the File Provider extension.
- [filenameCollision](filenamecollision.md): An error indicating that an item with the same name already exists in the same directory.
- [insufficientQuota](insufficientquota.md): An error indicating that the File Provider extension can’t upload the item because it would push the account over its quota.
- [noSuchItem](nosuchitem.md): An error indicating that the specified item doesn’t exist.
- [notAuthenticated](notauthenticated.md): An error indicating that you can’t verify the user’s credentials.
- [pageExpired](pageexpired.md): An error indicating that the page is too old, and that the system must restart the enumeration operation from the beginning.
- [serverUnreachable](serverunreachable.md): An error indicating that the File Provider extension can’t reach the remote server.
- [syncAnchorExpired](syncanchorexpired.md): An error indicating that the sync anchor is too old, and that the system must restart the sync operation from the beginning.
- [directoryNotEmpty](directorynotempty.md): An error indicating an attempt to nonrecursively delete a directory that isn’t empty.
- [providerNotFound](providernotfound.md): An error indicating that the File Provider manager can’t find the specified provider.
- [providerTranslocated](providertranslocated.md): An error indicating the File Provider extension is in a disabled state due to Gatekeeper’s restrictions for apps from outside the App Store.
- [olderExtensionVersionRunning](olderextensionversionrunning.md): An error indicating that the registered provider in the system is an older version than the one the app uses.
- [newerExtensionVersionFound](newerextensionversionfound.md): An error indicating that the registered provider in the system is a newer version than the one the app uses.
- [nonEvictable](nonevictable.md): An error indicating that the File Provider extension can’t evict an item.
- [nonEvictableChildren](nonevictablechildren.md): An error indicating that the File Provider extension can’t evict a directory because it contains nonevictable items.
