> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorytransaction/processid](https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/processid)

# processID (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The originating process’s identifier.

## Declaration

```swift
var processID: String { get }
```

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

## See Also

### Inspecting Transaction Details

- [author](author.md): A granular description of the context that made the persistent history change, if available.
- [bundleID](bundleid.md): The originating bundle’s identifier.
- [changes](changes.md): The array of persistent history changes.
- [contextName](contextname.md): The originating context’s name.
- [storeID](storeid.md): The originating store’s identifier.
- [timestamp](timestamp.md): The date of the persistent history change.
- [token](token.md): The token that represents this transaction in the persistent history.
- [transactionNumber](transactionnumber.md): The transaction’s numeric identifier.

# processID (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The originating process’s identifier.

## Declaration

```objectivec
@property (copy, readonly) NSString * processID;
```

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

## See Also

### Inspecting Transaction Details

- [author](author.md): A granular description of the context that made the persistent history change, if available.
- [bundleID](bundleid.md): The originating bundle’s identifier.
- [changes](changes.md): The array of persistent history changes.
- [contextName](contextname.md): The originating context’s name.
- [storeID](storeid.md): The originating store’s identifier.
- [timestamp](timestamp.md): The date of the persistent history change.
- [token](token.md): The token that represents this transaction in the persistent history.
- [transactionNumber](transactionnumber.md): The transaction’s numeric identifier.
