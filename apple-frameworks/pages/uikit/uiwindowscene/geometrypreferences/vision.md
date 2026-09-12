> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/geometrypreferences/vision](https://developer.apple.com/documentation/uikit/uiwindowscene/geometrypreferences/vision)

# UIWindowScene.GeometryPreferences.Vision (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** visionOS 1.0+

## Declaration

```swift
class Vision
```

## Topics

### Initializers

- [init()](vision/init%28%29.md): Creates a geometry preference with no changes. Update the properties who’s preference should change
- [init(size:minimumSize:maximumSize:resizingRestrictions:)](vision/init%28size_minimumsize_maximumsize_resizingrestrictions_%29.md)

### Instance Properties

- [maximumSize](vision/maximumsize.md)
- [minimumSize](vision/minimumsize.md)
- [resizingRestrictions](vision/resizingrestrictions.md)
- [size](vision/size.md)

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

### Working with window geometry

- [effectiveGeometry](../effectivegeometry.md): The current values for the window scene’s geometry in system space.
- [requestGeometryUpdate(\_:errorHandler:)](../requestgeometryupdate%28__errorhandler_%29.md): Requests an update to the window scene’s geometry using the specified geometry preferences object.
- [UIWindowScene.Geometry](../geometry.md): An object that provides geometry information about the window scene.
- [UIWindowScene.GeometryPreferences](../geometrypreferences.md): An abstract superclass for representing window scene geometry preferences.
- [UIWindowScene.GeometryPreferences.iOS](ios.md): An object that represents the geometry preferences for a window scene in an iOS app.
- [UIWindowScene.GeometryPreferences.Mac](mac.md): An object that represents the geometry preferences for a window scene in an app built with Mac Catalyst.
- [UIProposedSceneSizeNoPreference](../../uiproposedscenesizenopreference.md): Used as the value for a dimension of a size related preference when wanting to leave it unchanged.

# UIWindowSceneGeometryPreferencesVision (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** visionOS 1.0+

## Declaration

```objectivec
@interface UIWindowSceneGeometryPreferencesVision : UIWindowSceneGeometryPreferences
```

## Topics

### Instance Properties

- [maximumSize](../../uiwindowscenegeometrypreferencesvision/maximumsize.md): The preferred maximum size of the scene. Use `UIProposedSceneSizeNoPreference` on a dimension of the size to indicate that axis should be returned to the system default. By default, the value is left unchanged
- [minimumSize](../../uiwindowscenegeometrypreferencesvision/minimumsize.md): The preferred minimum size of the scene. Use `UIProposedSceneSizeNoPreference` on a dimension of the size to indicate that axis should be returned to the system default. By default, the value is left unchanged
- [resizingRestrictions](../../uiwindowscenegeometrypreferencesvision/resizingrestrictions.md): The user resizable restrictions on the window scene By default, the value is left unchanged
- [size](../../uiwindowscenegeometrypreferencesvision/size.md): The preferred system size. Use UIProposedSceneSizeNoPreference to use existing value

### Instance Methods

- [init](vision/init%28%29.md): Creates a geometry preference with no changes. Update the properties who’s preference should change
- [initWithSize:](../../uiwindowscenegeometrypreferencesvision/initwithsize_.md): Creates a geometry preference with a specific size (specifying UIProposedSceneSizeNoPreference for any dimension of size, will specify no preference, keeping that dimension the same if possible)

## Relationships

### Inherits From

- [UIWindowSceneGeometryPreferences](../geometrypreferences.md)

## See Also

### Working with window geometry

- [effectiveGeometry](../effectivegeometry.md): The current values for the window scene’s geometry in system space.
- [requestGeometryUpdateWithPreferences:errorHandler:](../requestgeometryupdate%28__errorhandler_%29.md): Requests an update to the window scene’s geometry using the specified geometry preferences object.
- [UIWindowSceneGeometry](../geometry.md): An object that provides geometry information about the window scene.
- [UIWindowSceneGeometryPreferences](../geometrypreferences.md): An abstract superclass for representing window scene geometry preferences.
- [UIWindowSceneGeometryPreferencesIOS](ios.md): An object that represents the geometry preferences for a window scene in an iOS app.
- [UIWindowSceneGeometryPreferencesMac](mac.md): An object that represents the geometry preferences for a window scene in an app built with Mac Catalyst.
- [UIProposedSceneSizeNoPreference](../../uiproposedscenesizenopreference.md): Used as the value for a dimension of a size related preference when wanting to leave it unchanged.
