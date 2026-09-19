> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/compileoptions/optimizationpreference-swift.struct

# BNNSGraph.CompileOptions.OptimizationPreference

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

Constants that describe the compilation-optimization preference.

## Declaration

```swift
struct OptimizationPreference
```

<a id="overview"></a>

## Overview

Use the constants that this structure defines to specify whether the BNNS library compiles a graph that’s optimized either for performance or for a smaller footprint.

## Topics

### Optimization preferences

- [internalRepresentationSize](optimizationpreference-swift.struct/internalrepresentationsize.md): A constant that specifies compilation optimization for smallest graph size on disk.
- [performance](optimizationpreference-swift.struct/performance.md): A constant that specifies compilation optimization for best execution performance.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
