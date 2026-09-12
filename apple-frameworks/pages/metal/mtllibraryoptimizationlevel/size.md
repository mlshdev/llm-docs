> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibraryoptimizationlevel/size](https://developer.apple.com/documentation/metal/mtllibraryoptimizationlevel/size)

# MTLLibraryOptimizationLevel.size (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An optimization option for the Metal compiler that prioritizes minimizing the size of its output binaries, which may also reduce compile time.

## Declaration

```swift
case size
```

## Mentioned In

- [Minimizing the binary size of a shader library](../minimizing-the-binary-size-of-a-shader-library.md)

<a id="discussion"></a>

## Discussion

This option is similar to [MTLLibraryOptimizationLevel.default](default.md), but adds optimizations that prioritize minimizing a shader’s executable size, which may also reduce compile time.

## See Also

### Optimization options

- [MTLLibraryOptimizationLevel.default](default.md): An optimization option for the Metal compiler that prioritizes runtime performance.

# MTLLibraryOptimizationLevelSize (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An optimization option for the Metal compiler that prioritizes minimizing the size of its output binaries, which may also reduce compile time.

## Declaration

```objectivec
MTLLibraryOptimizationLevelSize
```

## Mentioned In

- [Minimizing the binary size of a shader library](../minimizing-the-binary-size-of-a-shader-library.md)

<a id="discussion"></a>

## Discussion

This option is similar to [MTLLibraryOptimizationLevelDefault](default.md), but adds optimizations that prioritize minimizing a shader’s executable size, which may also reduce compile time.

## See Also

### Optimization options

- [MTLLibraryOptimizationLevelDefault](default.md): An optimization option for the Metal compiler that prioritizes runtime performance.
