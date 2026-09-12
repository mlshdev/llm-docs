> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkfogmode](https://developer.apple.com/documentation/glkit/glkfogmode)

# GLKFogMode (Swift)

**Framework:** GLKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

A mode that describes how the fog component is calculated for the fragment.

## Declaration

```swift
enum GLKFogMode
```

## Topics

### Constants

- [GLKFogMode.exp](glkfogmode/exp.md): The fog component is calculated as `exp(-density * distance)` and clamped to the range `[0.0, 1.0]`.
- [GLKFogMode.exp2](glkfogmode/exp2.md): The fog component is calculated as `exp(-(density * distance)^2)` and clamped to the range `[0.0, 1.0]`.
- [GLKFogMode.linear](glkfogmode/linear.md): The fog component is calculated as `(end - distance) / (end - start)` and clamped to the range `[0.0, 1.0]`.

### Initializers

- [init(rawValue:)](glkfogmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# GLKFogMode (Objective-C)

**Framework:** GLKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

A mode that describes how the fog component is calculated for the fragment.

## Declaration

```objectivec
enum GLKFogMode : GLint;
```

## Topics

### Constants

- [GLKFogModeExp](glkfogmode/exp.md): The fog component is calculated as `exp(-density * distance)` and clamped to the range `[0.0, 1.0]`.
- [GLKFogModeExp2](glkfogmode/exp2.md): The fog component is calculated as `exp(-(density * distance)^2)` and clamped to the range `[0.0, 1.0]`.
- [GLKFogModeLinear](glkfogmode/linear.md): The fog component is calculated as `(end - distance) / (end - start)` and clamped to the range `[0.0, 1.0]`.
