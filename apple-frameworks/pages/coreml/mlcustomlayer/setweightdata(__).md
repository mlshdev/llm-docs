> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcustomlayer/setweightdata(_:)](https://developer.apple.com/documentation/coreml/mlcustomlayer/setweightdata(_:))

# setWeightData(\_:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

Assigns the weights for the connections within the layer.

## Declaration

```swift
func setWeightData(_ weights: [Data]) throws
```

## Parameters

- `weights`: The data encoded in the `weights` field of the model specification.

## Mentioned In

- [Creating and Integrating a Model with Custom Layers](../creating-and-integrating-a-model-with-custom-layers.md)

<a id="Discussion"></a>

## Discussion

Implement this method to assign the weights for all the connections between nodes in your layer. This method is called once after the initialization call. Your implementation should validate the weights and throw an error if the weights do not have the expected shape or values.

The data encoded in the `weights` field of the `.mlmodel` file is loaded and passed into this method. If there are repeated weights in the `.mlmodel` file, they will be listed explicitly in the `weights` array. The weight values are provided in the order that they were defined during the custom layer conversion process. Keep a reference to the `weights` passed in because copying the `weights` array can significantly increase an app’s memory. Avoid modifying values of the weights.

## See Also

### Integrating a layer

- [outputShapes(forInputShapes:)](outputshapes%28forinputshapes_%29.md): Calculates the shapes of the output of this layer for the given input shapes.

# setWeightData:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

Assigns the weights for the connections within the layer.

## Declaration

```objectivec
- (BOOL) setWeightData:(NSArray<NSData *> *) weights error:(NSError **) error;
```

## Parameters

- `weights`: The data encoded in the `weights` field of the model specification.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## Mentioned In

- [Creating and Integrating a Model with Custom Layers](../creating-and-integrating-a-model-with-custom-layers.md)

<a id="Discussion"></a>

## Discussion

Implement this method to assign the weights for all the connections between nodes in your layer. This method is called once after the initialization call. Your implementation should validate the weights and throw an error if the weights do not have the expected shape or values.

The data encoded in the `weights` field of the `.mlmodel` file is loaded and passed into this method. If there are repeated weights in the `.mlmodel` file, they will be listed explicitly in the `weights` array. The weight values are provided in the order that they were defined during the custom layer conversion process. Keep a reference to the `weights` passed in because copying the `weights` array can significantly increase an app’s memory. Avoid modifying values of the weights.

## See Also

### Integrating a layer

- [outputShapesForInputShapes:error:](outputshapes%28forinputshapes_%29.md): Calculates the shapes of the output of this layer for the given input shapes.
