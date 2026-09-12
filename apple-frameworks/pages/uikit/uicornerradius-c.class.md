> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicornerradius-c.class](https://developer.apple.com/documentation/uikit/uicornerradius-c.class)

# UICornerRadius

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A type that represents the radius the system uses to round a corner.

## Declaration

```objectivec
@interface UICornerRadius : NSObject
```

## Topics

### Defining a radius

- [containerConcentricRadius](uicornerradius-c.class/containerconcentricradius.md): A dynamic corner radius calculated using the geometry of the view and its container.
- [containerConcentricRadiusWithMinimum:](uicornerradius-c.class/containerconcentricradiuswithminimum_.md): A dynamic corner radius calculated using the geometry of the view and its container limited to a minimum radius.
- [fixedRadius:](uicornerradius-c.class/fixedradius_.md): A fixed corner radius in points.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuring a view’s corners

- [cornerConfiguration](uiview/cornerconfiguration-3m8ya.md): A configuration that defines the corners of the view.
- [UICornerConfiguration](uicornerconfiguration-c.class.md): A configuration that defines how corner radii are mapped to the corners of a rectangle.
- [effectiveRadiusForCorner:](uiview/effectiveradius%28corner_%29.md): Returns the effective radius for the corner you provide, calculated using the view’s current corner configuration.
