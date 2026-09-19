> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/lastuseddate

# lastUsedDate (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

The date the item was last used.

## Declaration

```swift
optional var lastUsedDate: Date? { get }
```

## See Also

### Tracking Usage

- [contentModificationDate](contentmodificationdate.md): The date the item was last modified.
- [creationDate](creationdate.md): The date the item was created.

# lastUsedDate (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

The date the item was last used.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * lastUsedDate;
```

## See Also

### Tracking Usage

- [contentModificationDate](contentmodificationdate.md): The date the item was last modified.
- [creationDate](creationdate.md): The date the item was created.
