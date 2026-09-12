> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressor/model/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressor/model/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Performs a prediction on a shaped array.

## Declaration

```swift
func applied(to input: MLShapedArray<Scalar>, eventHandler: EventHandler? = nil) async throws -> MLShapedArray<Scalar>
```

## Parameters

- `input`: A shaped array of features. The last dimension must be `inputSize`.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

A shaped array of predictions. The shape of the predictions matches the shape of the input except for the last dimension, which is `outputSize`.
