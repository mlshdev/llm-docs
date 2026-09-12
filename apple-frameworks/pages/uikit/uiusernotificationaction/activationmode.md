> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiusernotificationaction/activationmode](https://developer.apple.com/documentation/uikit/uiusernotificationaction/activationmode)

# activationMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The mode in which to run the app when the action is performed.

> For more information, see [UIUserNotificationAction](../uiusernotificationaction.md).

## Declaration

```swift
var activationMode: UIUserNotificationActivationMode { get }
```

<a id="Discussion"></a>

## Discussion

If the value in this property is [UIUserNotificationActivationMode.foreground](../uiusernotificationactivationmode/foreground.md), the value of the [isAuthenticationRequired](isauthenticationrequired.md) property is assumed to be [true](https://developer.apple.com/documentation/swift/true) regardless of its actual value.

## See Also

### Getting the action’s configuration

- [isAuthenticationRequired](isauthenticationrequired.md): Deprecated. A Boolean value indicating whether the user must unlock the device before the action is performed.
- [isDestructive](isdestructive.md): Deprecated. A Boolean value indicating whether the action is destructive.
- [behavior](behavior.md): Deprecated. The custom behavior (if any) that the action supports.
- [parameters](parameters.md): Deprecated. A dictionary of additional parameters to include with the action.

# activationMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The mode in which to run the app when the action is performed.

> For more information, see [UIUserNotificationAction](../uiusernotificationaction.md).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) UIUserNotificationActivationMode activationMode;
```

<a id="Discussion"></a>

## Discussion

If the value in this property is [UIUserNotificationActivationModeForeground](../uiusernotificationactivationmode/foreground.md), the value of the [authenticationRequired](isauthenticationrequired.md) property is assumed to be [true](https://developer.apple.com/documentation/swift/true) regardless of its actual value.

## See Also

### Getting the action’s configuration

- [authenticationRequired](isauthenticationrequired.md): Deprecated. A Boolean value indicating whether the user must unlock the device before the action is performed.
- [destructive](isdestructive.md): Deprecated. A Boolean value indicating whether the action is destructive.
- [behavior](behavior.md): Deprecated. The custom behavior (if any) that the action supports.
- [parameters](parameters.md): Deprecated. A dictionary of additional parameters to include with the action.
