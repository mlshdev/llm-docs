> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cilinescreen](https://developer.apple.com/documentation/coreimage/cilinescreen)

# CILineScreen (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a line screen filter.

## Declaration

```swift
protocol CILineScreen : CIFilterProtocol
```

## Topics

### Instance Properties

- [angle](cilinescreen/angle.md): The angle of the pattern.
- [center](cilinescreen/center.md): The x and y position to use as the center of the line screen pattern.
- [inputImage](cilinescreen/inputimage.md): The image to use as an input image.
- [sharpness](cilinescreen/sharpness.md): The sharpness of the pattern.
- [width](cilinescreen/width.md): The distance between lines in the pattern.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [lineScreen()](cifilter-swift.class/linescreen%28%29.md): Creates a monochrome image with a series of small lines to add detail.

### Protocols

- [CICircularScreen](cicircularscreen.md): The properties you use to configure a circular screen filter.
- [CICMYKHalftone](cicmykhalftone.md): The properties you use to configure a CMYK halftone filter.
- [CIDotScreen](cidotscreen.md): The properties you use to configure a dot screen filter.
- [CIHatchedScreen](cihatchedscreen.md): The properties you use to configure a hatched screen filter.

# CILineScreen (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a line screen filter.

## Declaration

```objectivec
@protocol CILineScreen <CIFilter>
```

## Topics

### Instance Properties

- [angle](cilinescreen/angle.md): The angle of the pattern.
- [center](cilinescreen/center.md): The x and y position to use as the center of the line screen pattern.
- [inputImage](cilinescreen/inputimage.md): The image to use as an input image.
- [sharpness](cilinescreen/sharpness.md): The sharpness of the pattern.
- [width](cilinescreen/width.md): The distance between lines in the pattern.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [lineScreenFilter](cifilter-swift.class/linescreen%28%29.md): Creates a monochrome image with a series of small lines to add detail.

### Protocols

- [CICircularScreen](cicircularscreen.md): The properties you use to configure a circular screen filter.
- [CICMYKHalftone](cicmykhalftone.md): The properties you use to configure a CMYK halftone filter.
- [CIDotScreen](cidotscreen.md): The properties you use to configure a dot screen filter.
- [CIHatchedScreen](cihatchedscreen.md): The properties you use to configure a hatched screen filter.
