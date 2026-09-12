> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/timeseriesclassifier/model/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifier/model/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Performs a classification on a shaped array of input features.

## Declaration

```swift
func applied(to input: MLShapedArray<Scalar>, eventHandler: EventHandler? = nil) async throws -> ClassificationDistribution<Label>
```

## Parameters

- `input`: A shaped array of input features. The shape must `[sequenceLength, featureSize]`.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

A classification distribution.

## See Also

### Applying and exporting

- [export(to:)](export%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Exports this transformer as a CoreML model package.
- [export(to:metadata:)](export%28to_metadata_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Exports this transformer as a CoreML model package with user-supplied metadata.
