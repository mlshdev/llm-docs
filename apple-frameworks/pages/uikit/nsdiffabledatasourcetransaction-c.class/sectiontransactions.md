> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nsdiffabledatasourcetransaction-c.class/sectiontransactions

# sectionTransactions

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

An array of section transactions for the transaction.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSDiffableDataSourceSectionTransaction<id,id> *> * sectionTransactions;
```

## See Also

### Accessing a transaction’s information

- [initialSnapshot](initialsnapshot.md): The snapshot before the transaction occured.
- [finalSnapshot](finalsnapshot.md): The snapshot after the transaction occured.
- [difference](difference.md): A collection of insertions and removals that describe the difference between initial and final snapshots.
