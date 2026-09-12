> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimutableusernotificationaction/isauthenticationrequired](https://developer.apple.com/documentation/uikit/uimutableusernotificationaction/isauthenticationrequired)

# isAuthenticationRequired (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value indicating whether the user must unlock the device before the action is performed.

> For more information, see [UIMutableUserNotificationAction](../uimutableusernotificationaction.md).

## Declaration

```swift
var isAuthenticationRequired: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is ignored and treated as a value of [true](https://developer.apple.com/documentation/swift/true) when the value of the [activationMode](activationmode.md) property is set to [UIMutableUserNotificationAction](../uimutableusernotificationaction.md).

If your app uses data protection to encrypt data on disk, consider the data needs of the corresponding action before setting this property to [false](https://developer.apple.com/documentation/swift/false). For many data protection classes, data remains encrypted and unavailable while the device is locked. If your app needs to access encrypted data to perform a task, you likely need to set this property to [true](https://developer.apple.com/documentation/swift/true) to ensure that the data is accessible.

## See Also

### Configuring the action’s behavior

- [activationMode](activationmode.md): Deprecated. The mode in which to run the app when the action is performed.
- [isDestructive](isdestructive.md): Deprecated. A Boolean value indicating whether the action is destructive.
- [behavior](behavior.md): Deprecated. The custom behavior (if any) that the action supports.
- [parameters](parameters.md): Deprecated. A dictionary of additional parameters to include with the action.

# authenticationRequired (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value indicating whether the user must unlock the device before the action is performed.

> For more information, see [UIMutableUserNotificationAction](../uimutableusernotificationaction.md).

## Declaration

```objectivec
@property (nonatomic, assign, getter=isAuthenticationRequired) BOOL authenticationRequired;
```

<a id="Discussion"></a>

## Discussion

The value of this property is ignored and treated as a value of [true](https://developer.apple.com/documentation/swift/true) when the value of the [activationMode](activationmode.md) property is set to [UIMutableUserNotificationAction](../uimutableusernotificationaction.md).

If your app uses data protection to encrypt data on disk, consider the data needs of the corresponding action before setting this property to [false](https://developer.apple.com/documentation/swift/false). For many data protection classes, data remains encrypted and unavailable while the device is locked. If your app needs to access encrypted data to perform a task, you likely need to set this property to [true](https://developer.apple.com/documentation/swift/true) to ensure that the data is accessible.

## See Also

### Configuring the action’s behavior

- [activationMode](activationmode.md): Deprecated. The mode in which to run the app when the action is performed.
- [destructive](isdestructive.md): Deprecated. A Boolean value indicating whether the action is destructive.
- [behavior](behavior.md): Deprecated. The custom behavior (if any) that the action supports.
- [parameters](parameters.md): Deprecated. A dictionary of additional parameters to include with the action.
