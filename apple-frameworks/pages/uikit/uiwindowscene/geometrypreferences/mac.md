> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/geometrypreferences/mac](https://developer.apple.com/documentation/uikit/uiwindowscene/geometrypreferences/mac)

# UIWindowScene.GeometryPreferences.Mac (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 16.0+ · tvOS · visionOS

An object that represents the geometry preferences for a window scene in an app built with Mac Catalyst.

## Declaration

```swift
class Mac
```

<a id="overview"></a>

## Overview

Use this class to express macOS-specific geometry preferences when you call [requestGeometryUpdate(\_:errorHandler:)](../requestgeometryupdate%28__errorhandler_%29.md).

## Topics

### Creating a geometry preferences object

- [init(systemFrame:)](mac/init%28systemframe_%29.md): Initializes a new window scene geometry preferences object with the specified window frame.
- [init()](mac/init%28%29.md): Initializes a new window scene geometry preferences object.

### Accessing geometry information

- [systemFrame](mac/systemframe.md): The preferred frame of the scene, in system coordinates.

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
- [UIWindowScene.GeometryPreferences.iOS](ios.md): An object that represents the geometry preferences for a window scene in an iOS app.
- [UIWindowScene.GeometryPreferences.Vision](vision.md)
- [UIProposedSceneSizeNoPreference](../../uiproposedscenesizenopreference.md): Used as the value for a dimension of a size related preference when wanting to leave it unchanged.

# UIWindowSceneGeometryPreferencesMac (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 16.0+ · tvOS · visionOS

An object that represents the geometry preferences for a window scene in an app built with Mac Catalyst.

## Declaration

```objectivec
@interface UIWindowSceneGeometryPreferencesMac : UIWindowSceneGeometryPreferences
```

<a id="overview"></a>

## Overview

Use this class to express macOS-specific geometry preferences when you call [requestGeometryUpdateWithPreferences:errorHandler:](../requestgeometryupdate%28__errorhandler_%29.md).

## Topics

### Creating a geometry preferences object

- [initWithSystemFrame:](mac/init%28systemframe_%29.md): Initializes a new window scene geometry preferences object with the specified window frame.
- [init](mac/init%28%29.md): Initializes a new window scene geometry preferences object.

### Accessing geometry information

- [systemFrame](../../uiwindowscenegeometrypreferencesmac/systemframe.md): The preferred frame of the scene, in system coordinates.

## Relationships

### Inherits From

- [UIWindowSceneGeometryPreferences](../geometrypreferences.md)

## See Also

### Related Documentation

- [effectiveGeometry](../effectivegeometry.md): The current values for the window scene’s geometry in system space.
- [requestGeometryUpdateWithPreferences:errorHandler:](../requestgeometryupdate%28__errorhandler_%29.md): Requests an update to the window scene’s geometry using the specified geometry preferences object.
- [systemFrame](../../uiwindowscenegeometrypreferencesmac/systemframe.md): The preferred frame of the scene, in system coordinates.

### Working with window geometry

- [effectiveGeometry](../effectivegeometry.md): The current values for the window scene’s geometry in system space.
- [requestGeometryUpdateWithPreferences:errorHandler:](../requestgeometryupdate%28__errorhandler_%29.md): Requests an update to the window scene’s geometry using the specified geometry preferences object.
- [UIWindowSceneGeometry](../geometry.md): An object that provides geometry information about the window scene.
- [UIWindowSceneGeometryPreferences](../geometrypreferences.md): An abstract superclass for representing window scene geometry preferences.
- [UIWindowSceneGeometryPreferencesIOS](ios.md): An object that represents the geometry preferences for a window scene in an iOS app.
- [UIWindowSceneGeometryPreferencesVision](vision.md)
- [UIProposedSceneSizeNoPreference](../../uiproposedscenesizenopreference.md): Used as the value for a dimension of a size related preference when wanting to leave it unchanged.
