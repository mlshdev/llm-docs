> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/gaussiansplatresource/activationfunction/exponential

# GaussianSplatResource.ActivationFunction.exponential

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Applies an exponential function to each value.

## Declaration

```swift
case exponential
```

<a id="discussion"></a>

## Discussion

Choose this when your values are stored in log space, as scale parameters often are. The framework computes *f(x) = e^x*.
