> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historydelete/changeidentifier-swift.property](https://developer.apple.com/documentation/swiftdata/historydelete/changeidentifier-swift.property)

# changeIdentifier

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

The change identifier of the delete operation.

## Declaration

```swift
var changeIdentifier: Self.ChangeIdentifier { get }
```

## See Also

### History deletion properites

- [changedPersistentIdentifier](changedpersistentidentifier.md): The changed persistent identifier of the delete operation.
- [tombstone](tombstone.md): The value the framework uses to represent information about data the Swift Data previously deleted from a model.
- [transactionIdentifier](transactionidentifier-swift.property.md): The delete operation’s transaction identifier.
