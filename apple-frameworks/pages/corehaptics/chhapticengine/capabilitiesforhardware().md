> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/capabilitiesforhardware()](https://developer.apple.com/documentation/corehaptics/chhapticengine/capabilitiesforhardware())

# capabilitiesForHardware() (Swift)

**Framework:** Core Haptics  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Returns a device capability object that describes the device’s haptic support and limitations.

## Declaration

```swift
class func capabilitiesForHardware() -> any CHHapticDeviceCapability
```

## See Also

### Querying System Capabilities

- [CHHapticDeviceCapability](../chhapticdevicecapability.md): A protocol that defines haptics and audio capabilities of a device.
- [CHHapticParameterAttributes](../chhapticparameterattributes.md): A protocol for providing default, mininum, and maximum values of a parameter.
- [attributes(forDynamicParameter:)](../chhapticdevicecapability/attributes%28fordynamicparameter_%29.md): Requests the haptic device’s attributes for a dynamic parameter.

# capabilitiesForHardware (Objective-C)

**Framework:** Core Haptics  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Returns a device capability object that describes the device’s haptic support and limitations.

## Declaration

```objectivec
+ (id<CHHapticDeviceCapability>) capabilitiesForHardware;
```

## See Also

### Querying System Capabilities

- [CHHapticDeviceCapability](../chhapticdevicecapability.md): A protocol that defines haptics and audio capabilities of a device.
- [CHHapticParameterAttributes](../chhapticparameterattributes.md): A protocol for providing default, mininum, and maximum values of a parameter.
- [attributesForDynamicParameter:error:](../chhapticdevicecapability/attributes%28fordynamicparameter_%29.md): Requests the haptic device’s attributes for a dynamic parameter.
