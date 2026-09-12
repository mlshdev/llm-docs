> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlmathmode/safe](https://developer.apple.com/documentation/metal/mtlmathmode/safe)

# MTLMathMode.safe (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An indicator of the mode the compiler uses to disable unsafe floating-point optimizations by preventing the compiler from making any transformations that could affect the results.

## Declaration

```swift
case safe
```

## See Also

### Modes

- [MTLMathMode.fast](fast.md): An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math.
- [MTLMathMode.relaxed](relaxed.md): An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math, while honoring Inf/NaN.

# MTLMathModeSafe (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An indicator of the mode the compiler uses to disable unsafe floating-point optimizations by preventing the compiler from making any transformations that could affect the results.

## Declaration

```objectivec
MTLMathModeSafe
```

## See Also

### Modes

- [MTLMathModeFast](fast.md): An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math.
- [MTLMathModeRelaxed](relaxed.md): An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math, while honoring Inf/NaN.
