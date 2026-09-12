> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/effectivegeometry](https://developer.apple.com/documentation/uikit/uiwindowscene/effectivegeometry)

# effectiveGeometry (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The current values for the window scene’s geometry in system space.

## Declaration

```swift
var effectiveGeometry: UIWindowScene.Geometry { get }
```

<a id="Discussion"></a>

## Discussion

This property is key-value observing (KVO) compliant. Observing [effectiveGeometry](effectivegeometry.md) is the recommended way to receive notifications of changes to the window scene’s geometry. These changes can occur because of user interaction or as a result of the system resolving a geometry request.

## See Also

### Working with window geometry

- [requestGeometryUpdate(\_:errorHandler:)](requestgeometryupdate%28__errorhandler_%29.md): Requests an update to the window scene’s geometry using the specified geometry preferences object.
- [UIWindowScene.Geometry](geometry.md): An object that provides geometry information about the window scene.
- [UIWindowScene.GeometryPreferences](geometrypreferences.md): An abstract superclass for representing window scene geometry preferences.
- [UIWindowScene.GeometryPreferences.iOS](geometrypreferences/ios.md): An object that represents the geometry preferences for a window scene in an iOS app.
- [UIWindowScene.GeometryPreferences.Mac](geometrypreferences/mac.md): An object that represents the geometry preferences for a window scene in an app built with Mac Catalyst.
- [UIWindowScene.GeometryPreferences.Vision](geometrypreferences/vision.md)
- [UIProposedSceneSizeNoPreference](../uiproposedscenesizenopreference.md): Used as the value for a dimension of a size related preference when wanting to leave it unchanged.

# effectiveGeometry (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The current values for the window scene’s geometry in system space.

## Declaration

```objectivec
@property (nonatomic, readonly) UIWindowSceneGeometry * effectiveGeometry;
```

<a id="Discussion"></a>

## Discussion

This property is key-value observing (KVO) compliant. Observing [effectiveGeometry](effectivegeometry.md) is the recommended way to receive notifications of changes to the window scene’s geometry. These changes can occur because of user interaction or as a result of the system resolving a geometry request.

## See Also

### Working with window geometry

- [requestGeometryUpdateWithPreferences:errorHandler:](requestgeometryupdate%28__errorhandler_%29.md): Requests an update to the window scene’s geometry using the specified geometry preferences object.
- [UIWindowSceneGeometry](geometry.md): An object that provides geometry information about the window scene.
- [UIWindowSceneGeometryPreferences](geometrypreferences.md): An abstract superclass for representing window scene geometry preferences.
- [UIWindowSceneGeometryPreferencesIOS](geometrypreferences/ios.md): An object that represents the geometry preferences for a window scene in an iOS app.
- [UIWindowSceneGeometryPreferencesMac](geometrypreferences/mac.md): An object that represents the geometry preferences for a window scene in an app built with Mac Catalyst.
- [UIWindowSceneGeometryPreferencesVision](geometrypreferences/vision.md)
- [UIProposedSceneSizeNoPreference](../uiproposedscenesizenopreference.md): Used as the value for a dimension of a size related preference when wanting to leave it unchanged.
