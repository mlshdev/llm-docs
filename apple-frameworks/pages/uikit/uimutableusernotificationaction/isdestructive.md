> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimutableusernotificationaction/isdestructive](https://developer.apple.com/documentation/uikit/uimutableusernotificationaction/isdestructive)

# isDestructive (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value indicating whether the action is destructive.

> For more information, see [UIMutableUserNotificationAction](../uimutableusernotificationaction.md).

## Declaration

```swift
var isDestructive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to signal to the user whether the action causes destructive behavior to the user’s data or the app. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the system displays the corresponding button differently to indicate that the action is destructive.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the action’s behavior

- [activationMode](activationmode.md): Deprecated. The mode in which to run the app when the action is performed.
- [isAuthenticationRequired](isauthenticationrequired.md): Deprecated. A Boolean value indicating whether the user must unlock the device before the action is performed.
- [behavior](behavior.md): Deprecated. The custom behavior (if any) that the action supports.
- [parameters](parameters.md): Deprecated. A dictionary of additional parameters to include with the action.

# destructive (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value indicating whether the action is destructive.

> For more information, see [UIMutableUserNotificationAction](../uimutableusernotificationaction.md).

## Declaration

```objectivec
@property (nonatomic, assign, getter=isDestructive) BOOL destructive;
```

<a id="Discussion"></a>

## Discussion

Use this property to signal to the user whether the action causes destructive behavior to the user’s data or the app. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the system displays the corresponding button differently to indicate that the action is destructive.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the action’s behavior

- [activationMode](activationmode.md): Deprecated. The mode in which to run the app when the action is performed.
- [authenticationRequired](isauthenticationrequired.md): Deprecated. A Boolean value indicating whether the user must unlock the device before the action is performed.
- [behavior](behavior.md): Deprecated. The custom behavior (if any) that the action supports.
- [parameters](parameters.md): Deprecated. A dictionary of additional parameters to include with the action.
