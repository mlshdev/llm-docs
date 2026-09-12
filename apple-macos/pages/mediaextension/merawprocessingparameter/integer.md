> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter/integer](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/integer)

# MERAWProcessingParameter.Integer (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that describes an integer parameter of a RAW processor.

## Declaration

```swift
class Integer
```

## Topics

### Creating an integer parameter object

- [init(name:key:description:initialValue:maximum:minimum:neutralValue:cameraValue:)](integer/init%28name_key_description_initialvalue_maximum_minimum_neutralvalue_cameravalue_%29.md): Creates an integer parameter object.

### Properties

- [currentValue](integer/currentvalue.md): Get or set the current value for this parameter.
- [initialValue](integer/initialvalue.md): The initial value for this parameter as defined in the sequence metadata.
- [maximumValue](integer/maximumvalue.md): The maximum value for this parameter.
- [minimumValue](integer/minimumvalue.md): The minimum value for this parameter.

### Instance Properties

- [cameraValue](integer/cameravalue.md)
- [neutralValue](integer/neutralvalue.md)

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
- [MERAWProcessingParameter.FloatingPoint](floatingpoint.md): An object that describes a floating-point parameter of a RAW processor.
- [MERAWProcessingParameter.List](list.md): An object that describes a list parameter of a RAW processor.
- [MERAWProcessingParameter.ListElement](listelement.md): An object that describes a list element parameter of a RAW processor.
- [MERAWProcessingParameter.SubGroup](subgroup.md): An object that describes a sub group parameter of a RAW processor.

# MERAWProcessingIntegerParameter (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that describes an integer parameter of a RAW processor.

## Declaration

```objectivec
@interface MERAWProcessingIntegerParameter : MERAWProcessingParameter
```

## Topics

### Creating an integer parameter object

- [initWithName:key:description:initialValue:maximum:minimum:](../merawprocessingintegerparameter/initwithname_key_description_initialvalue_maximum_minimum_.md): Creates a integer parameter object with the initial value.
- [initWithName:key:description:initialValue:maximum:minimum:cameraValue:](../merawprocessingintegerparameter/initwithname_key_description_initialvalue_maximum_minimum_cameravalue_.md): Creates an integer parameter object with the initial and camera values.
- [initWithName:key:description:initialValue:maximum:minimum:neutralValue:](../merawprocessingintegerparameter/initwithname_key_description_initialvalue_maximum_minimum_neutralvalue_.md): Creates an integer parameter object with the initial and neutral values.
- [initWithName:key:description:initialValue:maximum:minimum:neutralValue:cameraValue:](../merawprocessingintegerparameter/initwithname_key_description_initialvalue_maximum_minimum_neutralvalue_cameravalue_.md): Creates an integer parameter object with the initial, neutral, and camera values.

### Inspecting a parameter

- [hasCameraValue:](../merawprocessingintegerparameter/hascameravalue_.md): The optional camera value for this parameter.
- [hasNeutralValue:](../merawprocessingintegerparameter/hasneutralvalue_.md): The optional neutral value for this parameter.

### Properties

- [currentValue](integer/currentvalue.md): Get or set the current value for this parameter.
- [initialValue](integer/initialvalue.md): The initial value for this parameter as defined in the sequence metadata.
- [maximumValue](integer/maximumvalue.md): The maximum value for this parameter.
- [minimumValue](integer/minimumvalue.md): The minimum value for this parameter.

## Relationships

### Inherits From

- [MERAWProcessingParameter](../merawprocessingparameter.md)

## See Also

### Processing parameters

- [MERAWProcessingBooleanParameter](boolean.md): An object that describes a Boolean parameter of a RAW processor.
- [MERAWProcessingFloatParameter](floatingpoint.md): An object that describes a floating-point parameter of a RAW processor.
- [MERAWProcessingListParameter](list.md): An object that describes a list parameter of a RAW processor.
- [MERAWProcessingListElementParameter](listelement.md): An object that describes a list element parameter of a RAW processor.
- [MERAWProcessingSubGroupParameter](subgroup.md): An object that describes a sub group parameter of a RAW processor.
