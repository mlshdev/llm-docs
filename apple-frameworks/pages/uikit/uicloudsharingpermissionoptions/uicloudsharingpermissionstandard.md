> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingpermissionoptions/uicloudsharingpermissionstandard](https://developer.apple.com/documentation/uikit/uicloudsharingpermissionoptions/uicloudsharingpermissionstandard)

# UICloudSharingPermissionStandard

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The option that makes all user options available.

## Declaration

```objectivec
UICloudSharingPermissionStandard
```

<a id="Discussion"></a>

## Discussion

To tell the [UICloudSharingController](../uicloudsharingcontroller.md) instance to display all user options, set its [availablePermissions](../uicloudsharingcontroller/availablepermissions.md) property to [UICloudSharingPermissionStandard](uicloudsharingpermissionstandard.md).

The other [UICloudSharingPermissionOptions](../uicloudsharingcontroller/permissionoptions.md) options override this option, so there’s no need to combine the other options with [UICloudSharingPermissionStandard](uicloudsharingpermissionstandard.md).

## See Also

### Constants

- [UICloudSharingPermissionAllowPublic](../uicloudsharingcontroller/permissionoptions/allowpublic.md): The option that grants access to anyone who has the share link.
- [UICloudSharingPermissionAllowPrivate](../uicloudsharingcontroller/permissionoptions/allowprivate.md): The option that restricts access to people who have been invited.
- [UICloudSharingPermissionAllowReadOnly](../uicloudsharingcontroller/permissionoptions/allowreadonly.md): The option that gives participants read-only permission to the shared data.
- [UICloudSharingPermissionAllowReadWrite](../uicloudsharingcontroller/permissionoptions/allowreadwrite.md): The option that gives participants read/write permission to the shared data.
