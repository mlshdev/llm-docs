> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cigaussiangradient](https://developer.apple.com/documentation/coreimage/cigaussiangradient)

# CIGaussianGradient (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a Gaussian gradient filter.

## Declaration

```swift
protocol CIGaussianGradient : CIFilterProtocol
```

## Topics

### Instance Properties

- [center](cigaussiangradient/center.md): The center of the effect as x and y coordinates.
- [color0](cigaussiangradient/color0.md): The first color to use in the gradient.
- [color1](cigaussiangradient/color1.md): The second color to use in the gradient.
- [radius](cigaussiangradient/radius.md): The radius of the Gaussian distribution.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [gaussianGradient()](cifilter-swift.class/gaussiangradient%28%29.md): Generates a gradient that varies from one color to another using a Gaussian distribution.

### Protocols

- [CIHueSaturationValueGradient](cihuesaturationvaluegradient.md): The properties you use to configure a hue-saturation-value gradient filter.
- [CILinearGradient](cilineargradient.md): The properties you use to configure a linear gradient filter.
- [CIRadialGradient](ciradialgradient.md): The properties you use to configure a radial gradient filter.
- [CISmoothLinearGradient](cismoothlineargradient.md): The properties you use to configure a smooth linear gradient filter.

# CIGaussianGradient (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a Gaussian gradient filter.

## Declaration

```objectivec
@protocol CIGaussianGradient <CIFilter>
```

## Topics

### Instance Properties

- [center](cigaussiangradient/center.md): The center of the effect as x and y coordinates.
- [color0](cigaussiangradient/color0.md): The first color to use in the gradient.
- [color1](cigaussiangradient/color1.md): The second color to use in the gradient.
- [radius](cigaussiangradient/radius.md): The radius of the Gaussian distribution.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [gaussianGradientFilter](cifilter-swift.class/gaussiangradient%28%29.md): Generates a gradient that varies from one color to another using a Gaussian distribution.

### Protocols

- [CIHueSaturationValueGradient](cihuesaturationvaluegradient.md): The properties you use to configure a hue-saturation-value gradient filter.
- [CILinearGradient](cilineargradient.md): The properties you use to configure a linear gradient filter.
- [CIRadialGradient](ciradialgradient.md): The properties you use to configure a radial gradient filter.
- [CISmoothLinearGradient](cismoothlineargradient.md): The properties you use to configure a smooth linear gradient filter.
