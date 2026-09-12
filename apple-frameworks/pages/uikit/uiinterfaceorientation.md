> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinterfaceorientation](https://developer.apple.com/documentation/uikit/uiinterfaceorientation)

# UIInterfaceOrientation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that specify the orientation of the app’s user interface.

## Declaration

```swift
enum UIInterfaceOrientation
```

<a id="overview"></a>

## Overview

Starting in iOS 8, you should employ the [UITraitCollection](uitraitcollection.md) and [UITraitEnvironment](uitraitenvironment.md) APIs, and size class properties as used in those APIs, instead of using [UIInterfaceOrientation](uiinterfaceorientation.md) constants or otherwise writing your app in terms of interface orientation.

In earlier versions of iOS, you used these constants in the [statusBarOrientation](uiapplication/statusbarorientation.md) property and the [setStatusBarOrientation(\_:animated:)](uiapplication/setstatusbarorientation%28__animated_%29.md) method.

> **Important**

>  Notice that [UIDeviceOrientation.landscapeRight](uideviceorientation/landscaperight.md) is assigned to [UIInterfaceOrientation.landscapeLeft](uiinterfaceorientation/landscapeleft.md) and [UIDeviceOrientation.landscapeLeft](uideviceorientation/landscapeleft.md) is assigned to [UIInterfaceOrientation.landscapeRight](uiinterfaceorientation/landscaperight.md). The reason for this is that rotating the device requires rotating the content in the opposite direction.

## Topics

### Orientations

- [UIInterfaceOrientation.unknown](uiinterfaceorientation/unknown.md): The orientation of the device is unknown.
- [UIInterfaceOrientation.portrait](uiinterfaceorientation/portrait.md): The device is in portrait mode, with the device upright and the Home button on the bottom.
- [UIInterfaceOrientation.portraitUpsideDown](uiinterfaceorientation/portraitupsidedown.md): The device is in portrait mode but is upside down, with the device upright and the Home button at the top.
- [UIInterfaceOrientation.landscapeLeft](uiinterfaceorientation/landscapeleft.md): The device is in landscape mode, with the device upright and the Home button on the left.
- [UIInterfaceOrientation.landscapeRight](uiinterfaceorientation/landscaperight.md): The device is in landscape mode, with the device upright and the Home button on the right.

### Orientation Checks

- [isLandscape](uiinterfaceorientation/islandscape.md): A Boolean value that indicates whether the user interface is currently presented in a landscape orientation.
- [isPortrait](uiinterfaceorientation/isportrait.md): A Boolean value that indicates whether the user interface is currently presented in a portrait orientation.

### Initializers

- [init(rawValue:)](uiinterfaceorientation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing interface geometry

- [application(\_:supportedInterfaceOrientationsFor:)](uiapplicationdelegate/application%28__supportedinterfaceorientationsfor_%29.md): Deprecated. Asks the delegate for the interface orientations to use for the view controllers in the specified window.
- [UIInterfaceOrientationMask](uiinterfaceorientationmask.md): Constants that specify a view controller’s supported interface orientations.
- [invalidInterfaceOrientationException](uiapplication/invalidinterfaceorientationexception.md): An exception that’s thrown if a view controller or the app returns an invalid set of supported interface orientations.

# UIInterfaceOrientation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that specify the orientation of the app’s user interface.

## Declaration

```objectivec
enum UIInterfaceOrientation : NSInteger;
```

<a id="overview"></a>

## Overview

Starting in iOS 8, you should employ the [UITraitCollection](uitraitcollection.md) and [UITraitEnvironment](uitraitenvironment.md) APIs, and size class properties as used in those APIs, instead of using [UIInterfaceOrientation](uiinterfaceorientation.md) constants or otherwise writing your app in terms of interface orientation.

In earlier versions of iOS, you used these constants in the [statusBarOrientation](uiapplication/statusbarorientation.md) property and the [setStatusBarOrientation:animated:](uiapplication/setstatusbarorientation%28__animated_%29.md) method.

> **Important**

>  Notice that [UIDeviceOrientationLandscapeRight](uideviceorientation/landscaperight.md) is assigned to [UIInterfaceOrientationLandscapeLeft](uiinterfaceorientation/landscapeleft.md) and [UIDeviceOrientationLandscapeLeft](uideviceorientation/landscapeleft.md) is assigned to [UIInterfaceOrientationLandscapeRight](uiinterfaceorientation/landscaperight.md). The reason for this is that rotating the device requires rotating the content in the opposite direction.

## Topics

### Orientations

- [UIInterfaceOrientationUnknown](uiinterfaceorientation/unknown.md): The orientation of the device is unknown.
- [UIInterfaceOrientationPortrait](uiinterfaceorientation/portrait.md): The device is in portrait mode, with the device upright and the Home button on the bottom.
- [UIInterfaceOrientationPortraitUpsideDown](uiinterfaceorientation/portraitupsidedown.md): The device is in portrait mode but is upside down, with the device upright and the Home button at the top.
- [UIInterfaceOrientationLandscapeLeft](uiinterfaceorientation/landscapeleft.md): The device is in landscape mode, with the device upright and the Home button on the left.
- [UIInterfaceOrientationLandscapeRight](uiinterfaceorientation/landscaperight.md): The device is in landscape mode, with the device upright and the Home button on the right.

### Orientation Checks

- [UIInterfaceOrientationIsLandscape](uiinterfaceorientation/islandscape.md): A Boolean value that indicates whether the user interface is currently presented in a landscape orientation.
- [UIInterfaceOrientationIsPortrait](uiinterfaceorientation/isportrait.md): A Boolean value that indicates whether the user interface is currently presented in a portrait orientation.

## See Also

### Managing interface geometry

- [application:supportedInterfaceOrientationsForWindow:](uiapplicationdelegate/application%28__supportedinterfaceorientationsfor_%29.md): Deprecated. Asks the delegate for the interface orientations to use for the view controllers in the specified window.
- [UIInterfaceOrientationMask](uiinterfaceorientationmask.md): Constants that specify a view controller’s supported interface orientations.
- [UIApplicationInvalidInterfaceOrientationException](uiapplication/invalidinterfaceorientationexception.md): An exception that’s thrown if a view controller or the app returns an invalid set of supported interface orientations.
