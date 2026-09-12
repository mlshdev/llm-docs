> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/gaussiansplatresource/activationfunction](https://developer.apple.com/documentation/realitykit/gaussiansplatresource/activationfunction)

# GaussianSplatResource.ActivationFunction

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A transformation the framework applies to raw scale or opacity values before rendering.

## Declaration

```swift
enum ActivationFunction
```

<a id="overview"></a>

## Overview

Trained Gaussian splat models often store scale and opacity in a form that needs a mathematical transformation. Choose the function that matches how your data was trained.

## Topics

### Enumeration Cases

- [GaussianSplatResource.ActivationFunction.exponential](activationfunction/exponential.md): Applies an exponential function to each value.
- [GaussianSplatResource.ActivationFunction.identity](activationfunction/identity.md): Uses the values without transformation.
- [GaussianSplatResource.ActivationFunction.sigmoid](activationfunction/sigmoid.md): Applies a sigmoid function to each value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
