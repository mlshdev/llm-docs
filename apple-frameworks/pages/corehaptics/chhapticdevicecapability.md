> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticdevicecapability](https://developer.apple.com/documentation/corehaptics/chhapticdevicecapability)

# CHHapticDeviceCapability (Swift)

**Framework:** Core Haptics  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A protocol that defines haptics and audio capabilities of a device.

## Declaration

```swift
protocol CHHapticDeviceCapability
```

## Topics

### Determining Support for Haptics

- [supportsAudio](chhapticdevicecapability/supportsaudio.md): A Boolean value that indicates whether the device supports audio event playback.
- [supportsHaptics](chhapticdevicecapability/supportshaptics.md): A Boolean value that indicates whether the device supports haptic event playback.

### Determining Supported Parameters

- [attributes(forDynamicParameter:)](chhapticdevicecapability/attributes%28fordynamicparameter_%29.md): Requests the haptic device’s attributes for a dynamic parameter.
- [attributes(forEventParameter:eventType:)](chhapticdevicecapability/attributes%28foreventparameter_eventtype_%29.md): Returns the haptic device’s attributes for an event parameter.

## See Also

### Querying System Capabilities

- [capabilitiesForHardware()](chhapticengine/capabilitiesforhardware%28%29.md): Returns a device capability object that describes the device’s haptic support and limitations.
- [CHHapticParameterAttributes](chhapticparameterattributes.md): A protocol for providing default, mininum, and maximum values of a parameter.
- [attributes(forDynamicParameter:)](chhapticdevicecapability/attributes%28fordynamicparameter_%29.md): Requests the haptic device’s attributes for a dynamic parameter.

# CHHapticDeviceCapability (Objective-C)

**Framework:** Core Haptics  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A protocol that defines haptics and audio capabilities of a device.

## Declaration

```objectivec
@protocol CHHapticDeviceCapability
```

## Topics

### Determining Support for Haptics

- [supportsAudio](chhapticdevicecapability/supportsaudio.md): A Boolean value that indicates whether the device supports audio event playback.
- [supportsHaptics](chhapticdevicecapability/supportshaptics.md): A Boolean value that indicates whether the device supports haptic event playback.

### Determining Supported Parameters

- [attributesForDynamicParameter:error:](chhapticdevicecapability/attributes%28fordynamicparameter_%29.md): Requests the haptic device’s attributes for a dynamic parameter.
- [attributesForEventParameter:eventType:error:](chhapticdevicecapability/attributes%28foreventparameter_eventtype_%29.md): Returns the haptic device’s attributes for an event parameter.

## See Also

### Querying System Capabilities

- [capabilitiesForHardware](chhapticengine/capabilitiesforhardware%28%29.md): Returns a device capability object that describes the device’s haptic support and limitations.
- [CHHapticParameterAttributes](chhapticparameterattributes.md): A protocol for providing default, mininum, and maximum values of a parameter.
- [attributesForDynamicParameter:error:](chhapticdevicecapability/attributes%28fordynamicparameter_%29.md): Requests the haptic device’s attributes for a dynamic parameter.
