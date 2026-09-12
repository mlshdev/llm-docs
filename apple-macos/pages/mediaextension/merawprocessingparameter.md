> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter)

# MERAWProcessingParameter (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

An object for the RAW processor to describe each processing parameter the processor exposes.

## Declaration

```swift
class MERAWProcessingParameter
```

<a id="Discussion"></a>

## Discussion

This protocol provides an interface for Video Toolbox to query descriptions of the different parameters that can be used to influence RAW processor operation.  A distinct [MERAWProcessingParameter](merawprocessingparameter.md) is created for each parameter supported by the RAW processor, and the set of supported parameters is returned by the [processingParameters](merawprocessor/processingparameters.md) interface.

## Topics

### Inspecting a processing parameter

- [enabled](merawprocessingparameter/enabled.md): A Boolean value that indicates whether the extension enables the parameter.
- [key](merawprocessingparameter/key.md): A unique key string identifying the parameter.
- [longDescription](merawprocessingparameter/longdescription.md): A localized description of the parameter, suitable for displaying in a tool tip or similar explanatory UI.
- [name](merawprocessingparameter/name.md): A localized human-readable name for the parameter, suitable for displaying in application UI.

### Processing parameters

- [MERAWProcessingParameter.Boolean](merawprocessingparameter/boolean.md): An object that describes a Boolean parameter of a RAW processor.
- [MERAWProcessingParameter.FloatingPoint](merawprocessingparameter/floatingpoint.md): An object that describes a floating-point parameter of a RAW processor.
- [MERAWProcessingParameter.Integer](merawprocessingparameter/integer.md): An object that describes an integer parameter of a RAW processor.
- [MERAWProcessingParameter.List](merawprocessingparameter/list.md): An object that describes a list parameter of a RAW processor.
- [MERAWProcessingParameter.ListElement](merawprocessingparameter/listelement.md): An object that describes a list element parameter of a RAW processor.
- [MERAWProcessingParameter.SubGroup](merawprocessingparameter/subgroup.md): An object that describes a sub group parameter of a RAW processor.

### Class methods

- [boolean(name:key:description:initialValue:neutralValue:cameraValue:)](merawprocessingparameter/boolean%28name_key_description_initialvalue_neutralvalue_cameravalue_%29.md)
- [integer(name:key:description:initialValue:maximum:minimum:neutralValue:cameraValue:)](merawprocessingparameter/integer%28name_key_description_initialvalue_maximum_minimum_neutralvalue_cameravalue_%29.md)
- [list(name:key:description:list:initialValue:neutralValue:cameraValue:)](merawprocessingparameter/list%28name_key_description_list_initialvalue_neutralvalue_cameravalue_%29.md)
- [listElement(name:description:elementID:)](merawprocessingparameter/listelement%28name_description_elementid_%29.md)
- [subGroup(name:description:parameters:)](merawprocessingparameter/subgroup%28name_description_parameters_%29.md)
- [float(name:key:description:initialValue:maximum:minimum:neutralValue:cameraValue:)](merawprocessingparameter/float%28name_key_description_initialvalue_maximum_minimum_neutralvalue_cameravalue_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [MERAWProcessingParameter.Boolean](merawprocessingparameter/boolean.md)
- [MERAWProcessingParameter.FloatingPoint](merawprocessingparameter/floatingpoint.md)
- [MERAWProcessingParameter.Integer](merawprocessingparameter/integer.md)
- [MERAWProcessingParameter.List](merawprocessingparameter/list.md)
- [MERAWProcessingParameter.ListElement](merawprocessingparameter/listelement.md)
- [MERAWProcessingParameter.SubGroup](merawprocessingparameter/subgroup.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### RAW processors

- [MERAWProcessor](merawprocessor.md): A protocol that defines the requirements for a RAW processor.
- [MERAWProcessorExtension](merawprocessorextension.md): A protocol that defines a factory to create RAW processors for a codec type that the extension implements.
- [MERAWProcessorPixelBufferManager](merawprocessorpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [MERAWProcessorNotification](merawprocessornotification.md): Notifications that indicate a RAW processor state change.
- [RAW processor property list dictionary](raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.
- [RAW processor entitlement](raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.

# MERAWProcessingParameter (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

An object for the RAW processor to describe each processing parameter the processor exposes.

## Declaration

```objectivec
@interface MERAWProcessingParameter : NSObject
```

<a id="Discussion"></a>

## Discussion

This protocol provides an interface for Video Toolbox to query descriptions of the different parameters that can be used to influence RAW processor operation.  A distinct [MERAWProcessingParameter](merawprocessingparameter.md) is created for each parameter supported by the RAW processor, and the set of supported parameters is returned by the [processingParameters](merawprocessor/processingparameters.md) interface.

## Topics

### Inspecting a processing parameter

- [enabled](merawprocessingparameter/enabled.md): A Boolean value that indicates whether the extension enables the parameter.
- [key](merawprocessingparameter/key.md): A unique key string identifying the parameter.
- [longDescription](merawprocessingparameter/longdescription.md): A localized description of the parameter, suitable for displaying in a tool tip or similar explanatory UI.
- [name](merawprocessingparameter/name.md): A localized human-readable name for the parameter, suitable for displaying in application UI.

### Processing parameters

- [MERAWProcessingBooleanParameter](merawprocessingparameter/boolean.md): An object that describes a Boolean parameter of a RAW processor.
- [MERAWProcessingFloatParameter](merawprocessingparameter/floatingpoint.md): An object that describes a floating-point parameter of a RAW processor.
- [MERAWProcessingIntegerParameter](merawprocessingparameter/integer.md): An object that describes an integer parameter of a RAW processor.
- [MERAWProcessingListParameter](merawprocessingparameter/list.md): An object that describes a list parameter of a RAW processor.
- [MERAWProcessingListElementParameter](merawprocessingparameter/listelement.md): An object that describes a list element parameter of a RAW processor.
- [MERAWProcessingSubGroupParameter](merawprocessingparameter/subgroup.md): An object that describes a sub group parameter of a RAW processor.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [MERAWProcessingBooleanParameter](merawprocessingparameter/boolean.md)
- [MERAWProcessingFloatParameter](merawprocessingparameter/floatingpoint.md)
- [MERAWProcessingIntegerParameter](merawprocessingparameter/integer.md)
- [MERAWProcessingListElementParameter](merawprocessingparameter/listelement.md)
- [MERAWProcessingListParameter](merawprocessingparameter/list.md)
- [MERAWProcessingSubGroupParameter](merawprocessingparameter/subgroup.md)

## See Also

### RAW processors

- [MERAWProcessor](merawprocessor.md): A protocol that defines the requirements for a RAW processor.
- [MERAWProcessorExtension](merawprocessorextension.md): A protocol that defines a factory to create RAW processors for a codec type that the extension implements.
- [MERAWProcessorPixelBufferManager](merawprocessorpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [RAW processor property list dictionary](raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.
- [RAW processor entitlement](raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.
