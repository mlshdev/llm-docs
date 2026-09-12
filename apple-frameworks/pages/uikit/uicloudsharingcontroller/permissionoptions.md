> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontroller/permissionoptions](https://developer.apple.com/documentation/uikit/uicloudsharingcontroller/permissionoptions)

# UICloudSharingController.PermissionOptions (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of options that determine the permission options available to the user when viewing the Cloud sharing controller screens.

## Declaration

```swift
struct PermissionOptions
```

<a id="overview"></a>

## Overview

These options are used when setting the [availablePermissions](availablepermissions.md) property on the [UICloudSharingController](../uicloudsharingcontroller.md) instance. This property determines which permission options are presented to the user in the controller’s user interface.

## Topics

### Constants

- [allowPublic](permissionoptions/allowpublic.md): The option that grants access to anyone who has the share link.
- [allowPrivate](permissionoptions/allowprivate.md): The option that restricts access to people who have been invited.
- [allowReadOnly](permissionoptions/allowreadonly.md): The option that gives participants read-only permission to the shared data.
- [allowReadWrite](permissionoptions/allowreadwrite.md): The option that gives participants read/write permission to the shared data.

### Initializers

- [init(rawValue:)](permissionoptions/init%28rawvalue_%29.md): Creates a new permission option set with the given raw integer value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Configuring the permissions

- [availablePermissions](availablepermissions.md): A combination of permission and access options made available to the user when viewing screens presented by the CloudKit sharing controller.

# UICloudSharingPermissionOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of options that determine the permission options available to the user when viewing the Cloud sharing controller screens.

## Declaration

```objectivec
enum UICloudSharingPermissionOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

These options are used when setting the [availablePermissions](availablepermissions.md) property on the [UICloudSharingController](../uicloudsharingcontroller.md) instance. This property determines which permission options are presented to the user in the controller’s user interface.

## Topics

### Constants

- [UICloudSharingPermissionStandard](../uicloudsharingpermissionoptions/uicloudsharingpermissionstandard.md): The option that makes all user options available.
- [UICloudSharingPermissionAllowPublic](permissionoptions/allowpublic.md): The option that grants access to anyone who has the share link.
- [UICloudSharingPermissionAllowPrivate](permissionoptions/allowprivate.md): The option that restricts access to people who have been invited.
- [UICloudSharingPermissionAllowReadOnly](permissionoptions/allowreadonly.md): The option that gives participants read-only permission to the shared data.
- [UICloudSharingPermissionAllowReadWrite](permissionoptions/allowreadwrite.md): The option that gives participants read/write permission to the shared data.

## See Also

### Configuring the permissions

- [availablePermissions](availablepermissions.md): A combination of permission and access options made available to the user when viewing screens presented by the CloudKit sharing controller.
