> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksystemsharinguiobserver/systemsharinguididstopsharingblock-4g5bn](https://developer.apple.com/documentation/cloudkit/cksystemsharinguiobserver/systemsharinguididstopsharingblock-4g5bn)

# systemSharingUIDidStopSharingBlock

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A callback block the system invokes after the success or failure of a share delete by the system sharing UI.

## Declaration

```objectivec
@property (copy, nullable) void (^)(CKRecordID *, NSError *) systemSharingUIDidStopSharingBlock;
```

<a id="discussion"></a>

## Discussion

The system invokes this block on the success or failure of a [CKShare](../ckshare.md) delete when the user decides to stop sharing through the system sharing UI.

Each [CKSystemSharingUIObserver](../cksystemsharinguiobserver.md) instance has a private serial queue. The system uses this queue for all callback block invocations.

## See Also

### Accessing sharing blocks

- [systemSharingUIDidSaveShareBlock](systemsharinguididsaveshareblock-39zlv.md): A callback block the system invokes after the success or failure of a share save by the system sharing UI.
