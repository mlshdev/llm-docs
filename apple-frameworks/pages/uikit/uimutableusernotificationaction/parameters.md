> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimutableusernotificationaction/parameters](https://developer.apple.com/documentation/uikit/uimutableusernotificationaction/parameters)

# parameters (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A dictionary of additional parameters to include with the action.

## Declaration

```swift
var parameters: [AnyHashable : Any] { get set }
```

<a id="Discussion"></a>

## Discussion

Use this dictionary to specify any behavior-specific data for the action. For example, the `UIUserNotificationActionBehaviorTextInput` behavior supports the `UIUserNotificationTextInputActionButtonTitleKey` key, which lets you customize the title of the button displayed by the text input interface.

## See Also

### Configuring the action’s behavior

- [activationMode](activationmode.md): Deprecated. The mode in which to run the app when the action is performed.
- [isAuthenticationRequired](isauthenticationrequired.md): Deprecated. A Boolean value indicating whether the user must unlock the device before the action is performed.
- [isDestructive](isdestructive.md): Deprecated. A Boolean value indicating whether the action is destructive.
- [behavior](behavior.md): Deprecated. The custom behavior (if any) that the action supports.

# parameters (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A dictionary of additional parameters to include with the action.

## Declaration

```objectivec
@property (nonatomic, copy) NSDictionary * parameters;
```

<a id="Discussion"></a>

## Discussion

Use this dictionary to specify any behavior-specific data for the action. For example, the `UIUserNotificationActionBehaviorTextInput` behavior supports the `UIUserNotificationTextInputActionButtonTitleKey` key, which lets you customize the title of the button displayed by the text input interface.

## See Also

### Configuring the action’s behavior

- [activationMode](activationmode.md): Deprecated. The mode in which to run the app when the action is performed.
- [authenticationRequired](isauthenticationrequired.md): Deprecated. A Boolean value indicating whether the user must unlock the device before the action is performed.
- [destructive](isdestructive.md): Deprecated. A Boolean value indicating whether the action is destructive.
- [behavior](behavior.md): Deprecated. The custom behavior (if any) that the action supports.
