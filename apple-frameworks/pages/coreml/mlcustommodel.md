> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcustommodel](https://developer.apple.com/documentation/coreml/mlcustommodel)

# MLCustomModel (Swift)

**Framework:** Core ML  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An interface that defines the behavior of a custom model.

## Declaration

```swift
protocol MLCustomModel
```

<a id="overview"></a>

## Overview

To integrate your custom model with Core ML, adopt the [MLCustomModel](mlcustommodel.md) protocol in the implementation of your custom model. If you use a Swift class for your custom implementation, make it accessible to Core ML by using the `@objc(`*name*`)` attribute.

```swift
@objc(MyCustomModel)
class MyCustomModel: NSObject, MLCustomModel {
  ...
}
```

This defines the Objective-C name for the class, which Core ML needs to access your custom class’s implementation.

## Topics

### Creating the model

- [init(modelDescription:parameters:)](mlcustommodel/init%28modeldescription_parameters_%29.md): Creates a custom model with the given description and parameters.

### Making predictions

- [prediction(from:options:)](mlcustommodel/prediction%28from_options_%29.md): Predicts output values from the given input features.
- [predictions(from:options:)](mlcustommodel/predictions%28from_options_%29.md): Predicts output values from the given batch of input features.

### Initializers

- [init(modelDescription:parameterDictionary:)](mlcustommodel/init%28modeldescription_parameterdictionary_%29.md)

# MLCustomModel (Objective-C)

**Framework:** Core ML  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An interface that defines the behavior of a custom model.

## Declaration

```objectivec
@protocol MLCustomModel
```

<a id="overview"></a>

## Overview

To integrate your custom model with Core ML, adopt the [MLCustomModel](mlcustommodel.md) protocol in the implementation of your custom model. If you use a Swift class for your custom implementation, make it accessible to Core ML by using the `@objc(`*name*`)` attribute.

```swift
@objc(MyCustomModel)
class MyCustomModel: NSObject, MLCustomModel {
  ...
}
```

This defines the Objective-C name for the class, which Core ML needs to access your custom class’s implementation.

## Topics

### Creating the model

- [initWithModelDescription:parameterDictionary:error:](mlcustommodel/init%28modeldescription_parameters_%29.md): Creates a custom model with the given description and parameters.

### Making predictions

- [predictionFromFeatures:options:error:](mlcustommodel/prediction%28from_options_%29.md): Predicts output values from the given input features.
- [predictionsFromBatch:options:error:](mlcustommodel/predictions%28from_options_%29.md): Predicts output values from the given batch of input features.
