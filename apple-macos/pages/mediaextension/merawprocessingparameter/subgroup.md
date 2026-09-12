> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter/subgroup](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/subgroup)

# MERAWProcessingParameter.SubGroup (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that describes a sub group parameter of a RAW processor.

## Declaration

```swift
class SubGroup
```

<a id="overview"></a>

## Overview

Sub groups are logical groupings of [MERAWProcessingParameter](../merawprocessingparameter.md) objects that should be displayed together in an application user interface.

## Topics

### Creating a sub group parameter object

- [init(name:description:parameters:)](subgroup/init%28name_description_parameters_%29.md): Creates a sub group parameter object with the parameters value.

### Properties

- [subGroupParameters](subgroup/subgroupparameters.md): The array of [MERAWProcessingParameter](../merawprocessingparameter.md) objects in the sub group.

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
- [MERAWProcessingParameter.List](list.md): An object that describes a list parameter of a RAW processor.
- [MERAWProcessingParameter.ListElement](listelement.md): An object that describes a list element parameter of a RAW processor.

# MERAWProcessingSubGroupParameter (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that describes a sub group parameter of a RAW processor.

## Declaration

```objectivec
@interface MERAWProcessingSubGroupParameter : MERAWProcessingParameter
```

<a id="overview"></a>

## Overview

Sub groups are logical groupings of [MERAWProcessingParameter](../merawprocessingparameter.md) objects that should be displayed together in an application user interface.

## Topics

### Creating a sub group parameter object

- [initWithName:description:parameters:](subgroup/init%28name_description_parameters_%29.md): Creates a sub group parameter object with the parameters value.

### Properties

- [subGroupParameters](subgroup/subgroupparameters.md): The array of [MERAWProcessingParameter](../merawprocessingparameter.md) objects in the sub group.

## Relationships

### Inherits From

- [MERAWProcessingParameter](../merawprocessingparameter.md)

## See Also

### Processing parameters

- [MERAWProcessingBooleanParameter](boolean.md): An object that describes a Boolean parameter of a RAW processor.
- [MERAWProcessingFloatParameter](floatingpoint.md): An object that describes a floating-point parameter of a RAW processor.
- [MERAWProcessingIntegerParameter](integer.md): An object that describes an integer parameter of a RAW processor.
- [MERAWProcessingListParameter](list.md): An object that describes a list parameter of a RAW processor.
- [MERAWProcessingListElementParameter](listelement.md): An object that describes a list element parameter of a RAW processor.
