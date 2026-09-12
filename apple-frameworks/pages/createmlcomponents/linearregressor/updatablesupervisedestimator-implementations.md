> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/linearregressor/updatablesupervisedestimator-implementations](https://developer.apple.com/documentation/createmlcomponents/linearregressor/updatablesupervisedestimator-implementations)

# UpdatableSupervisedEstimator Implementations

**Framework:** Create ML Components  
**Kind:** API Collection

## Topics

### Instance Methods

- [decodeWithOptimizer(from:)](decodewithoptimizer%28from_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Reads the encoded transformer and optimizer with a decoder.
- [encodeWithOptimizer(\_:to:)](encodewithoptimizer%28__to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Encodes the transformer and optimizer to an encoder.
- [makeTransformer()](maketransformer%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Creates a default-initialized transformer suitable for incremental fitting.
- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `BinaryFloatingPoint`. Updates a transformer with a new sequence of examples.
