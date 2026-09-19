> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/mlmodelclassifieradaptor/applied(to:eventhandler:)

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Performs a prediction from a single input.

## Declaration

```swift
func applied(to input: MLShapedArray<Scalar>, eventHandler: EventHandler? = nil) async throws -> ClassificationDistribution<MLModelClassifierAdaptor<Scalar>.Label>
```

## Parameters

- `input`: The input feature.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

A classification distribution.

## See Also

### Performing the transformation

- [MLModelClassifierAdaptor.Label](label.md): The classifier label type.
