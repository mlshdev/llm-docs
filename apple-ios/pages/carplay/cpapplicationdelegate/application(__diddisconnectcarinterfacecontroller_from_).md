> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpapplicationdelegate/application(_:diddisconnectcarinterfacecontroller:from:)](https://developer.apple.com/documentation/carplay/cpapplicationdelegate/application(_:diddisconnectcarinterfacecontroller:from:))

# application(\_:didDisconnectCarInterfaceController:from:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the app delegate that the app disconnected from the CarPlay interface.

## Declaration

```swift
func application(_ application: UIApplication, didDisconnectCarInterfaceController interfaceController: CPInterfaceController, from window: CPWindow)
```

## Parameters

- `application`: Your singleton app object.
- `interfaceController`: The interface controller provided by CarPlay. Your app should release its reference to this controller.
- `window`: The CarPlay window.

## See Also

### Connecting to the CarPlay Interface

- [application(\_:didConnectCarInterfaceController:to:)](application%28__didconnectcarinterfacecontroller_to_%29.md): Deprecated. Tells the app delegate that the app connected to the CarPlay interface.

# application:didDisconnectCarInterfaceController:fromWindow: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the app delegate that the app disconnected from the CarPlay interface.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didDisconnectCarInterfaceController:(CPInterfaceController *) interfaceController fromWindow:(CPWindow *) window;
```

## Parameters

- `application`: Your singleton app object.
- `interfaceController`: The interface controller provided by CarPlay. Your app should release its reference to this controller.
- `window`: The CarPlay window.

## See Also

### Connecting to the CarPlay Interface

- [application:didConnectCarInterfaceController:toWindow:](application%28__didconnectcarinterfacecontroller_to_%29.md): Deprecated. Tells the app delegate that the app connected to the CarPlay interface.
