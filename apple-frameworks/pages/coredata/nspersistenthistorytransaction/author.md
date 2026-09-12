> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorytransaction/author](https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/author)

# author (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A granular description of the context that made the persistent history change, if available.

## Declaration

```swift
var author: String? { get }
```

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

<a id="Discussion"></a>

## Discussion

This property has a value if the managed object context set a [transactionAuthor](../nsmanagedobjectcontext/transactionauthor.md) before the save.

## See Also

### Inspecting Transaction Details

- [bundleID](bundleid.md): The originating bundle’s identifier.
- [changes](changes.md): The array of persistent history changes.
- [contextName](contextname.md): The originating context’s name.
- [processID](processid.md): The originating process’s identifier.
- [storeID](storeid.md): The originating store’s identifier.
- [timestamp](timestamp.md): The date of the persistent history change.
- [token](token.md): The token that represents this transaction in the persistent history.
- [transactionNumber](transactionnumber.md): The transaction’s numeric identifier.

# author (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A granular description of the context that made the persistent history change, if available.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * author;
```

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

<a id="Discussion"></a>

## Discussion

This property has a value if the managed object context set a [transactionAuthor](../nsmanagedobjectcontext/transactionauthor.md) before the save.

## See Also

### Inspecting Transaction Details

- [bundleID](bundleid.md): The originating bundle’s identifier.
- [changes](changes.md): The array of persistent history changes.
- [contextName](contextname.md): The originating context’s name.
- [processID](processid.md): The originating process’s identifier.
- [storeID](storeid.md): The originating store’s identifier.
- [timestamp](timestamp.md): The date of the persistent history change.
- [token](token.md): The token that represents this transaction in the persistent history.
- [transactionNumber](transactionnumber.md): The transaction’s numeric identifier.
