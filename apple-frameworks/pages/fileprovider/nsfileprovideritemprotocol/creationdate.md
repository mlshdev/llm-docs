> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/creationdate

# creationDate (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

The date the item was created.

## Declaration

```swift
optional var creationDate: Date? { get }
```

## See Also

### Tracking Usage

- [contentModificationDate](contentmodificationdate.md): The date the item was last modified.
- [lastUsedDate](lastuseddate.md): The date the item was last used.

# creationDate (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

The date the item was created.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * creationDate;
```

## See Also

### Tracking Usage

- [contentModificationDate](contentmodificationdate.md): The date the item was last modified.
- [lastUsedDate](lastuseddate.md): The date the item was last used.
