> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclayernormalizationlayer/gamma](https://developer.apple.com/documentation/mlcompute/mlclayernormalizationlayer/gamma)

# gamma (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The gamma tensor.

## Declaration

```swift
var gamma: MLCTensor? { get }
```

## See Also

### Inspecting Layer Normalization Layers

- [normalizedShape](normalizedshape-8ujvv.md): Deprecated. The shape of the axes where normalization occurs.
- [beta](beta.md): Deprecated. The beta tensor.
- [varianceEpsilon](varianceepsilon.md): Deprecated. The variance epsilon you use for numerical stability.
- [betaParameter](betaparameter.md): Deprecated. The beta tensor parameter you use for optimizer updates.
- [gammaParameter](gammaparameter.md): Deprecated. The gamma tensor parameter you use for optimizer updates.

# gamma (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The gamma tensor.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) MLCTensor * gamma;
```

## See Also

### Inspecting Layer Normalization Layers

- [normalizedShape](normalizedshape-2cz6k.md): Deprecated. The shape of the axes where normalization occurs.
- [beta](beta.md): Deprecated. The beta tensor.
- [varianceEpsilon](varianceepsilon.md): Deprecated. The variance epsilon you use for numerical stability.
- [betaParameter](betaparameter.md): Deprecated. The beta tensor parameter you use for optimizer updates.
- [gammaParameter](gammaparameter.md): Deprecated. The gamma tensor parameter you use for optimizer updates.
