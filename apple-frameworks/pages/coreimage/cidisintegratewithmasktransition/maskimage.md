> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/cidisintegratewithmasktransition/maskimage

# maskImage (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

An image that defines the shape to use when disintegrating from the source to the target image.

## Declaration

```swift
var maskImage: CIImage? { get set }
```

## See Also

### Instance Properties

- [shadowDensity](shadowdensity.md): The density of the shadow the mask creates.
- [shadowOffset](shadowoffset.md): The offset of the shadow the mask creates.
- [shadowRadius](shadowradius.md): The radius of the shadow the mask creates.

# maskImage (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An image that defines the shape to use when disintegrating from the source to the target image.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CIImage * maskImage;
```

## See Also

### Instance Properties

- [shadowDensity](shadowdensity.md): The density of the shadow the mask creates.
- [shadowOffset](shadowoffset.md): The offset of the shadow the mask creates.
- [shadowRadius](shadowradius.md): The radius of the shadow the mask creates.
