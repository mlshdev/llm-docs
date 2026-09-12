> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksystemsharinguiobserver/systemsharinguididsaveshareblock-39zlv](https://developer.apple.com/documentation/cloudkit/cksystemsharinguiobserver/systemsharinguididsaveshareblock-39zlv)

# systemSharingUIDidSaveShareBlock

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A callback block the system invokes after the success or failure of a share save by the system sharing UI.

## Declaration

```objectivec
@property (copy, nullable) void (^)(CKRecordID *, CKShare *, NSError *) systemSharingUIDidSaveShareBlock;
```

<a id="discussion"></a>

## Discussion

Following a successful share save by the system sharing UI in the provided [CKContainer](../ckcontainer.md), the system invokes this callback with a `nonnull` [CKRecordID](../ckrecord/id.md), a `nonnull` share, and a `nil` error.

If a save failure occurs due to a per-item error like [CKErrorServerRecordChanged](../ckerror/code/serverrecordchanged.md), the system invokes this callback with a `nonnull` [CKRecordID](../ckrecord/id.md), a `nil` share, and a `nonnull` error.

Each [CKSystemSharingUIObserver](../cksystemsharinguiobserver.md) instance has a private serial queue. The system uses this queue for all callback block invocations.

## See Also

### Accessing sharing blocks

- [systemSharingUIDidStopSharingBlock](systemsharinguididstopsharingblock-4g5bn.md): A callback block the system invokes after the success or failure of a share delete by the system sharing UI.
