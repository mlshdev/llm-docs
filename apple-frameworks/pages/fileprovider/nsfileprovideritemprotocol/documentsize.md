> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/documentsize

# documentSize (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

The document’s size, in bytes.

## Declaration

```swift
@NSCopying optional var documentSize: NSNumber? { get }
```

## See Also

### Managing Content

- [childItemCount](childitemcount.md): The number of items contained by this item.
- [contentPolicy](contentpolicy.md)
- [NSFileProviderContentPolicy](../nsfileprovidercontentpolicy.md)

# documentSize (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

The document’s size, in bytes.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSNumber * documentSize;
```

## See Also

### Managing Content

- [childItemCount](childitemcount.md): The number of items contained by this item.
- [contentPolicy](contentpolicy.md)
- [NSFileProviderContentPolicy](../nsfileprovidercontentpolicy.md)
