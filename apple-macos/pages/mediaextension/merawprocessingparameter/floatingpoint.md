> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter/floatingpoint](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/floatingpoint)

# MERAWProcessingParameter.FloatingPoint (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that describes a floating-point parameter of a RAW processor.

## Declaration

```swift
class FloatingPoint
```

## Topics

### Creating a floating-point parameter object

- [init(name:key:description:initialValue:maximum:minimum:neutralValue:cameraValue:)](floatingpoint/init%28name_key_description_initialvalue_maximum_minimum_neutralvalue_cameravalue_%29.md): Creates a floating-point parameter object.

### Properties

- [currentValue](floatingpoint/currentvalue.md): Get or set the current value for this parameter.
- [initialValue](floatingpoint/initialvalue.md): The initial value for this parameter as defined in the sequence metadata.
- [maximumValue](floatingpoint/maximumvalue.md): The maximum value for this parameter.
- [minimumValue](floatingpoint/minimumvalue.md): The minimum value for this parameter.

### Instance Properties

- [cameraValue](floatingpoint/cameravalue.md)
- [neutralValue](floatingpoint/neutralvalue.md)

## Relationships

### Inherits From

- [MERAWProcessingParameter](../merawprocessingparameter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Processing parameters

- [MERAWProcessingParameter.Boolean](boolean.md): An object that describes a Boolean parameter of a RAW processor.
- [MERAWProcessingParameter.Integer](integer.md): An object that describes an integer parameter of a RAW processor.
- [MERAWProcessingParameter.List](list.md): An object that describes a list parameter of a RAW processor.
- [MERAWProcessingParameter.ListElement](listelement.md): An object that describes a list element parameter of a RAW processor.
- [MERAWProcessingParameter.SubGroup](subgroup.md): An object that describes a sub group parameter of a RAW processor.

# MERAWProcessingFloatParameter (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that describes a floating-point parameter of a RAW processor.

## Declaration

```objectivec
@interface MERAWProcessingFloatParameter : MERAWProcessingParameter
```

## Topics

### Creating a floating-point parameter object

- [initWithName:key:description:initialValue:maximum:minimum:](../merawprocessingfloatparameter/initwithname_key_description_initialvalue_maximum_minimum_.md): Creates a floating-point parameter object with the initial value.
- [initWithName:key:description:initialValue:maximum:minimum:cameraValue:](../merawprocessingfloatparameter/initwithname_key_description_initialvalue_maximum_minimum_cameravalue_.md): Creates a floating-point parameter object with the initial and camera values.
- [initWithName:key:description:initialValue:maximum:minimum:neutralValue:](../merawprocessingfloatparameter/initwithname_key_description_initialvalue_maximum_minimum_neutralvalue_.md): Creates a floating-point parameter object with the initial and neutral values.
- [initWithName:key:description:initialValue:maximum:minimum:neutralValue:cameraValue:](../merawprocessingfloatparameter/initwithname_key_description_initialvalue_maximum_minimum_neutralvalue_cameravalue_.md): Creates a floating-point parameter object with the initial, neutral, and camera values.

### Inspecting a parameter

- [hasCameraValue:](../merawprocessingfloatparameter/hascameravalue_.md): The optional camera value for this parameter.
- [hasNeutralValue:](../merawprocessingfloatparameter/hasneutralvalue_.md): The optional neutral value for this parameter.

### Properties

- [currentValue](floatingpoint/currentvalue.md): Get or set the current value for this parameter.
- [initialValue](floatingpoint/initialvalue.md): The initial value for this parameter as defined in the sequence metadata.
- [maximumValue](floatingpoint/maximumvalue.md): The maximum value for this parameter.
- [minimumValue](floatingpoint/minimumvalue.md): The minimum value for this parameter.

## Relationships

### Inherits From

- [MERAWProcessingParameter](../merawprocessingparameter.md)

## See Also

### Processing parameters

- [MERAWProcessingBooleanParameter](boolean.md): An object that describes a Boolean parameter of a RAW processor.
- [MERAWProcessingIntegerParameter](integer.md): An object that describes an integer parameter of a RAW processor.
- [MERAWProcessingListParameter](list.md): An object that describes a list parameter of a RAW processor.
- [MERAWProcessingListElementParameter](listelement.md): An object that describes a list element parameter of a RAW processor.
- [MERAWProcessingSubGroupParameter](subgroup.md): An object that describes a sub group parameter of a RAW processor.
