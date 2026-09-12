> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/writingoptions/forreplacing](https://developer.apple.com/documentation/foundation/nsfilecoordinator/writingoptions/forreplacing)

# forReplacing (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static var forReplacing: NSFileCoordinator.WritingOptions { get }
```

<a id="Discussion"></a>

## Discussion

Specifies whether the act of writing to the file involves actually replacing the file with a different file (or directory). If the current file coordinator is waiting for another object to move or rename the file, this option treats the operation as the creation of a new file (instead of as the replacement of the old file); otherwise, this constant causes the same behavior as the [forDeleting](fordeleting.md) constant. Use this method when the moving or creating an item should replace any item currently stored at that location. To avoid a race condition, use it regardless of whether an item is actually in the way before the writing begins. Do not use this method when simply updating the contents of the existing file.

## See Also

### Constants

- [forDeleting](fordeleting.md)
- [forMoving](formoving.md)
- [forMerging](formerging.md)
- [contentIndependentMetadataOnly](contentindependentmetadataonly.md): Select this option when writing to change the file’s metadata only and not its contents.

# NSFileCoordinatorWritingForReplacing (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
NSFileCoordinatorWritingForReplacing
```

<a id="Discussion"></a>

## Discussion

Specifies whether the act of writing to the file involves actually replacing the file with a different file (or directory). If the current file coordinator is waiting for another object to move or rename the file, this option treats the operation as the creation of a new file (instead of as the replacement of the old file); otherwise, this constant causes the same behavior as the [NSFileCoordinatorWritingForDeleting](fordeleting.md) constant. Use this method when the moving or creating an item should replace any item currently stored at that location. To avoid a race condition, use it regardless of whether an item is actually in the way before the writing begins. Do not use this method when simply updating the contents of the existing file.

## See Also

### Constants

- [NSFileCoordinatorWritingForDeleting](fordeleting.md)
- [NSFileCoordinatorWritingForMoving](formoving.md)
- [NSFileCoordinatorWritingForMerging](formerging.md)
- [NSFileCoordinatorWritingContentIndependentMetadataOnly](contentindependentmetadataonly.md): Select this option when writing to change the file’s metadata only and not its contents.
