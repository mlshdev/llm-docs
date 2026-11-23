> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpapplicationdelegate/application(_:diddisconnectcarinterfacecontroller:from:)

# application(\_:didDisconnectCarInterfaceController:from:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The CarPlay screen has disconnected.

## Declaration

```swift
func application(_ application: UIApplication, didDisconnectCarInterfaceController interfaceController: CPInterfaceController, from window: CPWindow)
```

# application:didDisconnectCarInterfaceController:fromWindow: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The CarPlay screen has disconnected.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didDisconnectCarInterfaceController:(CPInterfaceController *) interfaceController fromWindow:(CPWindow *) window;
```
