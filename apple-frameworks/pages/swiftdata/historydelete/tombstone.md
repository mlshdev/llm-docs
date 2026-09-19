> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftdata/historydelete/tombstone

# tombstone

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

The value the framework uses to represent information about data the Swift Data previously deleted from a model.

## Declaration

```swift
var tombstone: HistoryTombstone<Self.Model> { get }
```

## See Also

### History deletion properites

- [changeIdentifier](changeidentifier-swift.property.md): The change identifier of the delete operation.
- [changedPersistentIdentifier](changedpersistentidentifier.md): The changed persistent identifier of the delete operation.
- [transactionIdentifier](transactionidentifier-swift.property.md): The delete operation’s transaction identifier.
