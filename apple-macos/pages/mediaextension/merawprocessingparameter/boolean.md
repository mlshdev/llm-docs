> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter/boolean](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/boolean)

# MERAWProcessingParameter.Boolean (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that describes a Boolean parameter of a RAW processor.

## Declaration

```swift
class Boolean
```

## Topics

### Creating a boolean parameter object

- [init(name:key:description:initialValue:neutralValue:cameraValue:)](boolean/init%28name_key_description_initialvalue_neutralvalue_cameravalue_%29.md): Creates a Boolean parameter object.

### Properties

- [currentValue](boolean/currentvalue.md): Get or set the current value for this parameter.
- [initialValue](boolean/initialvalue.md): The initial value for this parameter as defined in the sequence metadata.

### Instance Properties

- [cameraValue](boolean/cameravalue.md)
- [neutralValue](boolean/neutralvalue.md)

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

- [MERAWProcessingParameter.FloatingPoint](floatingpoint.md): An object that describes a floating-point parameter of a RAW processor.
- [MERAWProcessingParameter.Integer](integer.md): An object that describes an integer parameter of a RAW processor.
- [MERAWProcessingParameter.List](list.md): An object that describes a list parameter of a RAW processor.
- [MERAWProcessingParameter.ListElement](listelement.md): An object that describes a list element parameter of a RAW processor.
- [MERAWProcessingParameter.SubGroup](subgroup.md): An object that describes a sub group parameter of a RAW processor.

# MERAWProcessingBooleanParameter (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that describes a Boolean parameter of a RAW processor.

## Declaration

```objectivec
@interface MERAWProcessingBooleanParameter : MERAWProcessingParameter
```

## Topics

### Creating a boolean parameter object

- [initWithName:key:description:initialValue:](../merawprocessingbooleanparameter/initwithname_key_description_initialvalue_.md): Creates a Boolean parameter object with the initial value.
- [initWithName:key:description:initialValue:cameraValue:](../merawprocessingbooleanparameter/initwithname_key_description_initialvalue_cameravalue_.md): Creates a Boolean parameter object with the initial and camera values.
- [initWithName:key:description:initialValue:neutralValue:](../merawprocessingbooleanparameter/initwithname_key_description_initialvalue_neutralvalue_.md): Creates a Boolean parameter object with the initial and neutral values.
- [initWithName:key:description:initialValue:neutralValue:cameraValue:](../merawprocessingbooleanparameter/initwithname_key_description_initialvalue_neutralvalue_cameravalue_.md): Creates a Boolean parameter object with the initial, neutral, and camera values.

### Inspecting a parameter

- [hasCameraValue:](../merawprocessingbooleanparameter/hascameravalue_.md): The optional camera value for this parameter.
- [hasNeutralValue:](../merawprocessingbooleanparameter/hasneutralvalue_.md): The optional neutral value for this parameter.

### Properties

- [currentValue](boolean/currentvalue.md): Get or set the current value for this parameter.
- [initialValue](boolean/initialvalue.md): The initial value for this parameter as defined in the sequence metadata.

## Relationships

### Inherits From

- [MERAWProcessingParameter](../merawprocessingparameter.md)

## See Also

### Processing parameters

- [MERAWProcessingFloatParameter](floatingpoint.md): An object that describes a floating-point parameter of a RAW processor.
- [MERAWProcessingIntegerParameter](integer.md): An object that describes an integer parameter of a RAW processor.
- [MERAWProcessingListParameter](list.md): An object that describes a list parameter of a RAW processor.
- [MERAWProcessingListElementParameter](listelement.md): An object that describes a list element parameter of a RAW processor.
- [MERAWProcessingSubGroupParameter](subgroup.md): An object that describes a sub group parameter of a RAW processor.
