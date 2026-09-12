> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/fogcolor](https://developer.apple.com/documentation/scenekit/scnscene/fogcolor)

# fogColor (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The color of the fog effect to be rendered with the scene. Animatable.

## Declaration

```swift
var fogColor: Any { get set }
```

<a id="Discussion"></a>

## Discussion

This property’s value can be an [NSColor](https://developer.apple.com/documentation/appkit/nscolor) object (in macOS), a [UIColor](../../uikit/uicolor.md) object (in iOS), or a [CGColor](../../coregraphics/cgcolor.md) object. The default fog color is white.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adding Fog to a Scene

- [fogStartDistance](fogstartdistance.md): The distance from a point of view at which the scene’s contents begin to be obscured by fog. Animatable.
- [fogEndDistance](fogenddistance.md): The distance from a point of view at which the scene’s contents are completely obscured by fog. Animatable.
- [fogDensityExponent](fogdensityexponent.md): The transition curve for the fog’s intensity between its start and end distances. Animatable.

# fogColor (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The color of the fog effect to be rendered with the scene. Animatable.

## Declaration

```objectivec
@property (nonatomic, retain) id fogColor;
```

<a id="Discussion"></a>

## Discussion

This property’s value can be an [NSColor](https://developer.apple.com/documentation/appkit/nscolor) object (in macOS), a [UIColor](../../uikit/uicolor.md) object (in iOS), or a [CGColorRef](../../coregraphics/cgcolor.md) object. The default fog color is white.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adding Fog to a Scene

- [fogStartDistance](fogstartdistance.md): The distance from a point of view at which the scene’s contents begin to be obscured by fog. Animatable.
- [fogEndDistance](fogenddistance.md): The distance from a point of view at which the scene’s contents are completely obscured by fog. Animatable.
- [fogDensityExponent](fogdensityexponent.md): The transition curve for the fog’s intensity between its start and end distances. Animatable.
