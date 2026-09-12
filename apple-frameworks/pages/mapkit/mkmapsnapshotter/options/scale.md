> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsnapshotter/options/scale](https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/options/scale)

# scale (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The scale factor to use when creating the image.

> Use [traitCollection](../snapshot/traitcollection.md) instead.

## Declaration

```swift
var scale: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is either `1.0` or `2.0`, depending on whether the device has a standard or Retina display. Set the value to `1.0` if you want to display the resulting image on a standard resolution display. Set the value to 2.0 if you want to display the image on a Retina display or want to use the image for printing.

This snapshotter sets this property to a default value that corresponds to the resolution of the current device’s display. You can change the value as needed to generate an image suitable for display on a different device.

## See Also

### Configuring the image output

- [traitCollection](traitcollection.md): Traits that determine the appearance of the map snapshot.
- [size](size.md): The size of the image that you want to create.
- [appearance](appearance.md): The visual style (light or dark) to apply to the map when rendering the snapshot image.

# scale (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The scale factor to use when creating the image.

> Use [traitCollection](../snapshot/traitcollection.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat scale;
```

<a id="Discussion"></a>

## Discussion

The value of this property is either `1.0` or `2.0`, depending on whether the device has a standard or Retina display. Set the value to `1.0` if you want to display the resulting image on a standard resolution display. Set the value to 2.0 if you want to display the image on a Retina display or want to use the image for printing.

This snapshotter sets this property to a default value that corresponds to the resolution of the current device’s display. You can change the value as needed to generate an image suitable for display on a different device.

## See Also

### Configuring the image output

- [traitCollection](traitcollection.md): Traits that determine the appearance of the map snapshot.
- [size](size.md): The size of the image that you want to create.
- [appearance](appearance.md): The visual style (light or dark) to apply to the map when rendering the snapshot image.
