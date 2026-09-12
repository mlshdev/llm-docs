> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter/list](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/list)

# MERAWProcessingParameter.List (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that describes a list parameter of a RAW processor.

## Declaration

```swift
class List
```

## Topics

### Creating a list parameter object

- [init(name:key:description:list:initialValue:neutralValue:cameraValue:)](list/init%28name_key_description_list_initialvalue_neutralvalue_cameravalue_%29.md): Creates a list parameter object.

### Properties

- [currentValue](list/currentvalue.md): Get or set the current value for this parameter.
- [initialValue](list/initialvalue.md): The initial value for this parameter as defined in the sequence metadata.
- [listElements](list/listelements.md): The ordered array of `MERAWProcessingListElementParameter` which make up this list.

### Instance Properties

- [cameraValue](list/cameravalue.md)
- [neutralValue](list/neutralvalue.md)

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
- [MERAWProcessingParameter.Integer](integer.md): An object that describes an integer parameter of a RAW processor.
- [MERAWProcessingParameter.ListElement](listelement.md): An object that describes a list element parameter of a RAW processor.
- [MERAWProcessingParameter.SubGroup](subgroup.md): An object that describes a sub group parameter of a RAW processor.

# MERAWProcessingListParameter (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that describes a list parameter of a RAW processor.

## Declaration

```objectivec
@interface MERAWProcessingListParameter : MERAWProcessingParameter
```

## Topics

### Creating a list parameter object

- [initWithName:key:description:list:initialValue:](../merawprocessinglistparameter/initwithname_key_description_list_initialvalue_.md): Creates a list parameter object with the initial value.
- [initWithName:key:description:list:initialValue:cameraValue:](../merawprocessinglistparameter/initwithname_key_description_list_initialvalue_cameravalue_.md): Creates a list parameter object with the initial and camera values.
- [initWithName:key:description:list:initialValue:neutralValue:](../merawprocessinglistparameter/initwithname_key_description_list_initialvalue_neutralvalue_.md): Creates a list parameter object with the initial and neutral values.
- [initWithName:key:description:list:initialValue:neutralValue:cameraValue:](../merawprocessinglistparameter/initwithname_key_description_list_initialvalue_neutralvalue_cameravalue_.md): Creates a list parameter object with the initial, neutral, and camera values.

### Inspecting a parameter

- [hasCameraValue:](../merawprocessinglistparameter/hascameravalue_.md): The optional camera value for this parameter.
- [hasNeutralValue:](../merawprocessinglistparameter/hasneutralvalue_.md): The optional neutral value for this parameter.

### Properties

- [currentValue](list/currentvalue.md): Get or set the current value for this parameter.
- [initialValue](list/initialvalue.md): The initial value for this parameter as defined in the sequence metadata.
- [listElements](list/listelements.md): The ordered array of `MERAWProcessingListElementParameter` which make up this list.

## Relationships

### Inherits From

- [MERAWProcessingParameter](../merawprocessingparameter.md)

## See Also

### Processing parameters

- [MERAWProcessingBooleanParameter](boolean.md): An object that describes a Boolean parameter of a RAW processor.
- [MERAWProcessingFloatParameter](floatingpoint.md): An object that describes a floating-point parameter of a RAW processor.
- [MERAWProcessingIntegerParameter](integer.md): An object that describes an integer parameter of a RAW processor.
- [MERAWProcessingListElementParameter](listelement.md): An object that describes a list element parameter of a RAW processor.
- [MERAWProcessingSubGroupParameter](subgroup.md): An object that describes a sub group parameter of a RAW processor.
