> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcetransaction-c.class/initialsnapshot](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcetransaction-c.class/initialsnapshot)

# initialSnapshot

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The snapshot before the transaction occured.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDiffableDataSourceSnapshot<id,id> * initialSnapshot;
```

## See Also

### Accessing a transaction’s information

- [sectionTransactions](sectiontransactions.md): An array of section transactions for the transaction.
- [finalSnapshot](finalsnapshot.md): The snapshot after the transaction occured.
- [difference](difference.md): A collection of insertions and removals that describe the difference between initial and final snapshots.
