> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cisharpenluminance](https://developer.apple.com/documentation/coreimage/cisharpenluminance)

# CISharpenLuminance (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a sharpen luminance filter.

## Declaration

```swift
protocol CISharpenLuminance : CIFilterProtocol
```

## Topics

### Instance Properties

- [inputImage](cisharpenluminance/inputimage.md): The image to use as an input image.
- [radius](cisharpenluminance/radius.md): The distance from the center of the effect.
- [sharpness](cisharpenluminance/sharpness.md): The amount of sharpening to apply.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [sharpenLuminance()](cifilter-swift.class/sharpenluminance%28%29.md): Applies a sharpening effect to an image.

### Protocols

- [CIUnsharpMask](ciunsharpmask.md): The properties you use to configure an unsharp mask filter.

# CISharpenLuminance (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a sharpen luminance filter.

## Declaration

```objectivec
@protocol CISharpenLuminance <CIFilter>
```

## Topics

### Instance Properties

- [inputImage](cisharpenluminance/inputimage.md): The image to use as an input image.
- [radius](cisharpenluminance/radius.md): The distance from the center of the effect.
- [sharpness](cisharpenluminance/sharpness.md): The amount of sharpening to apply.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [sharpenLuminanceFilter](cifilter-swift.class/sharpenluminance%28%29.md): Applies a sharpening effect to an image.

### Protocols

- [CIUnsharpMask](ciunsharpmask.md): The properties you use to configure an unsharp mask filter.
