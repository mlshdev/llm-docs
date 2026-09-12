> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mloptimizationhints-c.class](https://developer.apple.com/documentation/coreml/mloptimizationhints-c.class)

# MLOptimizationHints

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

MLOptimizationHints

## Declaration

```objectivec
@interface MLOptimizationHints : NSObject
```

<a id="overview"></a>

## Overview

An object to hold hints that CoreML could use for further optimization

## Topics

### Getting the reshape frequency

- [reshapeFrequency](mloptimizationhints-c.class/reshapefrequency.md): The anticipated reshape frequency

### Getting the specialization strategy

- [specializationStrategy](mloptimizationhints-c.class/specializationstrategy.md): Optimization strategy for the model specialization.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Optimization

- [Analyzing a Core ML model’s performance in Xcode](analyzing-a-core-ml-model-s-performance-in-xcode.md): Measure how your model runs on your Mac or a connected device by generating a performance report in Xcode.
