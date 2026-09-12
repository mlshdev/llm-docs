> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnactiontimingfunction](https://developer.apple.com/documentation/scenekit/scnactiontimingfunction)

# SCNActionTimingFunction (Swift)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The signature for a block that manages animation timing, used by the [timingFunction](scnaction/timingfunction.md) property.

## Declaration

```swift
typealias SCNActionTimingFunction = (Float) -> Float
```

<a id="Discussion"></a>

## Discussion

The block takes a single parameter:

- **time**: A fraction of the action’s The input value for the timing function, as determined by the [timingMode](scnaction/timingmode.md) property and the action’s current progress.

Your block must return a floating-point value between `0.0` and `1.0`, where `0.0` represents the starting state of the action’s animation and `1.0` represents the end state.

## See Also

### Constants

- [SCNActionTimingMode](scnactiontimingmode.md): Constants affecting the animation curve of an action, used by the [timingMode](scnaction/timingmode.md) property.

# SCNActionTimingFunction (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The signature for a block that manages animation timing, used by the [timingFunction](scnaction/timingfunction.md) property.

## Declaration

```objectivec
typedef float (^)(float) SCNActionTimingFunction;
```

<a id="Discussion"></a>

## Discussion

The block takes a single parameter:

- **time**: A fraction of the action’s The input value for the timing function, as determined by the [timingMode](scnaction/timingmode.md) property and the action’s current progress.

Your block must return a floating-point value between `0.0` and `1.0`, where `0.0` represents the starting state of the action’s animation and `1.0` represents the end state.

## See Also

### Constants

- [SCNActionTimingMode](scnactiontimingmode.md): Constants affecting the animation curve of an action, used by the [timingMode](scnaction/timingmode.md) property.
