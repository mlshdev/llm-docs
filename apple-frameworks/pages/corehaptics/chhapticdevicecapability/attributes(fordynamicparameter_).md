> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticdevicecapability/attributes(fordynamicparameter:)](https://developer.apple.com/documentation/corehaptics/chhapticdevicecapability/attributes(fordynamicparameter:))

# attributes(forDynamicParameter:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Requests the haptic device’s attributes for a dynamic parameter.

## Declaration

```swift
func attributes(forDynamicParameter inParameter: CHHapticDynamicParameter.ID) throws -> any CHHapticParameterAttributes
```

## Parameters

- `inParameter`: The dynamic parameter ID whose attributes you seek.

<a id="return-value"></a>

## Return Value

The haptic device’s attributes for the given dynamic parameter ID.

## See Also

### Querying System Capabilities

- [capabilitiesForHardware()](../chhapticengine/capabilitiesforhardware%28%29.md): Returns a device capability object that describes the device’s haptic support and limitations.
- [CHHapticDeviceCapability](../chhapticdevicecapability.md): A protocol that defines haptics and audio capabilities of a device.
- [CHHapticParameterAttributes](../chhapticparameterattributes.md): A protocol for providing default, mininum, and maximum values of a parameter.

# attributesForDynamicParameter:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Requests the haptic device’s attributes for a dynamic parameter.

## Declaration

```objectivec
- (id<CHHapticParameterAttributes>) attributesForDynamicParameter:(CHHapticDynamicParameterID) inParameter error:(NSError **) outError;
```

## Parameters

- `inParameter`: The dynamic parameter ID whose attributes you seek.
- `outError`: Any error that occurred during attribute fetching, or `nil` if no error occurred.

<a id="return-value"></a>

## Return Value

The haptic device’s attributes for the given dynamic parameter ID.

## See Also

### Querying System Capabilities

- [capabilitiesForHardware](../chhapticengine/capabilitiesforhardware%28%29.md): Returns a device capability object that describes the device’s haptic support and limitations.
- [CHHapticDeviceCapability](../chhapticdevicecapability.md): A protocol that defines haptics and audio capabilities of a device.
- [CHHapticParameterAttributes](../chhapticparameterattributes.md): A protocol for providing default, mininum, and maximum values of a parameter.
