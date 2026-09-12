> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengineevent/accountchangeevent](https://developer.apple.com/documentation/cloudkit/cksyncengineevent/accountchangeevent)

# accountChangeEvent

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The event downcast to the subclass that represents a change to the device’s iCloud account.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CKSyncEngineAccountChangeEvent * accountChangeEvent;
```

## See Also

### Accessing account changes

- [CKSyncEngineAccountChangeEvent](../cksyncengineaccountchangeevent.md): The user signed in or out of their account.
