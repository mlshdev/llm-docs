> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectiontransaction-c.class/difference](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectiontransaction-c.class/difference)

# difference

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A collection of insertions and removals that describe the difference between initial and final section snapshots.

## Declaration

```objectivec
@property (nonatomic, readonly) NSOrderedCollectionDifference<id> * difference;
```

## See Also

### Accessing a transaction’s information

- [sectionIdentifier](sectionidentifier.md): The identifier of the section for the transaction.
- [initialSnapshot](initialsnapshot.md): The section snapshot before the transaction occured.
- [finalSnapshot](finalsnapshot.md): The section snapshot after the transaction occured.
