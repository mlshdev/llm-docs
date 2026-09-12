> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/geometry](https://developer.apple.com/documentation/uikit/uiwindowscene/geometry)

# UIWindowScene.Geometry (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An object that provides geometry information about the window scene.

## Declaration

```swift
class Geometry
```

## Topics

### Accessing scene geometry

- [systemFrame](geometry/systemframe.md): The current frame of the scene, in system coordinates.
- [coordinateSpace](geometry/coordinatespace.md): The coordinate space of the scene
- [interfaceOrientation](geometry/interfaceorientation.md): The current interface orientation for the scene.
- [isInterfaceOrientationLocked](geometry/isinterfaceorientationlocked.md): If the scene’s interface orientation is locked and preventing changes. To express a preference for this value, override `UIViewController`’s `prefersInterfaceOrientationLocked`.

### Instance Properties

- [isInteractivelyResizing](geometry/isinteractivelyresizing.md): Returns true when the scene is being resized interactively, otherwise false.
- [maximumSize](geometry/maximumsize.md): The current app specified maximumSize. A value of CGFLOAT_MAX,CGFLOAT_MAX is returned if a maximum is not set by the application
- [minimumSize](geometry/minimumsize.md): The current app specified minimumSize. A value of 0,0 is returned if a minimum is not set by the application
- [resizingRestrictions](geometry/resizingrestrictions.md): The current app specified resizingRestriction. Default value UIWindowSceneResizingRestrictionsUnspecified

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Working with window geometry

- [effectiveGeometry](effectivegeometry.md): The current values for the window scene’s geometry in system space.
- [requestGeometryUpdate(\_:errorHandler:)](requestgeometryupdate%28__errorhandler_%29.md): Requests an update to the window scene’s geometry using the specified geometry preferences object.
- [UIWindowScene.GeometryPreferences](geometrypreferences.md): An abstract superclass for representing window scene geometry preferences.
- [UIWindowScene.GeometryPreferences.iOS](geometrypreferences/ios.md): An object that represents the geometry preferences for a window scene in an iOS app.
- [UIWindowScene.GeometryPreferences.Mac](geometrypreferences/mac.md): An object that represents the geometry preferences for a window scene in an app built with Mac Catalyst.
- [UIWindowScene.GeometryPreferences.Vision](geometrypreferences/vision.md)
- [UIProposedSceneSizeNoPreference](../uiproposedscenesizenopreference.md): Used as the value for a dimension of a size related preference when wanting to leave it unchanged.

# UIWindowSceneGeometry (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An object that provides geometry information about the window scene.

## Declaration

```objectivec
@interface UIWindowSceneGeometry : NSObject
```

## Topics

### Accessing scene geometry

- [systemFrame](geometry/systemframe.md): The current frame of the scene, in system coordinates.
- [coordinateSpace](geometry/coordinatespace.md): The coordinate space of the scene
- [interfaceOrientation](geometry/interfaceorientation.md): The current interface orientation for the scene.
- [interfaceOrientationLocked](geometry/isinterfaceorientationlocked.md): If the scene’s interface orientation is locked and preventing changes. To express a preference for this value, override `UIViewController`’s `prefersInterfaceOrientationLocked`.

### Instance Properties

- [interactivelyResizing](geometry/isinteractivelyresizing.md): Returns true when the scene is being resized interactively, otherwise false.
- [maximumSize](geometry/maximumsize.md): The current app specified maximumSize. A value of CGFLOAT_MAX,CGFLOAT_MAX is returned if a maximum is not set by the application
- [minimumSize](geometry/minimumsize.md): The current app specified minimumSize. A value of 0,0 is returned if a minimum is not set by the application
- [resizingRestrictions](geometry/resizingrestrictions.md): The current app specified resizingRestriction. Default value UIWindowSceneResizingRestrictionsUnspecified

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)

## See Also

### Working with window geometry

- [effectiveGeometry](effectivegeometry.md): The current values for the window scene’s geometry in system space.
- [requestGeometryUpdateWithPreferences:errorHandler:](requestgeometryupdate%28__errorhandler_%29.md): Requests an update to the window scene’s geometry using the specified geometry preferences object.
- [UIWindowSceneGeometryPreferences](geometrypreferences.md): An abstract superclass for representing window scene geometry preferences.
- [UIWindowSceneGeometryPreferencesIOS](geometrypreferences/ios.md): An object that represents the geometry preferences for a window scene in an iOS app.
- [UIWindowSceneGeometryPreferencesMac](geometrypreferences/mac.md): An object that represents the geometry preferences for a window scene in an app built with Mac Catalyst.
- [UIWindowSceneGeometryPreferencesVision](geometrypreferences/vision.md)
- [UIProposedSceneSizeNoPreference](../uiproposedscenesizenopreference.md): Used as the value for a dimension of a size related preference when wanting to leave it unchanged.
