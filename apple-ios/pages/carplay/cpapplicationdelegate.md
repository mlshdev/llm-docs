> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpapplicationdelegate

# CPApplicationDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A set of methods that are called by the @c UIApplication singleton in response to CarPlay lifecycle events.

## Declaration

```swift
protocol CPApplicationDelegate : UIApplicationDelegate
```

<a id="overview"></a>

## Overview

This must be implemented by the same object that serves as your application’s delegate object.

## Topics

### Instance Methods

- [application(\_:didConnectCarInterfaceController:to:)](cpapplicationdelegate/application%28__didconnectcarinterfacecontroller_to_%29.md): Deprecated. The CarPlay screen has connected and is ready to present content.
- [application(\_:didDisconnectCarInterfaceController:from:)](cpapplicationdelegate/application%28__diddisconnectcarinterfacecontroller_from_%29.md): Deprecated. The CarPlay screen has disconnected.
- [application(\_:didSelect:)](cpapplicationdelegate/application%28__didselect_%29-478jb.md): Deprecated. If your application posts a @c CPNavigationAlert while backgrounded, a notification banner may be presented to the user. If the user taps on that banner, your application will launch on the car screen and this method will be called with the alert the user tapped.
- [application(\_:didSelect:)](cpapplicationdelegate/application%28__didselect_%29-6ybyy.md): Deprecated. If your application posts a @c CPManeuver while backgrounded, a notification banner may be presented to the user. If the user taps on that banner, your application will launch on the car screen and this method will be called with the maneuver the user tapped.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UIApplicationDelegate](https://developer.apple.com/documentation/uikit/uiapplicationdelegate)

# CPApplicationDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A set of methods that are called by the @c UIApplication singleton in response to CarPlay lifecycle events.

## Declaration

```objectivec
@protocol CPApplicationDelegate <UIApplicationDelegate>
```

<a id="overview"></a>

## Overview

This must be implemented by the same object that serves as your application’s delegate object.

## Topics

### Instance Methods

- [application:didConnectCarInterfaceController:toWindow:](cpapplicationdelegate/application%28__didconnectcarinterfacecontroller_to_%29.md): Deprecated. The CarPlay screen has connected and is ready to present content.
- [application:didDisconnectCarInterfaceController:fromWindow:](cpapplicationdelegate/application%28__diddisconnectcarinterfacecontroller_from_%29.md): Deprecated. The CarPlay screen has disconnected.
- [application:didSelectNavigationAlert:](cpapplicationdelegate/application%28__didselect_%29-478jb.md): Deprecated. If your application posts a @c CPNavigationAlert while backgrounded, a notification banner may be presented to the user. If the user taps on that banner, your application will launch on the car screen and this method will be called with the alert the user tapped.
- [application:didSelectManeuver:](cpapplicationdelegate/application%28__didselect_%29-6ybyy.md): Deprecated. If your application posts a @c CPManeuver while backgrounded, a notification banner may be presented to the user. If the user taps on that banner, your application will launch on the car screen and this method will be called with the maneuver the user tapped.

## Relationships

### Inherits From

- [UIApplicationDelegate](https://developer.apple.com/documentation/uikit/uiapplicationdelegate)
