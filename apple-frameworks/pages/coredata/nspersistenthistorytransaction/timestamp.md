> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorytransaction/timestamp](https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/timestamp)

# timestamp (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The date of the persistent history change.

## Declaration

```swift
var timestamp: Date { get }
```

## See Also

### Inspecting Transaction Details

- [author](author.md): A granular description of the context that made the persistent history change, if available.
- [bundleID](bundleid.md): The originating bundle’s identifier.
- [changes](changes.md): The array of persistent history changes.
- [contextName](contextname.md): The originating context’s name.
- [processID](processid.md): The originating process’s identifier.
- [storeID](storeid.md): The originating store’s identifier.
- [token](token.md): The token that represents this transaction in the persistent history.
- [transactionNumber](transactionnumber.md): The transaction’s numeric identifier.

# timestamp (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The date of the persistent history change.

## Declaration

```objectivec
@property (copy, readonly) NSDate * timestamp;
```

## See Also

### Inspecting Transaction Details

- [author](author.md): A granular description of the context that made the persistent history change, if available.
- [bundleID](bundleid.md): The originating bundle’s identifier.
- [changes](changes.md): The array of persistent history changes.
- [contextName](contextname.md): The originating context’s name.
- [processID](processid.md): The originating process’s identifier.
- [storeID](storeid.md): The originating store’s identifier.
- [token](token.md): The token that represents this transaction in the persistent history.
- [transactionNumber](transactionnumber.md): The transaction’s numeric identifier.
