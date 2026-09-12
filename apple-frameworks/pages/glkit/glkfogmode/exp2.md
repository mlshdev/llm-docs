> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkfogmode/exp2](https://developer.apple.com/documentation/glkit/glkfogmode/exp2)

# GLKFogMode.exp2 (Swift)

**Framework:** GLKit  
**Kind:** Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

The fog component is calculated as `exp(-(density * distance)^2)` and clamped to the range `[0.0, 1.0]`.

## Declaration

```swift
case exp2
```

## See Also

### Constants

- [GLKFogMode.exp](exp.md): The fog component is calculated as `exp(-density * distance)` and clamped to the range `[0.0, 1.0]`.
- [GLKFogMode.linear](linear.md): The fog component is calculated as `(end - distance) / (end - start)` and clamped to the range `[0.0, 1.0]`.

# GLKFogModeExp2 (Objective-C)

**Framework:** GLKit  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

The fog component is calculated as `exp(-(density * distance)^2)` and clamped to the range `[0.0, 1.0]`.

## Declaration

```objectivec
GLKFogModeExp2
```

## See Also

### Constants

- [GLKFogModeExp](exp.md): The fog component is calculated as `exp(-density * distance)` and clamped to the range `[0.0, 1.0]`.
- [GLKFogModeLinear](linear.md): The fog component is calculated as `(end - distance) / (end - start)` and clamped to the range `[0.0, 1.0]`.
