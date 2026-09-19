> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovideritemidentifier/trashcontainer

# trashContainer (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

The persistent identifier for the parent of all trashed items.

## Declaration

```swift
static let trashContainer: NSFileProviderItemIdentifier
```

<a id="Discussion"></a>

## Discussion

When the user moves an item to the trash, the system sets its [parentItemIdentifier](../nsfileprovideritemprotocol/parentitemidentifier.md) to [trashContainer](trashcontainer.md). Your extension must enumerate all trashed items on request.

## See Also

### Constants

- [rootContainer](rootcontainer.md): The persistent identifier for the root directory of the file provider’s shared file hierarchy.
- [workingSet](workingset.md): The persistent identifier representing the working set of documents and directories.

# NSFileProviderTrashContainerItemIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

The persistent identifier for the parent of all trashed items.

## Declaration

```objectivec
extern NSFileProviderItemIdentifier const NSFileProviderTrashContainerItemIdentifier;
```

<a id="Discussion"></a>

## Discussion

When the user moves an item to the trash, the system sets its [parentItemIdentifier](../nsfileprovideritemprotocol/parentitemidentifier.md) to [NSFileProviderTrashContainerItemIdentifier](trashcontainer.md). Your extension must enumerate all trashed items on request.

## See Also

### Constants

- [NSFileProviderRootContainerItemIdentifier](rootcontainer.md): The persistent identifier for the root directory of the file provider’s shared file hierarchy.
- [NSFileProviderWorkingSetContainerItemIdentifier](workingset.md): The persistent identifier representing the working set of documents and directories.
