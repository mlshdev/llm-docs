> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifier/model/export(to:)

# export(to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Exports this transformer as a CoreML model package.

## Declaration

```swift
func export(to url: URL) throws
```

## Parameters

- `url`: The location to write the model into.

## See Also

### Applying and exporting

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Performs a classification on a shaped array of input features.
- [export(to:metadata:)](export%28to_metadata_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Exports this transformer as a CoreML model package with user-supplied metadata.
