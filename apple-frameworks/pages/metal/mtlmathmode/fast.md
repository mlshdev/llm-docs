> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlmathmode/fast

# MTLMathMode.fast (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math.

## Declaration

```swift
case fast
```

<a id="discussion"></a>

## Discussion

This is the default for Intel and AMD devices.

## See Also

### Modes

- [MTLMathMode.relaxed](relaxed.md): An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math, while honoring Inf/NaN.
- [MTLMathMode.safe](safe.md): An indicator of the mode the compiler uses to disable unsafe floating-point optimizations by preventing the compiler from making any transformations that could affect the results.

# MTLMathModeFast (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math.

## Declaration

```objectivec
MTLMathModeFast
```

<a id="discussion"></a>

## Discussion

This is the default for Intel and AMD devices.

## See Also

### Modes

- [MTLMathModeRelaxed](relaxed.md): An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math, while honoring Inf/NaN.
- [MTLMathModeSafe](safe.md): An indicator of the mode the compiler uses to disable unsafe floating-point optimizations by preventing the compiler from making any transformations that could affect the results.
