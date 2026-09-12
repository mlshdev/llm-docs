> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporaltransformer/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/temporaltransformer/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Performs the transformation on an input sequence.

## Declaration

```swift
func applied<S>(to input: S, eventHandler: EventHandler?) async throws -> Self.OutputSequence where S : TemporalSequence, Self.Input == S.Feature
```

## Parameters

- `input`: The input temporal sequence.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An async sequence produced by applying the transformation to the input.

## Default Implementations

### TemporalTransformer Implementations

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29-ax6t.md): Performs the transformation on a sequence of input sequences.
- [applied(to:eventHandler:)](applied%28to_eventhandler_%29-q6fk.md): Performs the transformation on a sequence of annotated input sequences.

## See Also

### Applying and adapting

- [adaptedAsEstimator()](adaptedasestimator%28%29.md): Deprecated. Exposes this temporal transformer as a trivial temporal estimator.
- [adaptedAsUpdatableEstimator()](adaptedasupdatableestimator%28%29.md): Deprecated. Exposes this temporal transformer as a trivial temporal estimator.
- [Input](input.md): The input type.
- [Output](output.md): The output type.
- [OutputSequence](outputsequence.md): The output async sequence type.
