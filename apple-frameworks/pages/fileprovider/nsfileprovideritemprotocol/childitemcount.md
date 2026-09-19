> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/childitemcount

# childItemCount (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

The number of items contained by this item.

## Declaration

```swift
@NSCopying optional var childItemCount: NSNumber? { get }
```

## See Also

### Managing Content

- [documentSize](documentsize.md): The document’s size, in bytes.
- [contentPolicy](contentpolicy.md)
- [NSFileProviderContentPolicy](../nsfileprovidercontentpolicy.md)

# childItemCount (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

The number of items contained by this item.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSNumber * childItemCount;
```

## See Also

### Managing Content

- [documentSize](documentsize.md): The document’s size, in bytes.
- [contentPolicy](contentpolicy.md)
- [NSFileProviderContentPolicy](../nsfileprovidercontentpolicy.md)
