> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gchapticdurationinfinite](https://developer.apple.com/documentation/gamecontroller/gchapticdurationinfinite)

# GCHapticDurationInfinite (Swift)

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An infinite duration for a haptics event.

## Declaration

```swift
let GCHapticDurationInfinite: Float
```

<a id="Discussion"></a>

## Discussion

Use this constant to create a [CHHapticEvent](../corehaptics/chhapticevent.md) object with an infinite duration. For example, create an infinite haptic event that you update in a loop to adjust a controller’s motor intensity.

## See Also

### Creating a haptics engine

- [createEngine(withLocality:)](gcdevicehaptics/createengine%28withlocality_%29.md): Creates a haptics engine with the specified locality.

# GCHapticDurationInfinite (Objective-C)

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An infinite duration for a haptics event.

## Declaration

```objectivec
extern const float GCHapticDurationInfinite;
```

<a id="Discussion"></a>

## Discussion

Use this constant to create a [CHHapticEvent](../corehaptics/chhapticevent.md) object with an infinite duration. For example, create an infinite haptic event that you update in a loop to adjust a controller’s motor intensity.

## See Also

### Creating a haptics engine

- [createEngineWithLocality:](gcdevicehaptics/createengine%28withlocality_%29.md): Creates a haptics engine with the specified locality.
