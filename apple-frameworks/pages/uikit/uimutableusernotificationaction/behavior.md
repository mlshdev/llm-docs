> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimutableusernotificationaction/behavior](https://developer.apple.com/documentation/uikit/uimutableusernotificationaction/behavior)

# behavior (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The custom behavior (if any) that the action supports.

## Declaration

```swift
var behavior: UIUserNotificationActionBehavior { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `UIUserNotificationActionBehaviorDefault`.

## See Also

### Configuring the action’s behavior

- [activationMode](activationmode.md): Deprecated. The mode in which to run the app when the action is performed.
- [isAuthenticationRequired](isauthenticationrequired.md): Deprecated. A Boolean value indicating whether the user must unlock the device before the action is performed.
- [isDestructive](isdestructive.md): Deprecated. A Boolean value indicating whether the action is destructive.
- [parameters](parameters.md): Deprecated. A dictionary of additional parameters to include with the action.

# behavior (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The custom behavior (if any) that the action supports.

## Declaration

```objectivec
@property (nonatomic, assign) UIUserNotificationActionBehavior behavior;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `UIUserNotificationActionBehaviorDefault`.

## See Also

### Configuring the action’s behavior

- [activationMode](activationmode.md): Deprecated. The mode in which to run the app when the action is performed.
- [authenticationRequired](isauthenticationrequired.md): Deprecated. A Boolean value indicating whether the user must unlock the device before the action is performed.
- [destructive](isdestructive.md): Deprecated. A Boolean value indicating whether the action is destructive.
- [parameters](parameters.md): Deprecated. A dictionary of additional parameters to include with the action.
