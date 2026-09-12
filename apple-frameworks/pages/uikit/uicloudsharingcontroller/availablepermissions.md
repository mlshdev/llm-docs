> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontroller/availablepermissions](https://developer.apple.com/documentation/uikit/uicloudsharingcontroller/availablepermissions)

# availablePermissions (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A combination of permission and access options made available to the user when viewing screens presented by the CloudKit sharing controller.

## Declaration

```swift
var availablePermissions: UICloudSharingController.PermissionOptions { get set }
```

<a id="Discussion"></a>

## Discussion

The [UICloudSharingController](../uicloudsharingcontroller.md) user interface displays permission options to the user. The user selects the options based on how the data should be shared. For instance, the user can decide to share the data publicly or privately by selecting the corresponding option.

Setting the [availablePermissions](availablepermissions.md) property on [UICloudSharingController](../uicloudsharingcontroller.md) to one or more [UICloudSharingController.PermissionOptions](permissionoptions.md) options tells the controller which options to present to the user. If you want, for example, to let the user decide whether to share the data publicly or privately, you specify the [allowPublic](permissionoptions/allowpublic.md) and [allowPrivate](permissionoptions/allowprivate.md) options for [availablePermissions](availablepermissions.md). This tells the controller to display both options to the user.

Specifying no options for [availablePermissions](availablepermissions.md) tells [UICloudSharingController](../uicloudsharingcontroller.md) to display all options to the user.

**Swift**

```swift
// Allow only the invited participants and read/write permission options.
cloudSharingController.availablePermissions = [.allowPrivate, .allowReadWrite]
```

**Objective-C**

```objc
// Allow only the invited participants and read/write permission options.
[cloudSharingController setAvailablePermissions:UICloudSharingPermissionAllowPrivate | UICloudSharingPermissionAllowReadWrite];
```

<a id="Display-groupings"></a>

### Display groupings

The [UICloudSharingController](../uicloudsharingcontroller.md) displays the permission options to the user based on the options set in the [availablePermissions](availablepermissions.md) property. The user interface displays the options in two groups, access options group and permission options group. The [allowPublic](permissionoptions/allowpublic.md) and [allowPrivate](permissionoptions/allowprivate.md) options control the display of the access options group, while the [allowReadOnly](permissionoptions/allowreadonly.md) and [allowReadWrite](permissionoptions/allowreadwrite.md) options control the display of the permission options group.

<a id="Complementary-options"></a>

### Complementary options

The [allowPrivate](permissionoptions/allowprivate.md) and [allowPublic](permissionoptions/allowpublic.md) options are complementary. If you exclude one, the access options group is omitted from the [UICloudSharingController](../uicloudsharingcontroller.md) user interface, and the [share](share.md) access setting defaults to the included option. This prevents the user from changing the access rights to the share. For instance, to always force a private share, you include the [allowPrivate](permissionoptions/allowprivate.md) access option while excluding [allowPublic](permissionoptions/allowpublic.md) when setting the [availablePermissions](availablepermissions.md) property. The controller sets the share’s access rights to private and removes the access options group from the user interface, preventing the user from changing the setting.

Similarly, [allowReadOnly](permissionoptions/allowreadonly.md) and [allowReadWrite](permissionoptions/allowreadwrite.md) complement each other. Excluding one removes the permission options group from the user interface, and the [share](share.md) permission setting defaults to the included [UICloudSharingController.PermissionOptions](permissionoptions.md) option.

## See Also

### Configuring the permissions

- [UICloudSharingController.PermissionOptions](permissionoptions.md): A set of options that determine the permission options available to the user when viewing the Cloud sharing controller screens.

# availablePermissions (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A combination of permission and access options made available to the user when viewing screens presented by the CloudKit sharing controller.

## Declaration

```objectivec
@property (nonatomic) UICloudSharingPermissionOptions availablePermissions;
```

<a id="Discussion"></a>

## Discussion

The [UICloudSharingController](../uicloudsharingcontroller.md) user interface displays permission options to the user. The user selects the options based on how the data should be shared. For instance, the user can decide to share the data publicly or privately by selecting the corresponding option.

Setting the [availablePermissions](availablepermissions.md) property on [UICloudSharingController](../uicloudsharingcontroller.md) to one or more [UICloudSharingPermissionOptions](permissionoptions.md) options tells the controller which options to present to the user. If you want, for example, to let the user decide whether to share the data publicly or privately, you specify the [UICloudSharingPermissionAllowPublic](permissionoptions/allowpublic.md) and [UICloudSharingPermissionAllowPrivate](permissionoptions/allowprivate.md) options for [availablePermissions](availablepermissions.md). This tells the controller to display both options to the user.

Specifying no options for [availablePermissions](availablepermissions.md) tells [UICloudSharingController](../uicloudsharingcontroller.md) to display all options to the user.

**Swift**

```swift
// Allow only the invited participants and read/write permission options.
cloudSharingController.availablePermissions = [.allowPrivate, .allowReadWrite]
```

**Objective-C**

```objc
// Allow only the invited participants and read/write permission options.
[cloudSharingController setAvailablePermissions:UICloudSharingPermissionAllowPrivate | UICloudSharingPermissionAllowReadWrite];
```

<a id="Display-groupings"></a>

### Display groupings

The [UICloudSharingController](../uicloudsharingcontroller.md) displays the permission options to the user based on the options set in the [availablePermissions](availablepermissions.md) property. The user interface displays the options in two groups, access options group and permission options group. The [UICloudSharingPermissionAllowPublic](permissionoptions/allowpublic.md) and [UICloudSharingPermissionAllowPrivate](permissionoptions/allowprivate.md) options control the display of the access options group, while the [UICloudSharingPermissionAllowReadOnly](permissionoptions/allowreadonly.md) and [UICloudSharingPermissionAllowReadWrite](permissionoptions/allowreadwrite.md) options control the display of the permission options group.

<a id="Complementary-options"></a>

### Complementary options

The [UICloudSharingPermissionAllowPrivate](permissionoptions/allowprivate.md) and [UICloudSharingPermissionAllowPublic](permissionoptions/allowpublic.md) options are complementary. If you exclude one, the access options group is omitted from the [UICloudSharingController](../uicloudsharingcontroller.md) user interface, and the [share](share.md) access setting defaults to the included option. This prevents the user from changing the access rights to the share. For instance, to always force a private share, you include the [UICloudSharingPermissionAllowPrivate](permissionoptions/allowprivate.md) access option while excluding [UICloudSharingPermissionAllowPublic](permissionoptions/allowpublic.md) when setting the [availablePermissions](availablepermissions.md) property. The controller sets the share’s access rights to private and removes the access options group from the user interface, preventing the user from changing the setting.

Similarly, [UICloudSharingPermissionAllowReadOnly](permissionoptions/allowreadonly.md) and [UICloudSharingPermissionAllowReadWrite](permissionoptions/allowreadwrite.md) complement each other. Excluding one removes the permission options group from the user interface, and the [share](share.md) permission setting defaults to the included [UICloudSharingPermissionOptions](permissionoptions.md) option.

## See Also

### Configuring the permissions

- [UICloudSharingPermissionOptions](permissionoptions.md): A set of options that determine the permission options available to the user when viewing the Cloud sharing controller screens.
