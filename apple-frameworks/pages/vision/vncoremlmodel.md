> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncoremlmodel](https://developer.apple.com/documentation/vision/vncoremlmodel)

# VNCoreMLModel (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A container for the model to use with Vision requests.

## Declaration

```swift
class VNCoreMLModel
```

<a id="overview"></a>

## Overview

A [Core ML](../coreml.md) model encapsulates the information trained from a data set used to drive Vision recognition requests. See [Getting a Core ML Model](../coreml/getting-a-core-ml-model.md) for instructions on training your own model. Once you train the model, use this class to initialize a [VNCoreMLRequest](vncoremlrequest.md) for identification.

## Topics

### Initializing a Model

- [init(for:)](vncoremlmodel/init%28for_%29.md): Creates a model container to use with a Core ML request.
- [init(forMLModel:)](vncoremlmodel/init%28formlmodel_%29.md)

### Providing Features

- [featureProvider](vncoremlmodel/featureprovider.md): An optional object to support inputs outside Vision.
- [inputImageFeatureName](vncoremlmodel/inputimagefeaturename.md): The name of the feature value that Vision sets from the request handler.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Initializing with a Core ML Model

- [init(model:)](vncoremlrequest/init%28model_%29.md): Creates a model container to use with an image analysis request based on the model you provide.
- [init(model:completionHandler:)](vncoremlrequest/init%28model_completionhandler_%29.md): Creates a model container to use with an image analysis request based on the model you provide, with an optional completion handler.
- [model](vncoremlrequest/model.md): The model to base the image analysis request on.

# VNCoreMLModel (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A container for the model to use with Vision requests.

## Declaration

```objectivec
@interface VNCoreMLModel : NSObject
```

<a id="overview"></a>

## Overview

A [Core ML](../coreml.md) model encapsulates the information trained from a data set used to drive Vision recognition requests. See [Getting a Core ML Model](../coreml/getting-a-core-ml-model.md) for instructions on training your own model. Once you train the model, use this class to initialize a [VNCoreMLRequest](vncoremlrequest.md) for identification.

## Topics

### Initializing a Model

- [modelForMLModel:error:](vncoremlmodel/init%28for_%29.md): Creates a model container to use with a Core ML request.

### Providing Features

- [featureProvider](vncoremlmodel/featureprovider.md): An optional object to support inputs outside Vision.
- [inputImageFeatureName](vncoremlmodel/inputimagefeaturename.md): The name of the feature value that Vision sets from the request handler.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Initializing with a Core ML Model

- [initWithModel:](vncoremlrequest/init%28model_%29.md): Creates a model container to use with an image analysis request based on the model you provide.
- [initWithModel:completionHandler:](vncoremlrequest/init%28model_completionhandler_%29.md): Creates a model container to use with an image analysis request based on the model you provide, with an optional completion handler.
- [model](vncoremlrequest/model.md): The model to base the image analysis request on.
