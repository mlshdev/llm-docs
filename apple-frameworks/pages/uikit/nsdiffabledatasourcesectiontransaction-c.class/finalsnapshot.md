> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectiontransaction-c.class/finalsnapshot](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectiontransaction-c.class/finalsnapshot)

# finalSnapshot

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The section snapshot after the transaction occured.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDiffableDataSourceSectionSnapshot<id> * finalSnapshot;
```

## See Also

### Accessing a transaction’s information

- [sectionIdentifier](sectionidentifier.md): The identifier of the section for the transaction.
- [initialSnapshot](initialsnapshot.md): The section snapshot before the transaction occured.
- [difference](difference.md): A collection of insertions and removals that describe the difference between initial and final section snapshots.
