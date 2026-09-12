> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcetransaction-swift.struct/finalsnapshot](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcetransaction-swift.struct/finalsnapshot)

# finalSnapshot

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The snapshot after the transaction occured.

## Declaration

```swift
var finalSnapshot: NSDiffableDataSourceSnapshot<SectionIdentifierType, ItemIdentifierType> { get }
```

## See Also

### Accessing a transaction’s information

- [sectionTransactions](sectiontransactions.md): An array of section transactions for the transaction.
- [initialSnapshot](initialsnapshot.md): The snapshot before the transaction occured.
- [difference](difference.md): A collection of insertions and removals that describe the difference between initial and final snapshots.
