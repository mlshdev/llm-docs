> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/supportedknownfolders

# supportedKnownFolders (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A list of known folders that the domain can replicate.

## Declaration

```swift
var supportedKnownFolders: NSFileProviderKnownFolders { get set }
```

## See Also

### Syncing Desktop and Documents folders

- [replicatedKnownFolders](replicatedknownfolders.md): A list of known folders that the domain currently replicates.
- [NSFileProviderKnownFolders](../nsfileproviderknownfolders.md): Constants that identify known folders.

# supportedKnownFolders (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A list of known folders that the domain can replicate.

## Declaration

```objectivec
@property (assign, readwrite) NSFileProviderKnownFolders supportedKnownFolders;
```

## See Also

### Syncing Desktop and Documents folders

- [replicatedKnownFolders](replicatedknownfolders.md): A list of known folders that the domain currently replicates.
- [NSFileProviderKnownFolders](../nsfileproviderknownfolders.md): Constants that identify known folders.
