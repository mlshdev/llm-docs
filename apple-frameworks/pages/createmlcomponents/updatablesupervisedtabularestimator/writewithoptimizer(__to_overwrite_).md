> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedtabularestimator/writewithoptimizer(_:to:overwrite:)

# writeWithOptimizer(\_:to:overwrite:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Writes the encoded transformer and optimizer to a file.

## Declaration

```swift
func writeWithOptimizer(_ transformer: Self.Transformer, to url: URL, overwrite: Bool = true) throws
```

## Parameters

- `transformer`: A transformer created by this estimator.
- `url`: A file URL.
- `overwrite`: A Boolean value indicating whether to overwrite existing files.

## See Also

### Reading and writing

- [readWithOptimizer(from:)](readwithoptimizer%28from_%29.md): Reads the encoded transformer and optimizer from a file.
