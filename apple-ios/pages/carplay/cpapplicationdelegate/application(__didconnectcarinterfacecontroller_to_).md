> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpapplicationdelegate/application(_:didconnectcarinterfacecontroller:to:)

# application(\_:didConnectCarInterfaceController:to:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The CarPlay screen has connected and is ready to present content.

## Declaration

```swift
func application(_ application: UIApplication, didConnectCarInterfaceController interfaceController: CPInterfaceController, to window: CPWindow)
```

<a id="discussion"></a>

## Discussion

Your app should create its view controller and assign it to the @c rootViewController property of this window.

> **Note**

> It is the responsibility of the delegate to maintain a reference to the interface controller beyond the scope of this method.

# application:didConnectCarInterfaceController:toWindow: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The CarPlay screen has connected and is ready to present content.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didConnectCarInterfaceController:(CPInterfaceController *) interfaceController toWindow:(CPWindow *) window;
```

<a id="discussion"></a>

## Discussion

Your app should create its view controller and assign it to the @c rootViewController property of this window.

> **Note**

> It is the responsibility of the delegate to maintain a reference to the interface controller beyond the scope of this method.
