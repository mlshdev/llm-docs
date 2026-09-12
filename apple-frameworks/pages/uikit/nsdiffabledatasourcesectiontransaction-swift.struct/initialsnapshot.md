> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectiontransaction-swift.struct/initialsnapshot](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectiontransaction-swift.struct/initialsnapshot)

# initialSnapshot

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The section snapshot before the transaction occured.

## Declaration

```swift
var initialSnapshot: NSDiffableDataSourceSectionSnapshot<ItemIdentifierType> { get }
```

## See Also

### Accessing a transaction’s information

- [sectionIdentifier](sectionidentifier.md): The identifier of the section for the transaction.
- [finalSnapshot](finalsnapshot.md): The section snapshot after the transaction occured.
- [difference](difference.md): A collection of insertions and removals that describe the difference between initial and final section snapshots.
