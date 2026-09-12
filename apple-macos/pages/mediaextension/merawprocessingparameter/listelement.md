> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter/listelement](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/listelement)

# MERAWProcessingParameter.ListElement (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that describes a list element parameter of a RAW processor.

## Declaration

```swift
class ListElement
```

<a id="overview"></a>

## Overview

The `MERAWProcessingParameterListElement` protocol provides an interface for `VideoToolbox` to query descriptions of the different elements in a parameter list for a list element in a `MERAWProcessingParameter`.  A distinct `MERAWProcessingParameterListElement` is created for each list element.

## Topics

### Creating a list element parameter object

- [init(name:description:elementID:)](listelement/init%28name_description_elementid_%29.md): Creates a list element parameter object with the element id value.

### Properties

- [listElementID](listelement/listelementid.md): A unique number in the list which represents this list option.

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
- [MERAWProcessingParameter.SubGroup](subgroup.md): An object that describes a sub group parameter of a RAW processor.

# MERAWProcessingListElementParameter (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that describes a list element parameter of a RAW processor.

## Declaration

```objectivec
@interface MERAWProcessingListElementParameter : MERAWProcessingParameter
```

<a id="overview"></a>

## Overview

The `MERAWProcessingParameterListElement` protocol provides an interface for `VideoToolbox` to query descriptions of the different elements in a parameter list for a list element in a `MERAWProcessingParameter`.  A distinct `MERAWProcessingParameterListElement` is created for each list element.

## Topics

### Creating a list element parameter object

- [initWithName:description:elementID:](listelement/init%28name_description_elementid_%29.md): Creates a list element parameter object with the element id value.

### Properties

- [listElementID](listelement/listelementid.md): A unique number in the list which represents this list option.

## Relationships

### Inherits From

- [MERAWProcessingParameter](../merawprocessingparameter.md)

## See Also

### Processing parameters

- [MERAWProcessingBooleanParameter](boolean.md): An object that describes a Boolean parameter of a RAW processor.
- [MERAWProcessingFloatParameter](floatingpoint.md): An object that describes a floating-point parameter of a RAW processor.
- [MERAWProcessingIntegerParameter](integer.md): An object that describes an integer parameter of a RAW processor.
- [MERAWProcessingListParameter](list.md): An object that describes a list parameter of a RAW processor.
- [MERAWProcessingSubGroupParameter](subgroup.md): An object that describes a sub group parameter of a RAW processor.
