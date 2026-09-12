> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengineaccountchangeevent/currentuser](https://developer.apple.com/documentation/cloudkit/cksyncengineaccountchangeevent/currentuser)

# currentUser

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The current iCloud account’s record identifier.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CKRecordID * currentUser;
```

<a id="discussion"></a>

## Discussion

If the user just signed in or switched accounts, this is the new user record ID. If the user signed out, this is `nil`.

## See Also

### Understanding the change

- [changeType](changetype.md): The iCloud account’s change type.
- [CKSyncEngineAccountChangeType](../cksyncengineaccountchangetype.md): Describes a change to the device’s iCloud account.
- [previousUser](previoususer.md): The previous iCloud account’s record identifier.
