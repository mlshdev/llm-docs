> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkmultilabelclassifiermodel/applied(to:eventhandler:)

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Performs a classification on a shaped array.

## Declaration

```swift
func applied(to input: MLShapedArray<Scalar>, eventHandler: EventHandler? = nil) throws -> ClassificationDistribution<Label>
```

## Parameters

- `input`: The classifier input.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

A classification distribution.
