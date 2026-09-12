> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkfogmode/linear](https://developer.apple.com/documentation/glkit/glkfogmode/linear)

# GLKFogMode.linear (Swift)

**Framework:** GLKit  
**Kind:** Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

The fog component is calculated as `(end - distance) / (end - start)` and clamped to the range `[0.0, 1.0]`.

## Declaration

```swift
case linear
```

## See Also

### Constants

- [GLKFogMode.exp](exp.md): The fog component is calculated as `exp(-density * distance)` and clamped to the range `[0.0, 1.0]`.
- [GLKFogMode.exp2](exp2.md): The fog component is calculated as `exp(-(density * distance)^2)` and clamped to the range `[0.0, 1.0]`.

# GLKFogModeLinear (Objective-C)

**Framework:** GLKit  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

The fog component is calculated as `(end - distance) / (end - start)` and clamped to the range `[0.0, 1.0]`.

## Declaration

```objectivec
GLKFogModeLinear
```

## See Also

### Constants

- [GLKFogModeExp](exp.md): The fog component is calculated as `exp(-density * distance)` and clamped to the range `[0.0, 1.0]`.
- [GLKFogModeExp2](exp2.md): The fog component is calculated as `exp(-(density * distance)^2)` and clamped to the range `[0.0, 1.0]`.
