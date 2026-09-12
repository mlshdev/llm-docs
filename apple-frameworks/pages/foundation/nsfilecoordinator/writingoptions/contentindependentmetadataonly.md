> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/writingoptions/contentindependentmetadataonly](https://developer.apple.com/documentation/foundation/nsfilecoordinator/writingoptions/contentindependentmetadataonly)

# contentIndependentMetadataOnly (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Select this option when writing to change the file’s metadata only and not its contents.

## Declaration

```swift
static var contentIndependentMetadataOnly: NSFileCoordinator.WritingOptions { get }
```

<a id="Discussion"></a>

## Discussion

Any changes written to the item’s contents during this coordinated write may not be preserved or may fail. Changing metadata that is related to the item’s content is also not supported, and those changes may not be preserved. For example, changing the value of [tagNamesKey](../../urlresourcekey/tagnameskey.md) is supported, but changing the value of [contentModificationDateKey](../../urlresourcekey/contentmodificationdatekey.md) is not.

## See Also

### Constants

- [forDeleting](fordeleting.md)
- [forMoving](formoving.md)
- [forMerging](formerging.md)
- [forReplacing](forreplacing.md)

# NSFileCoordinatorWritingContentIndependentMetadataOnly (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Select this option when writing to change the file’s metadata only and not its contents.

## Declaration

```objectivec
NSFileCoordinatorWritingContentIndependentMetadataOnly
```

<a id="Discussion"></a>

## Discussion

Any changes written to the item’s contents during this coordinated write may not be preserved or may fail. Changing metadata that is related to the item’s content is also not supported, and those changes may not be preserved. For example, changing the value of [NSURLTagNamesKey](../../urlresourcekey/tagnameskey.md) is supported, but changing the value of [NSURLContentModificationDateKey](../../urlresourcekey/contentmodificationdatekey.md) is not.

## See Also

### Constants

- [NSFileCoordinatorWritingForDeleting](fordeleting.md)
- [NSFileCoordinatorWritingForMoving](formoving.md)
- [NSFileCoordinatorWritingForMerging](formerging.md)
- [NSFileCoordinatorWritingForReplacing](forreplacing.md)
