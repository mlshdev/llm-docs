> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/temporalestimator/write(_:to:overwrite:)

# write(\_:to:overwrite:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Writes the encoded transformer to a file.

## Declaration

```swift
func write(_ transformer: Self.Transformer, to url: URL, overwrite: Bool = true) throws
```

## Parameters

- `transformer`: A transformer created by this estimator.
- `url`: A file URL.
- `overwrite`: A Boolean value indicating whether to overwrite existing files.

## See Also

### Reading and writing

- [read(from:)](read%28from_%29.md): Deprecated. Reads the encoded transformer from a file.
