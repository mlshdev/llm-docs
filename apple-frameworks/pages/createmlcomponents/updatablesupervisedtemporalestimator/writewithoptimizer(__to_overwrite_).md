> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatablesupervisedtemporalestimator/writewithoptimizer(_:to:overwrite:)](https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedtemporalestimator/writewithoptimizer(_:to:overwrite:))

# writeWithOptimizer(\_:to:overwrite:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

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

- [readWithOptimizer(from:)](readwithoptimizer%28from_%29.md): Deprecated. Reads the encoded transformer and optimizer from a file.
