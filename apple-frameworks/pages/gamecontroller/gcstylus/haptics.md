> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcstylus/haptics](https://developer.apple.com/documentation/gamecontroller/gcstylus/haptics)

# haptics (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

Gets the haptics profile for the stylus, if supported.

## Declaration

```swift
var haptics: GCDeviceHaptics? { get }
```

<a id="discussion"></a>

## Discussion

The haptics profile is represented as a `GCDeviceHaptics` instance, from which you can create `CHHapticEngine` instances targeting the haptic actuator(s) in the accessory.

Not all stylus accessories support haptic feedback.  If the accessory does not support haptic feedback, this property is `nil`.

> **Note**

> Haptics are a drain on the accessory’s battery, and can be distracting when used excessively. Use haptic feedback judiciously and in response to meaningful user interactions.

## See Also

### Getting input values and haptics

- [input](input.md): Gets the input profile for the stylus.

# haptics (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

Gets the haptics profile for the stylus, if supported.

## Declaration

```objectivec
@property (strong, readonly, nullable) GCDeviceHaptics * haptics;
```

<a id="discussion"></a>

## Discussion

The haptics profile is represented as a `GCDeviceHaptics` instance, from which you can create `CHHapticEngine` instances targeting the haptic actuator(s) in the accessory.

Not all stylus accessories support haptic feedback.  If the accessory does not support haptic feedback, this property is `nil`.

> **Note**

> Haptics are a drain on the accessory’s battery, and can be distracting when used excessively. Use haptic feedback judiciously and in response to meaningful user interactions.

## See Also

### Getting input values and haptics

- [input](input.md): Gets the input profile for the stylus.
