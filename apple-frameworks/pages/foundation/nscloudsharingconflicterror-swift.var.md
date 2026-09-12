> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscloudsharingconflicterror-swift.var](https://developer.apple.com/documentation/foundation/nscloudsharingconflicterror-swift.var)

# NSCloudSharingConflictError

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

A conflict occurred during an attempt to save changes.

## Declaration

```swift
var NSCloudSharingConflictError: Int { get }
```

<a id="Discussion"></a>

## Discussion

This error occurs when a conflict is detected while trying to save changes to the [CKShare](../cloudkit/ckshare.md) or root [CKRecord](../cloudkit/ckrecord.md). Respond to this error by first fetching the server’s changes to the records, then either handle the conflict manually or present it, which will instruct the user to try the operation again.

## See Also

### iCloud Sharing Errors

- [NSCloudSharingErrorMaximum](nscloudsharingerrormaximum-swift.var.md): The end of the range of error codes reserved for cloud-sharing errors.
- [NSCloudSharingErrorMinimum](nscloudsharingerrorminimum-swift.var.md): The start of the range of error codes reserved for cloud-sharing errors.
- [NSCloudSharingNetworkFailureError](nscloudsharingnetworkfailureerror-swift.var.md): Sharing failed due to a network failure.
- [NSCloudSharingNoPermissionError](nscloudsharingnopermissionerror-swift.var.md): The current user doesn’t have permission to perform the requested actions.
- [NSCloudSharingOtherError](nscloudsharingothererror-swift.var.md): An otherwise unspecified cloud-sharing error occurred.
- [NSCloudSharingQuotaExceededError](nscloudsharingquotaexceedederror-swift.var.md): The user doesn’t have enough storage space available to share the requested items.
- [NSCloudSharingTooManyParticipantsError](nscloudsharingtoomanyparticipantserror-swift.var.md): Additional participants couldn’t be added to the share, because the limit was reached.
