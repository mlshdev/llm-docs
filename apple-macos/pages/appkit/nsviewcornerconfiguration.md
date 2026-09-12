> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcornerconfiguration](https://developer.apple.com/documentation/appkit/nsviewcornerconfiguration)

# NSViewCornerConfiguration (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 27.0+

A configuration object that defines the corner styles of a view’s overall shape.

## Declaration

```swift
class NSViewCornerConfiguration
```

## Topics

### Type Properties

- [capsule](nsviewcornerconfiguration/capsule.md): A configuration where the container is to take on a capsule shape, scaling with the view’s size.

### Type Methods

- [capsule(maximumRadius:)](nsviewcornerconfiguration/capsule%28maximumradius_%29.md): A configuration where the container is to take on a capsule shape, scaling with the view’s size. and clamped to the `maximumRadius`.
- [corners(radius:)](nsviewcornerconfiguration/corners%28radius_%29.md): A configuration that applies the given radius independently to all corners.
- [corners(topLeftRadius:topRightRadius:bottomLeftRadius:bottomRightRadius:)](nsviewcornerconfiguration/corners%28topleftradius_toprightradius_bottomleftradius_bottomrightradius_%29.md): A configuration with independent radii for each corner.
- [uniformBottomRadius(\_:topLeftRadius:topRightRadius:)](nsviewcornerconfiguration/uniformbottomradius%28__topleftradius_toprightradius_%29.md): A configuration that applies the `bottomRadius` uniformly to the bottom-left and bottom-right corners, with optional independent radii for the top-left and top-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.
- [uniformCorners(radius:)](nsviewcornerconfiguration/uniformcorners%28radius_%29.md): A configuration that applies the given radius uniformly to all corners, using the largest of the resolved corner radii when they differ.
- [uniformCorners(radius:topLeftRadius:topRightRadius:bottomLeftRadius:bottomRightRadius:)](nsviewcornerconfiguration/uniformcorners%28radius_topleftradius_toprightradius_bottomleftradius_bottomrightradius_%29.md): A configuration that applies the given uniform radius uniformly to all corners that are otherwise unspecified. Any specified corner is independent of the others.
- [uniformEdges(leftRadius:rightRadius:)](nsviewcornerconfiguration/uniformedges%28leftradius_rightradius_%29.md): A configuration that applies the `leftRadius` uniformly to the top-left and bottom-left corners, and the `rightRadius` uniformly to the top-right and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.
- [uniformEdges(topRadius:bottomRadius:)](nsviewcornerconfiguration/uniformedges%28topradius_bottomradius_%29.md): A configuration that applies the `topRadius` uniformly to the top-left and top-right corners, and the `bottomRadius` uniformly to the bottom-left and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.
- [uniformLeftRadius(\_:topRightRadius:bottomRightRadius:)](nsviewcornerconfiguration/uniformleftradius%28__toprightradius_bottomrightradius_%29.md): A configuration that applies the `leftRadius` uniformly to the top-left and bottom-left corners, with optional independent radii for the top-right and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.
- [uniformRightRadius(\_:topLeftRadius:bottomLeftRadius:)](nsviewcornerconfiguration/uniformrightradius%28__topleftradius_bottomleftradius_%29.md): A configuration that applies the `rightRadius` uniformly to the top-right and bottom-right corners, with optional independent radii for the top-left and bottom-left corners. When the uniform corners differ, it uses the largest of the resolved corner radii.
- [uniformTopRadius(\_:bottomLeftRadius:bottomRightRadius:)](nsviewcornerconfiguration/uniformtopradius%28__bottomleftradius_bottomrightradius_%29.md): A configuration that applies the `topRadius` uniformly to the top-left and top-right corners, with optional independent radii for the bottom-left and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Corner configuration

- [NSViewCornerRadii](nsviewcornerradii.md): Provides a structured way to define custom corner radii for each corner of a view, along with a corner curve.
- [NSViewCornerRadius](nsviewcornerradius.md): Represents a radius used to round a corner. It supports fixed and adaptive configurations.

# NSViewCornerConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 27.0+

A configuration object that defines the corner styles of a view’s overall shape.

## Declaration

```objectivec
@interface NSViewCornerConfiguration : NSObject
```

## Topics

### Type Properties

- [capsuleCornerConfiguration](nsviewcornerconfiguration/capsule.md): A configuration where the container is to take on a capsule shape, scaling with the view’s size.

### Type Methods

- [capsuleCornerConfigurationWithMaximumRadius:](nsviewcornerconfiguration/capsule%28maximumradius_%29.md): A configuration where the container is to take on a capsule shape, scaling with the view’s size. and clamped to the `maximumRadius`.
- [configurationWithRadius:](nsviewcornerconfiguration/corners%28radius_%29.md): A configuration that applies the given radius independently to all corners.
- [configurationWithTopLeftRadius:topRightRadius:bottomLeftRadius:bottomRightRadius:](nsviewcornerconfiguration/corners%28topleftradius_toprightradius_bottomleftradius_bottomrightradius_%29.md): A configuration with independent radii for each corner.
- [configurationWithUniformBottomRadius:topLeftRadius:topRightRadius:](nsviewcornerconfiguration/uniformbottomradius%28__topleftradius_toprightradius_%29.md): A configuration that applies the `bottomRadius` uniformly to the bottom-left and bottom-right corners, with optional independent radii for the top-left and top-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.
- [configurationWithUniformRadius:](nsviewcornerconfiguration/uniformcorners%28radius_%29.md): A configuration that applies the given radius uniformly to all corners, using the largest of the resolved corner radii when they differ.
- [configurationWithUniformRadius:topLeftRadius:topRightRadius:bottomLeftRadius:bottomRightRadius:](nsviewcornerconfiguration/uniformcorners%28radius_topleftradius_toprightradius_bottomleftradius_bottomrightradius_%29.md): A configuration that applies the given uniform radius uniformly to all corners that are otherwise unspecified. Any specified corner is independent of the others.
- [configurationWithUniformLeftRadius:rightRadius:](nsviewcornerconfiguration/uniformedges%28leftradius_rightradius_%29.md): A configuration that applies the `leftRadius` uniformly to the top-left and bottom-left corners, and the `rightRadius` uniformly to the top-right and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.
- [configurationWithUniformTopRadius:bottomRadius:](nsviewcornerconfiguration/uniformedges%28topradius_bottomradius_%29.md): A configuration that applies the `topRadius` uniformly to the top-left and top-right corners, and the `bottomRadius` uniformly to the bottom-left and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.
- [configurationWithUniformLeftRadius:topRightRadius:bottomRightRadius:](nsviewcornerconfiguration/uniformleftradius%28__toprightradius_bottomrightradius_%29.md): A configuration that applies the `leftRadius` uniformly to the top-left and bottom-left corners, with optional independent radii for the top-right and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.
- [configurationWithUniformRightRadius:topLeftRadius:bottomLeftRadius:](nsviewcornerconfiguration/uniformrightradius%28__topleftradius_bottomleftradius_%29.md): A configuration that applies the `rightRadius` uniformly to the top-right and bottom-right corners, with optional independent radii for the top-left and bottom-left corners. When the uniform corners differ, it uses the largest of the resolved corner radii.
- [configurationWithUniformTopRadius:bottomLeftRadius:bottomRightRadius:](nsviewcornerconfiguration/uniformtopradius%28__bottomleftradius_bottomrightradius_%29.md): A configuration that applies the `topRadius` uniformly to the top-left and top-right corners, with optional independent radii for the bottom-left and bottom-right corners. When the uniform corners differ, it uses the largest of the resolved corner radii.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Corner configuration

- [NSViewCornerRadii](nsviewcornerradii.md): Provides a structured way to define custom corner radii for each corner of a view, along with a corner curve.
- [NSViewCornerRadius](nsviewcornerradius.md): Represents a radius used to round a corner. It supports fixed and adaptive configurations.
