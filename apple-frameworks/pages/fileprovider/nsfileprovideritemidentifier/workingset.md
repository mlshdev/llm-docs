> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemidentifier/workingset](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemidentifier/workingset)

# workingSet (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

The persistent identifier representing the working set of documents and directories.

## Declaration

```swift
static let workingSet: NSFileProviderItemIdentifier
```

## Mentioned In

- [Synchronizing the File Provider Extension](../synchronizing-the-file-provider-extension.md)
- [Defining Your File Provider’s Content](../defining-your-file-provider-s-content.md)

<a id="Discussion"></a>

## Discussion

For more information about the working set, see  [Create the Working Set and Enumerate its Content](../defining-your-file-provider-s-content.md#Create-the-Working-Set-and-Enumerate-its-Content).

## See Also

### Constants

- [rootContainer](rootcontainer.md): The persistent identifier for the root directory of the file provider’s shared file hierarchy.
- [trashContainer](trashcontainer.md): The persistent identifier for the parent of all trashed items.

# NSFileProviderWorkingSetContainerItemIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

The persistent identifier representing the working set of documents and directories.

## Declaration

```objectivec
extern NSFileProviderItemIdentifier const NSFileProviderWorkingSetContainerItemIdentifier;
```

## Mentioned In

- [Synchronizing the File Provider Extension](../synchronizing-the-file-provider-extension.md)
- [Defining Your File Provider’s Content](../defining-your-file-provider-s-content.md)

<a id="Discussion"></a>

## Discussion

For more information about the working set, see  [Create the Working Set and Enumerate its Content](../defining-your-file-provider-s-content.md#Create-the-Working-Set-and-Enumerate-its-Content).

## See Also

### Constants

- [NSFileProviderRootContainerItemIdentifier](rootcontainer.md): The persistent identifier for the root directory of the file provider’s shared file hierarchy.
- [NSFileProviderTrashContainerItemIdentifier](trashcontainer.md): The persistent identifier for the parent of all trashed items.
