> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticparameterattributes](https://developer.apple.com/documentation/corehaptics/chhapticparameterattributes)

# CHHapticParameterAttributes (Swift)

**Framework:** Core Haptics  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A protocol for providing default, mininum, and maximum values of a parameter.

## Declaration

```swift
protocol CHHapticParameterAttributes : NSObjectProtocol
```

## Topics

### Parameter Attributes

- [defaultValue](chhapticparameterattributes/defaultvalue.md): The default value of the parameter value.
- [minValue](chhapticparameterattributes/minvalue.md): The minimum value the parameter can take.
- [maxValue](chhapticparameterattributes/maxvalue.md): The maximum value the parameter can take.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Querying System Capabilities

- [capabilitiesForHardware()](chhapticengine/capabilitiesforhardware%28%29.md): Returns a device capability object that describes the device’s haptic support and limitations.
- [CHHapticDeviceCapability](chhapticdevicecapability.md): A protocol that defines haptics and audio capabilities of a device.
- [attributes(forDynamicParameter:)](chhapticdevicecapability/attributes%28fordynamicparameter_%29.md): Requests the haptic device’s attributes for a dynamic parameter.

# CHHapticParameterAttributes (Objective-C)

**Framework:** Core Haptics  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A protocol for providing default, mininum, and maximum values of a parameter.

## Declaration

```objectivec
@protocol CHHapticParameterAttributes <NSObject>
```

## Topics

### Parameter Attributes

- [defaultValue](chhapticparameterattributes/defaultvalue.md): The default value of the parameter value.
- [minValue](chhapticparameterattributes/minvalue.md): The minimum value the parameter can take.
- [maxValue](chhapticparameterattributes/maxvalue.md): The maximum value the parameter can take.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Querying System Capabilities

- [capabilitiesForHardware](chhapticengine/capabilitiesforhardware%28%29.md): Returns a device capability object that describes the device’s haptic support and limitations.
- [CHHapticDeviceCapability](chhapticdevicecapability.md): A protocol that defines haptics and audio capabilities of a device.
- [attributesForDynamicParameter:error:](chhapticdevicecapability/attributes%28fordynamicparameter_%29.md): Requests the haptic device’s attributes for a dynamic parameter.
