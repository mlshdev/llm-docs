> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncoremlmodel/featureprovider](https://developer.apple.com/documentation/vision/vncoremlmodel/featureprovider)

# featureProvider (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An optional object to support inputs outside Vision.

## Declaration

```swift
var featureProvider: (any MLFeatureProvider)? { get set }
```

<a id="Discussion"></a>

## Discussion

This optional object conforms to the [MLFeatureProvider](../../coreml/mlfeatureprovider.md) protocol that the model uses to predict inputs that are not supplied by Vision. Vision provides the MLModel with the image for the [inputImageFeatureName](inputimagefeaturename.md) via the `VNRequestHandler`.

A feature provider is necessary for models that have more than one required input. Models with only one image input won’t use the feature provider.

## See Also

### Providing Features

- [inputImageFeatureName](inputimagefeaturename.md): The name of the feature value that Vision sets from the request handler.

# featureProvider (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An optional object to support inputs outside Vision.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) id<MLFeatureProvider> featureProvider;
```

<a id="Discussion"></a>

## Discussion

This optional object conforms to the [MLFeatureProvider](../../coreml/mlfeatureprovider.md) protocol that the model uses to predict inputs that are not supplied by Vision. Vision provides the MLModel with the image for the [inputImageFeatureName](inputimagefeaturename.md) via the `VNRequestHandler`.

A feature provider is necessary for models that have more than one required input. Models with only one image input won’t use the feature provider.

## See Also

### Providing Features

- [inputImageFeatureName](inputimagefeaturename.md): The name of the feature value that Vision sets from the request handler.
