> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcustomlayer/outputshapes(forinputshapes:)](https://developer.apple.com/documentation/coreml/mlcustomlayer/outputshapes(forinputshapes:))

# outputShapes(forInputShapes:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

Calculates the shapes of the output of this layer for the given input shapes.

## Declaration

```swift
func outputShapes(forInputShapes inputShapes: [[NSNumber]]) throws -> [[NSNumber]]
```

## Parameters

- `inputShapes`: The shapes of the input for this layer.

<a id="return-value"></a>

## Return Value

The shapes of the output for the given input shapes.

## Mentioned In

- [Creating and Integrating a Model with Custom Layers](../creating-and-integrating-a-model-with-custom-layers.md)

<a id="Discussion"></a>

## Discussion

Implement this method to define the layer’s interface with the rest of the network. It will be called at least once at load time and any time the size of the inputs changes in a call to [prediction(from:)](https://developer.apple.com/documentation/coreml/mlmodel/prediction%28from:%29-9y2aa).

This method consumes and returns arrays of shapes, for inputs and outputs of the custom layer, respectively. See the [Core ML Neural Network specification](https://mlmodel.readme.io/reference/neuralnetwork) for more details about shapes and how layers use them.

## See Also

### Integrating a layer

- [setWeightData(\_:)](setweightdata%28__%29.md): Assigns the weights for the connections within the layer.

# outputShapesForInputShapes:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

Calculates the shapes of the output of this layer for the given input shapes.

## Declaration

```objectivec
- (NSArray<NSArray<NSNumber *> *> *) outputShapesForInputShapes:(NSArray<NSArray<NSNumber *> *> *) inputShapes error:(NSError **) error;
```

## Parameters

- `inputShapes`: The shapes of the input for this layer.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The shapes of the output for the given input shapes. On failure, this method returns `nil`.

## Mentioned In

- [Creating and Integrating a Model with Custom Layers](../creating-and-integrating-a-model-with-custom-layers.md)

<a id="Discussion"></a>

## Discussion

Implement this method to define the layer’s interface with the rest of the network. It will be called at least once at load time and any time the size of the inputs changes in a call to [predictionFromFeatures:error:](https://developer.apple.com/documentation/coreml/mlmodel/prediction%28from:%29-9y2aa).

This method consumes and returns arrays of shapes, for inputs and outputs of the custom layer, respectively. See the [Core ML Neural Network specification](https://mlmodel.readme.io/reference/neuralnetwork) for more details about shapes and how layers use them.

## See Also

### Integrating a layer

- [setWeightData:error:](setweightdata%28__%29.md): Assigns the weights for the connections within the layer.
