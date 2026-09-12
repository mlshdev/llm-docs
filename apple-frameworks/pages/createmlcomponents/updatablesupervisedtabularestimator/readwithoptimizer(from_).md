> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatablesupervisedtabularestimator/readwithoptimizer(from:)](https://developer.apple.com/documentation/createmlcomponents/updatablesupervisedtabularestimator/readwithoptimizer(from:))

# readWithOptimizer(from:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

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

- [writeWithOptimizer(\_:to:overwrite:)](writewithoptimizer%28__to_overwrite_%29.md): Writes the encoded transformer and optimizer to a file.
