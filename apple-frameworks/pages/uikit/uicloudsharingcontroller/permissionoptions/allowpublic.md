> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontroller/permissionoptions/allowpublic](https://developer.apple.com/documentation/uikit/uicloudsharingcontroller/permissionoptions/allowpublic)

# allowPublic (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The option that grants access to anyone who has the share link.

## Declaration

```swift
static var allowPublic: UICloudSharingController.PermissionOptions { get }
```

<a id="Discussion"></a>

## Discussion

To give the user the option to allow anyone to access the shared data, include the [allowPublic](allowpublic.md) option when setting the [availablePermissions](../availablepermissions.md) property on the [UICloudSharingController](../../uicloudsharingcontroller.md) instance.

## See Also

### Constants

- [allowPrivate](allowprivate.md): The option that restricts access to people who have been invited.
- [allowReadOnly](allowreadonly.md): The option that gives participants read-only permission to the shared data.
- [allowReadWrite](allowreadwrite.md): The option that gives participants read/write permission to the shared data.

# UICloudSharingPermissionAllowPublic (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The option that grants access to anyone who has the share link.

## Declaration

```objectivec
UICloudSharingPermissionAllowPublic
```

<a id="Discussion"></a>

## Discussion

To give the user the option to allow anyone to access the shared data, include the [UICloudSharingPermissionAllowPublic](allowpublic.md) option when setting the [availablePermissions](../availablepermissions.md) property on the [UICloudSharingController](../../uicloudsharingcontroller.md) instance.

## See Also

### Constants

- [UICloudSharingPermissionStandard](../../uicloudsharingpermissionoptions/uicloudsharingpermissionstandard.md): The option that makes all user options available.
- [UICloudSharingPermissionAllowPrivate](allowprivate.md): The option that restricts access to people who have been invited.
- [UICloudSharingPermissionAllowReadOnly](allowreadonly.md): The option that gives participants read-only permission to the shared data.
- [UICloudSharingPermissionAllowReadWrite](allowreadwrite.md): The option that gives participants read/write permission to the shared data.
