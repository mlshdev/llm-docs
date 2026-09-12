> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontroller/permissionoptions/allowreadonly](https://developer.apple.com/documentation/uikit/uicloudsharingcontroller/permissionoptions/allowreadonly)

# allowReadOnly (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The option that gives participants read-only permission to the shared data.

## Declaration

```swift
static var allowReadOnly: UICloudSharingController.PermissionOptions { get }
```

<a id="Discussion"></a>

## Discussion

To give the user the option to prevent other people from editing the shared data, include the [allowReadOnly](allowreadonly.md) option when setting the [availablePermissions](../availablepermissions.md) property on the [UICloudSharingController](../../uicloudsharingcontroller.md) instance.

## See Also

### Constants

- [allowPublic](allowpublic.md): The option that grants access to anyone who has the share link.
- [allowPrivate](allowprivate.md): The option that restricts access to people who have been invited.
- [allowReadWrite](allowreadwrite.md): The option that gives participants read/write permission to the shared data.

# UICloudSharingPermissionAllowReadOnly (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The option that gives participants read-only permission to the shared data.

## Declaration

```objectivec
UICloudSharingPermissionAllowReadOnly
```

<a id="Discussion"></a>

## Discussion

To give the user the option to prevent other people from editing the shared data, include the [UICloudSharingPermissionAllowReadOnly](allowreadonly.md) option when setting the [availablePermissions](../availablepermissions.md) property on the [UICloudSharingController](../../uicloudsharingcontroller.md) instance.

## See Also

### Constants

- [UICloudSharingPermissionStandard](../../uicloudsharingpermissionoptions/uicloudsharingpermissionstandard.md): The option that makes all user options available.
- [UICloudSharingPermissionAllowPublic](allowpublic.md): The option that grants access to anyone who has the share link.
- [UICloudSharingPermissionAllowPrivate](allowprivate.md): The option that restricts access to people who have been invited.
- [UICloudSharingPermissionAllowReadWrite](allowreadwrite.md): The option that gives participants read/write permission to the shared data.
