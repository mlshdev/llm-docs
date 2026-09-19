> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsmhaprojectionparameters/init(target_desc:weights:bias:)

# init(target_desc:weights:bias:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a new multihead attention projection parameters structure from the specified parameters.

## Declaration

```swift
init(target_desc: BNNSNDArrayDescriptor, weights: BNNSNDArrayDescriptor, bias: BNNSNDArrayDescriptor)
```

## Parameters

- `target_desc`: The descriptor—which is either an input query, key, or value, or an output—of the main target of the operation.
- `weights`: The descriptor of the initial projection’s weights.
- `bias`: The descriptor of the initial projection’s bias.

## See Also

### Initializers

- [init()](init%28%29.md): Returns a new multihead attention projection parameters structure.
