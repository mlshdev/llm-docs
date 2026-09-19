> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphfftdescriptor/inverse

# inverse (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean-valued parameter that defines the phase factor sign for Fourier transforms.

## Declaration

```swift
var inverse: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When set to `YES` graph uses the positive phase factor: `exp(+i 2Pi mu nu / n)`, when computing the (inverse) Fourier transform. Otherwise MPSGraph uses the negative phase factor: `exp(-i 2Pi mu nu / n)`, when computing the Fourier transform. Default value: `NO`.

# inverse (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean-valued parameter that defines the phase factor sign for Fourier transforms.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL inverse;
```

<a id="discussion"></a>

## Discussion

When set to `YES` graph uses the positive phase factor: `exp(+i 2Pi mu nu / n)`, when computing the (inverse) Fourier transform. Otherwise MPSGraph uses the negative phase factor: `exp(-i 2Pi mu nu / n)`, when computing the Fourier transform. Default value: `NO`.
