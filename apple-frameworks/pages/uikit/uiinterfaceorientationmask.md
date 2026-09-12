> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinterfaceorientationmask](https://developer.apple.com/documentation/uikit/uiinterfaceorientationmask)

# UIInterfaceOrientationMask (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that specify a view controller’s supported interface orientations.

## Declaration

```swift
struct UIInterfaceOrientationMask
```

<a id="overview"></a>

## Overview

Starting in iOS 8, you should employ the [UITraitCollection](uitraitcollection.md) and [UITraitEnvironment](uitraitenvironment.md) APIs, and size class properties as used in those APIs, instead of using [UIInterfaceOrientation](uiinterfaceorientation.md) constants or otherwise writing your app in terms of interface orientation.

In earlier versions of iOS, you returned these constants from the [supportedInterfaceOrientations(for:)](uiapplication/supportedinterfaceorientations%28for_%29.md) method or when determining which orientations to support in your app’s view controllers.

## Topics

### Constants

- [portrait](uiinterfaceorientationmask/portrait.md): The view controller supports a portrait interface orientation.
- [landscapeLeft](uiinterfaceorientationmask/landscapeleft.md): The view controller supports a landscape-left interface orientation.
- [landscapeRight](uiinterfaceorientationmask/landscaperight.md): The view controller supports a landscape-right interface orientation.
- [portraitUpsideDown](uiinterfaceorientationmask/portraitupsidedown.md): The view controller supports an upside-down portrait interface orientation.
- [landscape](uiinterfaceorientationmask/landscape.md): The view controller supports both landscape-left and landscape-right interface orientation.
- [all](uiinterfaceorientationmask/all.md): The view controller supports all interface orientations.
- [allButUpsideDown](uiinterfaceorientationmask/allbutupsidedown.md): The view controller supports all but the upside-down portrait interface orientation.

### Initializers

- [init(rawValue:)](uiinterfaceorientationmask/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing interface geometry

- [application(\_:supportedInterfaceOrientationsFor:)](uiapplicationdelegate/application%28__supportedinterfaceorientationsfor_%29.md): Deprecated. Asks the delegate for the interface orientations to use for the view controllers in the specified window.
- [UIInterfaceOrientation](uiinterfaceorientation.md): Constants that specify the orientation of the app’s user interface.
- [invalidInterfaceOrientationException](uiapplication/invalidinterfaceorientationexception.md): An exception that’s thrown if a view controller or the app returns an invalid set of supported interface orientations.

# UIInterfaceOrientationMask (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that specify a view controller’s supported interface orientations.

## Declaration

```objectivec
enum UIInterfaceOrientationMask : NSUInteger;
```

<a id="overview"></a>

## Overview

Starting in iOS 8, you should employ the [UITraitCollection](uitraitcollection.md) and [UITraitEnvironment](uitraitenvironment.md) APIs, and size class properties as used in those APIs, instead of using [UIInterfaceOrientation](uiinterfaceorientation.md) constants or otherwise writing your app in terms of interface orientation.

In earlier versions of iOS, you returned these constants from the [supportedInterfaceOrientationsForWindow:](uiapplication/supportedinterfaceorientations%28for_%29.md) method or when determining which orientations to support in your app’s view controllers.

## Topics

### Constants

- [UIInterfaceOrientationMaskPortrait](uiinterfaceorientationmask/portrait.md): The view controller supports a portrait interface orientation.
- [UIInterfaceOrientationMaskLandscapeLeft](uiinterfaceorientationmask/landscapeleft.md): The view controller supports a landscape-left interface orientation.
- [UIInterfaceOrientationMaskLandscapeRight](uiinterfaceorientationmask/landscaperight.md): The view controller supports a landscape-right interface orientation.
- [UIInterfaceOrientationMaskPortraitUpsideDown](uiinterfaceorientationmask/portraitupsidedown.md): The view controller supports an upside-down portrait interface orientation.
- [UIInterfaceOrientationMaskLandscape](uiinterfaceorientationmask/landscape.md): The view controller supports both landscape-left and landscape-right interface orientation.
- [UIInterfaceOrientationMaskAll](uiinterfaceorientationmask/all.md): The view controller supports all interface orientations.
- [UIInterfaceOrientationMaskAllButUpsideDown](uiinterfaceorientationmask/allbutupsidedown.md): The view controller supports all but the upside-down portrait interface orientation.

## See Also

### Managing interface geometry

- [application:supportedInterfaceOrientationsForWindow:](uiapplicationdelegate/application%28__supportedinterfaceorientationsfor_%29.md): Deprecated. Asks the delegate for the interface orientations to use for the view controllers in the specified window.
- [UIInterfaceOrientation](uiinterfaceorientation.md): Constants that specify the orientation of the app’s user interface.
- [UIApplicationInvalidInterfaceOrientationException](uiapplication/invalidinterfaceorientationexception.md): An exception that’s thrown if a view controller or the app returns an invalid set of supported interface orientations.
