> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecaster/model/export(to:metadata:)](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecaster/model/export(to:metadata:))

# export(to:metadata:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Exports this transformer as a CoreML model package with user-supplied metadata.

## Declaration

```swift
func export(to url: URL, metadata: ModelMetadata) throws
```

## Parameters

- `url`: The location to write the model into.
- `metadata`: Contextual user-provided information.

## See Also

### Exporting the model

- [export(to:)](export%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Exports this transformer as a CoreML model package.
