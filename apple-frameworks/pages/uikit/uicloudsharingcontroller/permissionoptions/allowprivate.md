> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontroller/permissionoptions/allowprivate](https://developer.apple.com/documentation/uikit/uicloudsharingcontroller/permissionoptions/allowprivate)

# allowPrivate (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The option that restricts access to people who have been invited.

## Declaration

```swift
static var allowPrivate: UICloudSharingController.PermissionOptions { get }
```

<a id="Discussion"></a>

## Discussion

To give the user the option to limit access to people who have been invited, include the [allowPrivate](allowprivate.md) option when setting the [availablePermissions](../availablepermissions.md) property on the [UICloudSharingController](../../uicloudsharingcontroller.md) instance.

> **Note**

>  When inviting someone, the user must provide that person’s email address or phone number. This is how the person is identified when accepting the invitation.

## See Also

### Constants

- [allowPublic](allowpublic.md): The option that grants access to anyone who has the share link.
- [allowReadOnly](allowreadonly.md): The option that gives participants read-only permission to the shared data.
- [allowReadWrite](allowreadwrite.md): The option that gives participants read/write permission to the shared data.

# UICloudSharingPermissionAllowPrivate (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The option that restricts access to people who have been invited.

## Declaration

```objectivec
UICloudSharingPermissionAllowPrivate
```

<a id="Discussion"></a>

## Discussion

To give the user the option to limit access to people who have been invited, include the [UICloudSharingPermissionAllowPrivate](allowprivate.md) option when setting the [availablePermissions](../availablepermissions.md) property on the [UICloudSharingController](../../uicloudsharingcontroller.md) instance.

> **Note**

>  When inviting someone, the user must provide that person’s email address or phone number. This is how the person is identified when accepting the invitation.

## See Also

### Constants

- [UICloudSharingPermissionStandard](../../uicloudsharingpermissionoptions/uicloudsharingpermissionstandard.md): The option that makes all user options available.
- [UICloudSharingPermissionAllowPublic](allowpublic.md): The option that grants access to anyone who has the share link.
- [UICloudSharingPermissionAllowReadOnly](allowreadonly.md): The option that gives participants read-only permission to the shared data.
- [UICloudSharingPermissionAllowReadWrite](allowreadwrite.md): The option that gives participants read/write permission to the shared data.
