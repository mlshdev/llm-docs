> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretransferable/transferrepresentationvisibility/all

# all

**Framework:** Core Transferable  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The visibility level that specifies that any app or process can access the item.

## Declaration

```swift
static let all: TransferRepresentationVisibility
```

## See Also

### Specifying transfer visibility

- [team](team.md): The visibility level that specifies that the item is visible only to apps created by the current app’s development team.
- [group](group.md): The visibility level that specifies that the item is visible only to macOS apps in the same App Group.
- [ownProcess](ownprocess.md): The visibility level that specifies that the item is visible only within the app that’s the source of the item.
