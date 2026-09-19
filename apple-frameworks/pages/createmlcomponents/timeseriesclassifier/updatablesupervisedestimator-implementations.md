> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifier/updatablesupervisedestimator-implementations

# UpdatableSupervisedEstimator Implementations

**Framework:** Create ML Components  
**Kind:** API Collection

## Topics

### Instance Methods

- [decodeWithOptimizer(from:)](decodewithoptimizer%28from_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Reads the encoded model and optimizer with a decoder.
- [encodeWithOptimizer(\_:to:)](encodewithoptimizer%28__to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Encodes the model and optimizer to an encoder.
- [makeTransformer()](maketransformer%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Creates a default-initialized model suitable for incremental fitting.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. Updates a model with a new batch of examples.
