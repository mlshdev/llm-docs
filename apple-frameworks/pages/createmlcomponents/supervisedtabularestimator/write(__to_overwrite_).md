> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/supervisedtabularestimator/write(_:to:overwrite:)](https://developer.apple.com/documentation/createmlcomponents/supervisedtabularestimator/write(_:to:overwrite:))

# write(\_:to:overwrite:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

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

- [read(from:)](read%28from_%29.md): Reads the encoded transformer from a file.
- [Annotation](annotation.md): The annotation type.
- [annotationColumnID](annotationcolumnid.md): The annotation column identifier.
- [Transformer](transformer.md): The transformer type created by this estimator.
