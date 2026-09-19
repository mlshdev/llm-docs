> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/replicatedknownfolders

# replicatedKnownFolders (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A list of known folders that the domain currently replicates.

## Declaration

```swift
var replicatedKnownFolders: NSFileProviderKnownFolders { get }
```

## See Also

### Syncing Desktop and Documents folders

- [supportedKnownFolders](supportedknownfolders.md): A list of known folders that the domain can replicate.
- [NSFileProviderKnownFolders](../nsfileproviderknownfolders.md): Constants that identify known folders.

# replicatedKnownFolders (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A list of known folders that the domain currently replicates.

## Declaration

```objectivec
@property (assign, readonly) NSFileProviderKnownFolders replicatedKnownFolders;
```

## See Also

### Syncing Desktop and Documents folders

- [supportedKnownFolders](supportedknownfolders.md): A list of known folders that the domain can replicate.
- [NSFileProviderKnownFolders](../nsfileproviderknownfolders.md): Constants that identify known folders.
