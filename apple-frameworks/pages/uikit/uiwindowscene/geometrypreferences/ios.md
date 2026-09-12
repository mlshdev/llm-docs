> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/geometrypreferences/ios](https://developer.apple.com/documentation/uikit/uiwindowscene/geometrypreferences/ios)

# UIWindowScene.GeometryPreferences.iOS (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents the geometry preferences for a window scene in an iOS app.

## Declaration

```swift
class iOS
```

<a id="overview"></a>

## Overview

Use this class to express iOS-specific geometry preferences when you call [requestGeometryUpdate(\_:errorHandler:)](../requestgeometryupdate%28__errorhandler_%29.md).

## Topics

### Creating a geometry preferences object

- [init(interfaceOrientations:)](ios/init%28interfaceorientations_%29.md): Initializes a new window scene geometry preferences object with the specified interface orientations.
- [init()](ios/init%28%29.md): Initializes a new window scene geometry preferences object.

### Requesting preferred interface orientations

- [interfaceOrientations](ios/interfaceorientations.md): The preferred interface orientations for the scene.

## Relationships

### Inherits From

- [UIWindowScene.GeometryPreferences](../geometrypreferences.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [effectiveGeometry](../effectivegeometry.md): The current values for the window scene’s geometry in system space.
- [requestGeometryUpdate(\_:errorHandler:)](../requestgeometryupdate%28__errorhandler_%29.md): Requests an update to the window scene’s geometry using the specified geometry preferences object.

### Working with window geometry

- [effectiveGeometry](../effectivegeometry.md): The current values for the window scene’s geometry in system space.
- [requestGeometryUpdate(\_:errorHandler:)](../requestgeometryupdate%28__errorhandler_%29.md): Requests an update to the window scene’s geometry using the specified geometry preferences object.
- [UIWindowScene.Geometry](../geometry.md): An object that provides geometry information about the window scene.
- [UIWindowScene.GeometryPreferences](../geometrypreferences.md): An abstract superclass for representing window scene geometry preferences.
- [UIWindowScene.GeometryPreferences.Mac](mac.md): An object that represents the geometry preferences for a window scene in an app built with Mac Catalyst.
- [UIWindowScene.GeometryPreferences.Vision](vision.md)
- [UIProposedSceneSizeNoPreference](../../uiproposedscenesizenopreference.md): Used as the value for a dimension of a size related preference when wanting to leave it unchanged.

# UIWindowSceneGeometryPreferencesIOS (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents the geometry preferences for a window scene in an iOS app.

## Declaration

```objectivec
@interface UIWindowSceneGeometryPreferencesIOS : UIWindowSceneGeometryPreferences
```

<a id="overview"></a>

## Overview

Use this class to express iOS-specific geometry preferences when you call [requestGeometryUpdateWithPreferences:errorHandler:](../requestgeometryupdate%28__errorhandler_%29.md).

## Topics

### Creating a geometry preferences object

- [initWithInterfaceOrientations:](ios/init%28interfaceorientations_%29.md): Initializes a new window scene geometry preferences object with the specified interface orientations.
- [init](ios/init%28%29.md): Initializes a new window scene geometry preferences object.

### Requesting preferred interface orientations

- [interfaceOrientations](../../uiwindowscenegeometrypreferencesios/interfaceorientations.md): The preferred interface orientations for the scene.

## Relationships

### Inherits From

- [UIWindowSceneGeometryPreferences](../geometrypreferences.md)

## See Also

### Related Documentation

- [effectiveGeometry](../effectivegeometry.md): The current values for the window scene’s geometry in system space.
- [requestGeometryUpdateWithPreferences:errorHandler:](../requestgeometryupdate%28__errorhandler_%29.md): Requests an update to the window scene’s geometry using the specified geometry preferences object.
- [interfaceOrientations](../../uiwindowscenegeometrypreferencesios/interfaceorientations.md): The preferred interface orientations for the scene.

### Working with window geometry

- [effectiveGeometry](../effectivegeometry.md): The current values for the window scene’s geometry in system space.
- [requestGeometryUpdateWithPreferences:errorHandler:](../requestgeometryupdate%28__errorhandler_%29.md): Requests an update to the window scene’s geometry using the specified geometry preferences object.
- [UIWindowSceneGeometry](../geometry.md): An object that provides geometry information about the window scene.
- [UIWindowSceneGeometryPreferences](../geometrypreferences.md): An abstract superclass for representing window scene geometry preferences.
- [UIWindowSceneGeometryPreferencesMac](mac.md): An object that represents the geometry preferences for a window scene in an app built with Mac Catalyst.
- [UIWindowSceneGeometryPreferencesVision](vision.md)
- [UIProposedSceneSizeNoPreference](../../uiproposedscenesizenopreference.md): Used as the value for a dimension of a size related preference when wanting to leave it unchanged.
