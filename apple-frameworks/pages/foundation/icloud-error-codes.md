> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/icloud-error-codes](https://developer.apple.com/documentation/foundation/icloud-error-codes)

# iCloud Error Codes (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Error codes to expect when an iCloud-related error occurs.

<a id="overview"></a>

## Overview

These codes are associated with the [ubiquitousItemDownloadingErrorKey](urlresourcekey/ubiquitousitemdownloadingerrorkey.md) on an [NSURL](nsurl.md) object when an iCloud-related error occurs.

## Topics

### General iCloud File Errors

- [NSUbiquitousFileErrorMinimum](nsubiquitousfileerrorminimum-swift.var.md): The minimum error code value that represents an iCloud error.
- [NSUbiquitousFileUnavailableError](nsubiquitousfileunavailableerror-swift.var.md): The item has not been uploaded to iCloud by another device yet.
- [NSUbiquitousFileNotUploadedDueToQuotaError](nsubiquitousfilenotuploadedduetoquotaerror-swift.var.md): The item could not be uploaded to iCloud because it would make the account go over its quota.
- [NSUbiquitousFileUbiquityServerNotAvailable](nsubiquitousfileubiquityservernotavailable-swift.var.md): A failure to connect to the iCloud servers.
- [NSUbiquitousFileErrorMaximum](nsubiquitousfileerrormaximum-swift.var.md): The maximum error code value that represents an iCloud error.

### iCloud Sharing Errors

- [NSCloudSharingConflictError](nscloudsharingconflicterror-swift.var.md): A conflict occurred during an attempt to save changes.
- [NSCloudSharingErrorMaximum](nscloudsharingerrormaximum-swift.var.md): The end of the range of error codes reserved for cloud-sharing errors.
- [NSCloudSharingErrorMinimum](nscloudsharingerrorminimum-swift.var.md): The start of the range of error codes reserved for cloud-sharing errors.
- [NSCloudSharingNetworkFailureError](nscloudsharingnetworkfailureerror-swift.var.md): Sharing failed due to a network failure.
- [NSCloudSharingNoPermissionError](nscloudsharingnopermissionerror-swift.var.md): The current user doesn’t have permission to perform the requested actions.
- [NSCloudSharingOtherError](nscloudsharingothererror-swift.var.md): An otherwise unspecified cloud-sharing error occurred.
- [NSCloudSharingQuotaExceededError](nscloudsharingquotaexceedederror-swift.var.md): The user doesn’t have enough storage space available to share the requested items.
- [NSCloudSharingTooManyParticipantsError](nscloudsharingtoomanyparticipantserror-swift.var.md): Additional participants couldn’t be added to the share, because the limit was reached.

# iCloud Error Codes (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Error codes to expect when an iCloud-related error occurs.

<a id="overview"></a>

## Overview

These codes are associated with the [NSURLUbiquitousItemDownloadingErrorKey](urlresourcekey/ubiquitousitemdownloadingerrorkey.md) on an [NSURL](nsurl.md) object when an iCloud-related error occurs.

## Topics

### General iCloud File Errors

- [NSUbiquitousFileErrorMinimum](nsubiquitousfileerrorminimum-c.enum.case.md): The minimum error code value that represents an iCloud error.
- [NSUbiquitousFileUnavailableError](nsubiquitousfileunavailableerror-c.enum.case.md): The item has not been uploaded to iCloud by another device yet.
- [NSUbiquitousFileNotUploadedDueToQuotaError](nsubiquitousfilenotuploadedduetoquotaerror-c.enum.case.md): The item could not be uploaded to iCloud because it would make the account go over its quota.
- [NSUbiquitousFileUbiquityServerNotAvailable](nsubiquitousfileubiquityservernotavailable-c.enum.case.md): A failure to connect to the iCloud servers.
- [NSUbiquitousFileErrorMaximum](nsubiquitousfileerrormaximum-c.enum.case.md): The maximum error code value that represents an iCloud error.

### iCloud Sharing Errors

- [NSCloudSharingConflictError](nscloudsharingconflicterror-c.enum.case.md): A conflict occurred during an attempt to save changes.
- [NSCloudSharingErrorMaximum](nscloudsharingerrormaximum-c.enum.case.md): The end of the range of error codes reserved for cloud-sharing errors.
- [NSCloudSharingErrorMinimum](nscloudsharingerrorminimum-c.enum.case.md): The start of the range of error codes reserved for cloud-sharing errors.
- [NSCloudSharingNetworkFailureError](nscloudsharingnetworkfailureerror-c.enum.case.md): Sharing failed due to a network failure.
- [NSCloudSharingNoPermissionError](nscloudsharingnopermissionerror-c.enum.case.md): The current user doesn’t have permission to perform the requested actions.
- [NSCloudSharingOtherError](nscloudsharingothererror-c.enum.case.md): An otherwise unspecified cloud-sharing error occurred.
- [NSCloudSharingQuotaExceededError](nscloudsharingquotaexceedederror-c.enum.case.md): The user doesn’t have enough storage space available to share the requested items.
- [NSCloudSharingTooManyParticipantsError](nscloudsharingtoomanyparticipantserror-c.enum.case.md): Additional participants couldn’t be added to the share, because the limit was reached.
