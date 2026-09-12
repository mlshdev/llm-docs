> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlmathmode/relaxed](https://developer.apple.com/documentation/metal/mtlmathmode/relaxed)

# MTLMathMode.relaxed (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math, while honoring Inf/NaN.

## Declaration

```swift
case relaxed
```

<a id="discussion"></a>

## Discussion

This is the default for Apple silicon devices.

## See Also

### Modes

- [MTLMathMode.fast](fast.md): An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math.
- [MTLMathMode.safe](safe.md): An indicator of the mode the compiler uses to disable unsafe floating-point optimizations by preventing the compiler from making any transformations that could affect the results.

# MTLMathModeRelaxed (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math, while honoring Inf/NaN.

## Declaration

```objectivec
MTLMathModeRelaxed
```

<a id="discussion"></a>

## Discussion

This is the default for Apple silicon devices.

## See Also

### Modes

- [MTLMathModeFast](fast.md): An indicator of the mode the compiler uses to make aggressive, potentially lossy assumptions about floating-point math.
- [MTLMathModeSafe](safe.md): An indicator of the mode the compiler uses to disable unsafe floating-point optimizations by preventing the compiler from making any transformations that could affect the results.
