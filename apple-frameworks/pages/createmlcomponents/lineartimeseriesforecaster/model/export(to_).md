> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecaster/model/export(to:)](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecaster/model/export(to:))

# export(to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Exports this transformer as a CoreML model package.

## Declaration

```swift
func export(to url: URL) throws
```

## Parameters

- `url`: The location to write the model into.

## See Also

### Exporting the model

- [export(to:metadata:)](export%28to_metadata_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Exports this transformer as a CoreML model package with user-supplied metadata.
