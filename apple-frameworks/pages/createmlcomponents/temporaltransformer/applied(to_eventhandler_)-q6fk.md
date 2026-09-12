> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporaltransformer/applied(to:eventhandler:)-q6fk](https://developer.apple.com/documentation/createmlcomponents/temporaltransformer/applied(to:eventhandler:)-q6fk)

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Performs the transformation on a sequence of annotated input sequences.

## Declaration

```swift
func applied<S, TS, Annotation>(to input: S, eventHandler: EventHandler? = nil) async throws -> [AnnotatedFeature<Self.OutputSequence, Annotation>] where S : Sequence, TS : TemporalSequence, Self.Input == TS.Feature, S.Element == AnnotatedFeature<TS, Annotation>
```

## Parameters

- `input`: A sequence of annotated sequences.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The annotated outputs produced by applying the transformer to the inputs.
