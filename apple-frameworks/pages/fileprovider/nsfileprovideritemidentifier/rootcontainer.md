> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemidentifier/rootcontainer](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemidentifier/rootcontainer)

# rootContainer (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

The persistent identifier for the root directory of the file provider’s shared file hierarchy.

## Declaration

```swift
static let rootContainer: NSFileProviderItemIdentifier
```

## Mentioned In

- [Defining Your File Provider’s Content](../defining-your-file-provider-s-content.md)

## See Also

### Constants

- [workingSet](workingset.md): The persistent identifier representing the working set of documents and directories.
- [trashContainer](trashcontainer.md): The persistent identifier for the parent of all trashed items.

# NSFileProviderRootContainerItemIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

The persistent identifier for the root directory of the file provider’s shared file hierarchy.

## Declaration

```objectivec
extern NSFileProviderItemIdentifier const NSFileProviderRootContainerItemIdentifier;
```

## Mentioned In

- [Defining Your File Provider’s Content](../defining-your-file-provider-s-content.md)

## See Also

### Constants

- [NSFileProviderWorkingSetContainerItemIdentifier](workingset.md): The persistent identifier representing the working set of documents and directories.
- [NSFileProviderTrashContainerItemIdentifier](trashcontainer.md): The persistent identifier for the parent of all trashed items.
