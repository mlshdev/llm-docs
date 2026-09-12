> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/writingoptions/formoving](https://developer.apple.com/documentation/foundation/nsfilecoordinator/writingoptions/formoving)

# forMoving (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static var forMoving: NSFileCoordinator.WritingOptions { get }
```

<a id="Discussion"></a>

## Discussion

When specified for a directory item, the file coordinator waits for already running read and write operations of the directory’s contents, which were themselves initiated through a file coordinator, to finish before moving the directory. Queued, but not executing, read and write operations on the directory’s contents wait until the move operation finishes.

This option has no effect on files. You can safely use it when moving file-system items without checking to see whether those items are files or directories.

## See Also

### Constants

- [forDeleting](fordeleting.md)
- [forMerging](formerging.md)
- [forReplacing](forreplacing.md)
- [contentIndependentMetadataOnly](contentindependentmetadataonly.md): Select this option when writing to change the file’s metadata only and not its contents.

# NSFileCoordinatorWritingForMoving (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
NSFileCoordinatorWritingForMoving
```

<a id="Discussion"></a>

## Discussion

When specified for a directory item, the file coordinator waits for already running read and write operations of the directory’s contents, which were themselves initiated through a file coordinator, to finish before moving the directory. Queued, but not executing, read and write operations on the directory’s contents wait until the move operation finishes.

This option has no effect on files. You can safely use it when moving file-system items without checking to see whether those items are files or directories.

## See Also

### Constants

- [NSFileCoordinatorWritingForDeleting](fordeleting.md)
- [NSFileCoordinatorWritingForMerging](formerging.md)
- [NSFileCoordinatorWritingForReplacing](forreplacing.md)
- [NSFileCoordinatorWritingContentIndependentMetadataOnly](contentindependentmetadataonly.md): Select this option when writing to change the file’s metadata only and not its contents.
