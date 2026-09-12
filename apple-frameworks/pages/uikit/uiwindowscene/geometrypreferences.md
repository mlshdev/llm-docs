> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/geometrypreferences](https://developer.apple.com/documentation/uikit/uiwindowscene/geometrypreferences)

# UIWindowScene.GeometryPreferences (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An abstract superclass for representing window scene geometry preferences.

## Declaration

```swift
class GeometryPreferences
```

## Topics

### Geometry preferences

- [UIWindowScene.GeometryPreferences.Mac](geometrypreferences/mac.md): An object that represents the geometry preferences for a window scene in an app built with Mac Catalyst.
- [UIWindowScene.GeometryPreferences.iOS](geometrypreferences/ios.md): An object that represents the geometry preferences for a window scene in an iOS app.

### Classes

- [UIWindowScene.GeometryPreferences.Vision](geometrypreferences/vision.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIWindowScene.GeometryPreferences.Mac](geometrypreferences/mac.md)
- [UIWindowScene.GeometryPreferences.Vision](geometrypreferences/vision.md)
- [UIWindowScene.GeometryPreferences.iOS](geometrypreferences/ios.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Working with window geometry

- [effectiveGeometry](effectivegeometry.md): The current values for the window scene’s geometry in system space.
- [requestGeometryUpdate(\_:errorHandler:)](requestgeometryupdate%28__errorhandler_%29.md): Requests an update to the window scene’s geometry using the specified geometry preferences object.
- [UIWindowScene.Geometry](geometry.md): An object that provides geometry information about the window scene.
- [UIWindowScene.GeometryPreferences.iOS](geometrypreferences/ios.md): An object that represents the geometry preferences for a window scene in an iOS app.
- [UIWindowScene.GeometryPreferences.Mac](geometrypreferences/mac.md): An object that represents the geometry preferences for a window scene in an app built with Mac Catalyst.
- [UIWindowScene.GeometryPreferences.Vision](geometrypreferences/vision.md)
- [UIProposedSceneSizeNoPreference](../uiproposedscenesizenopreference.md): Used as the value for a dimension of a size related preference when wanting to leave it unchanged.

# UIWindowSceneGeometryPreferences (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An abstract superclass for representing window scene geometry preferences.

## Declaration

```objectivec
@interface UIWindowSceneGeometryPreferences : NSObject
```

## Topics

### Geometry preferences

- [UIWindowSceneGeometryPreferencesMac](geometrypreferences/mac.md): An object that represents the geometry preferences for a window scene in an app built with Mac Catalyst.
- [UIWindowSceneGeometryPreferencesIOS](geometrypreferences/ios.md): An object that represents the geometry preferences for a window scene in an iOS app.

### Classes

- [UIWindowSceneGeometryPreferencesVision](geometrypreferences/vision.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIWindowSceneGeometryPreferencesIOS](geometrypreferences/ios.md)
- [UIWindowSceneGeometryPreferencesMac](geometrypreferences/mac.md)
- [UIWindowSceneGeometryPreferencesVision](geometrypreferences/vision.md)

## See Also

### Working with window geometry

- [effectiveGeometry](effectivegeometry.md): The current values for the window scene’s geometry in system space.
- [requestGeometryUpdateWithPreferences:errorHandler:](requestgeometryupdate%28__errorhandler_%29.md): Requests an update to the window scene’s geometry using the specified geometry preferences object.
- [UIWindowSceneGeometry](geometry.md): An object that provides geometry information about the window scene.
- [UIWindowSceneGeometryPreferencesIOS](geometrypreferences/ios.md): An object that represents the geometry preferences for a window scene in an iOS app.
- [UIWindowSceneGeometryPreferencesMac](geometrypreferences/mac.md): An object that represents the geometry preferences for a window scene in an app built with Mac Catalyst.
- [UIWindowSceneGeometryPreferencesVision](geometrypreferences/vision.md)
- [UIProposedSceneSizeNoPreference](../uiproposedscenesizenopreference.md): Used as the value for a dimension of a size related preference when wanting to leave it unchanged.
