> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectiontransaction-c.class/sectionidentifier](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectiontransaction-c.class/sectionidentifier)

# sectionIdentifier

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The identifier of the section for the transaction.

## Declaration

```objectivec
@property (nonatomic, readonly) SectionIdentifierType sectionIdentifier;
```

## See Also

### Accessing a transaction’s information

- [initialSnapshot](initialsnapshot.md): The section snapshot before the transaction occured.
- [finalSnapshot](finalsnapshot.md): The section snapshot after the transaction occured.
- [difference](difference.md): A collection of insertions and removals that describe the difference between initial and final section snapshots.
