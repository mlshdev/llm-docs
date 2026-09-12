> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpapplicationdelegate](https://developer.apple.com/documentation/carplay/cpapplicationdelegate)

# CPApplicationDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The interface for handling CarPlay life-cycle events.

## Declaration

```swift
protocol CPApplicationDelegate : UIApplicationDelegate
```

<a id="overview"></a>

## Overview

You must implement [CPApplicationDelegate](cpapplicationdelegate.md) on the same object that serves as the delegate to your app.

## Topics

### Connecting to the CarPlay Interface

- [application(\_:didConnectCarInterfaceController:to:)](cpapplicationdelegate/application%28__didconnectcarinterfacecontroller_to_%29.md): Deprecated. Tells the app delegate that the app connected to the CarPlay interface.
- [application(\_:didDisconnectCarInterfaceController:from:)](cpapplicationdelegate/application%28__diddisconnectcarinterfacecontroller_from_%29.md): Deprecated. Tells the app delegate that the app disconnected from the CarPlay interface.

### Receiving the Selected Maneuver

- [application(\_:didSelect:)](cpapplicationdelegate/application%28__didselect_%29-6ybyy.md): Deprecated. Tells the app delegate that the user selected a maneuver.

### Handling Navigation Alert Actions

- [application(\_:didSelect:)](cpapplicationdelegate/application%28__didselect_%29-478jb.md): Deprecated. Tells the app delegate that the user selected an action from a navigation alert.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UIApplicationDelegate](https://developer.apple.com/documentation/uikit/uiapplicationdelegate)

# CPApplicationDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The interface for handling CarPlay life-cycle events.

## Declaration

```objectivec
@protocol CPApplicationDelegate <UIApplicationDelegate>
```

<a id="overview"></a>

## Overview

You must implement [CPApplicationDelegate](cpapplicationdelegate.md) on the same object that serves as the delegate to your app.

## Topics

### Connecting to the CarPlay Interface

- [application:didConnectCarInterfaceController:toWindow:](cpapplicationdelegate/application%28__didconnectcarinterfacecontroller_to_%29.md): Deprecated. Tells the app delegate that the app connected to the CarPlay interface.
- [application:didDisconnectCarInterfaceController:fromWindow:](cpapplicationdelegate/application%28__diddisconnectcarinterfacecontroller_from_%29.md): Deprecated. Tells the app delegate that the app disconnected from the CarPlay interface.

### Receiving the Selected Maneuver

- [application:didSelectManeuver:](cpapplicationdelegate/application%28__didselect_%29-6ybyy.md): Deprecated. Tells the app delegate that the user selected a maneuver.

### Handling Navigation Alert Actions

- [application:didSelectNavigationAlert:](cpapplicationdelegate/application%28__didselect_%29-478jb.md): Deprecated. Tells the app delegate that the user selected an action from a navigation alert.

## Relationships

### Inherits From

- [UIApplicationDelegate](https://developer.apple.com/documentation/uikit/uiapplicationdelegate)
