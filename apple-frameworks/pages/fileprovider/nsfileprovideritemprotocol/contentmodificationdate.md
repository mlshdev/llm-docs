> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/contentmodificationdate

# contentModificationDate (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

The date the item was last modified.

## Declaration

```swift
optional var contentModificationDate: Date? { get }
```

## See Also

### Tracking Usage

- [creationDate](creationdate.md): The date the item was created.
- [lastUsedDate](lastuseddate.md): The date the item was last used.

# contentModificationDate (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

The date the item was last modified.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * contentModificationDate;
```

## See Also

### Tracking Usage

- [creationDate](creationdate.md): The date the item was created.
- [lastUsedDate](lastuseddate.md): The date the item was last used.
