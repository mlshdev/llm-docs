> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclayernormalizationlayer/normalizedshape-2cz6k](https://developer.apple.com/documentation/mlcompute/mlclayernormalizationlayer/normalizedshape-2cz6k)

# normalizedShape

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The shape of the axes where normalization occurs.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSNumber *> * normalizedShape;
```

<a id="Discussion"></a>

## Discussion

Define the shape of the axes in the dimensions `[w]`, `[h, w]`, or `[c, h, w]`, where `w` is width, `h` is height, and `c` is channel count.

## See Also

### Inspecting Layer Normalization Layers

- [beta](beta.md): Deprecated. The beta tensor.
- [gamma](gamma.md): Deprecated. The gamma tensor.
- [varianceEpsilon](varianceepsilon.md): Deprecated. The variance epsilon you use for numerical stability.
- [betaParameter](betaparameter.md): Deprecated. The beta tensor parameter you use for optimizer updates.
- [gammaParameter](gammaparameter.md): Deprecated. The gamma tensor parameter you use for optimizer updates.
