> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengineaccountchangeevent/previoususer](https://developer.apple.com/documentation/cloudkit/cksyncengineaccountchangeevent/previoususer)

# previousUser

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The previous iCloud account’s record identifier.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CKRecordID * previousUser;
```

<a id="discussion"></a>

## Discussion

If the user just signed in, this is `nil`. If the user signed out or switched accounts, this is the old account’s user record ID.

## See Also

### Understanding the change

- [changeType](changetype.md): The iCloud account’s change type.
- [CKSyncEngineAccountChangeType](../cksyncengineaccountchangetype.md): Describes a change to the device’s iCloud account.
- [currentUser](currentuser.md): The current iCloud account’s record identifier.
