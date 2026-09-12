> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/timeseriesclassifier/model/export(to:metadata:)](https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifier/model/export(to:metadata:))

# export(to:metadata:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Exports this transformer as a CoreML model package with user-supplied metadata.

## Declaration

```swift
func export(to url: URL, metadata: ModelMetadata) throws
```

## Parameters

- `url`: The location to write the model into.
- `metadata`: Contextual user-provided information.

## See Also

### Applying and exporting

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Performs a classification on a shaped array of input features.
- [export(to:)](export%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Exports this transformer as a CoreML model package.
