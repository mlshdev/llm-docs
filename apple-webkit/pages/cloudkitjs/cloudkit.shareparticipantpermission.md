> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.shareparticipantpermission](https://developer.apple.com/documentation/cloudkitjs/cloudkit.shareparticipantpermission)

# CloudKit.ShareParticipantPermission

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Enumeration  
**Availability:** CloudKit JS 1.0+

The status of a participant accepting a share invitation.

## Declaration

```
interface CloudKit.ShareParticipantPermission {
	const String UNKNOWN;
	const String NONE;
	const String READ_ONLY;
	const String READ_WRITE;
};
```

## Topics

### Enumeration Cases

- [NONE](cloudkit.shareparticipantpermission/none.md): No permissions.
- [READ_ONLY](cloudkit.shareparticipantpermission/read_only.md): Read-only permissions.
- [READ_WRITE](cloudkit.shareparticipantpermission/read_write.md): Read-write permissions.
- [UNKNOWN](cloudkit.shareparticipantpermission/unknown.md): Unknown permissions.

## See Also

### Enumerations

- [CloudKit.AppleIDButtonTheme](cloudkit.appleidbuttontheme.md): Specifies the look of the Apple ID button.
- [CloudKit.DatabaseScope](cloudkit.databasescope.md): Available database scopes.
- [CloudKit.QueryFilterComparator](cloudkit.queryfiltercomparator.md): The comparators you use to create queries.
- [CloudKit.ReferenceAction](cloudkit.referenceaction.md): The delete action for a reference object.
- [CloudKit.ShareParticipantAcceptanceStatus](cloudkit.shareparticipantacceptancestatus.md): The status of a participant accepting a share invitation.
- [CloudKit.ShareParticipantType](cloudkit.shareparticipanttype.md): Determines whether a participant can modify the list of participants of a shared record.
- [CloudKit.SubscriptionType](cloudkit.subscriptiontype.md): The type of subscription.
