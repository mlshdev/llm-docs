> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/supervisedestimator/fitted(to:eventhandler:)-14zgf](https://developer.apple.com/documentation/createmlcomponents/supervisedestimator/fitted(to:eventhandler:)-14zgf)

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a transformer to an async sequence of examples.

## Declaration

```swift
func fitted<Input>(to input: Input, eventHandler: EventHandler?) async throws -> Self.Transformer where Input : AsyncSequence, Input.Element == AnnotatedFeature<Self.Transformer.Input, Self.Annotation>
```

## Parameters

- `input`: An async sequence of examples used for fitting the transformer.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

<a id="discussion"></a>

## Discussion

Note that the async sequence is collected before fitting the estimator. This may result in increased memory use. Consider using the update method to train progressively in batches.
