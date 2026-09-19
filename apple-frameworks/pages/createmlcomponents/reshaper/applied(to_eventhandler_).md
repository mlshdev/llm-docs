> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/reshaper/applied(to:eventhandler:)

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Reshapes the input.

## Declaration

```swift
func applied(to input: MLShapedArray<Scalar>, eventHandler: EventHandler? = nil) throws -> MLShapedArray<Scalar>
```

## Parameters

- `input`: A shaped array.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

A shaped array with the target shape.

## See Also

### Performing the transformation

- [applied(\_:eventHandler:)](applied%28__eventhandler_%29.md): Reshapes a sequence of inputs.
