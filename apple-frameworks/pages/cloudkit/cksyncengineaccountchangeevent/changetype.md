> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengineaccountchangeevent/changetype](https://developer.apple.com/documentation/cloudkit/cksyncengineaccountchangeevent/changetype)

# changeType

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The iCloud account’s change type.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CKSyncEngineAccountChangeType changeType;
```

## See Also

### Understanding the change

- [CKSyncEngineAccountChangeType](../cksyncengineaccountchangetype.md): Describes a change to the device’s iCloud account.
- [previousUser](previoususer.md): The previous iCloud account’s record identifier.
- [currentUser](currentuser.md): The current iCloud account’s record identifier.
