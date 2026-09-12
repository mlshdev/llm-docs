> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatablesupervisedtemporalestimator/readwithoptimizer(from:)](https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedtemporalestimator/readwithoptimizer(from:))

# readWithOptimizer(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Reads the encoded transformer and optimizer from a file.

## Declaration

```swift
func readWithOptimizer(from url: URL) throws -> Self.Transformer
```

## Parameters

- `url`: A file URL.

<a id="return-value"></a>

## Return Value

The decoded transformer.

## See Also

### Reading and writing

- [writeWithOptimizer(\_:to:overwrite:)](writewithoptimizer%28__to_overwrite_%29.md): Deprecated. Writes the encoded transformer and optimizer to a file.
