> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpapplicationdelegate/application(_:didconnectcarinterfacecontroller:to:)](https://developer.apple.com/documentation/carplay/cpapplicationdelegate/application(_:didconnectcarinterfacecontroller:to:))

# application(\_:didConnectCarInterfaceController:to:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the app delegate that the app connected to the CarPlay interface.

## Declaration

```swift
func application(_ application: UIApplication, didConnectCarInterfaceController interfaceController: CPInterfaceController, to window: CPWindow)
```

## Parameters

- `application`: Your singleton app object.
- `interfaceController`: The interface controller provided by CarPlay. Your app should maintain a reference to this controller.
- `window`: The CarPlay window. Your app should create its view controller and assign the controller to the [rootViewController](https://developer.apple.com/documentation/uikit/uiwindow/rootviewcontroller) property of this window.

## See Also

### Connecting to the CarPlay Interface

- [application(\_:didDisconnectCarInterfaceController:from:)](application%28__diddisconnectcarinterfacecontroller_from_%29.md): Deprecated. Tells the app delegate that the app disconnected from the CarPlay interface.

# application:didConnectCarInterfaceController:toWindow: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the app delegate that the app connected to the CarPlay interface.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didConnectCarInterfaceController:(CPInterfaceController *) interfaceController toWindow:(CPWindow *) window;
```

## Parameters

- `application`: Your singleton app object.
- `interfaceController`: The interface controller provided by CarPlay. Your app should maintain a reference to this controller.
- `window`: The CarPlay window. Your app should create its view controller and assign the controller to the [rootViewController](https://developer.apple.com/documentation/uikit/uiwindow/rootviewcontroller) property of this window.

## See Also

### Connecting to the CarPlay Interface

- [application:didDisconnectCarInterfaceController:fromWindow:](application%28__diddisconnectcarinterfacecontroller_from_%29.md): Deprecated. Tells the app delegate that the app disconnected from the CarPlay interface.
