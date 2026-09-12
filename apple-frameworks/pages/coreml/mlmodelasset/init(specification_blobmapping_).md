> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelasset/init(specification:blobmapping:)](https://developer.apple.com/documentation/coreml/mlmodelasset/init(specification:blobmapping:))

# init(specification:blobMapping:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Construct a model asset from an ML Program specification by replacing blob file references with corresponding in-memory blobs.

## Declaration

```swift
convenience init(specification specificationData: Data, blobMapping: [URL : Data]) throws
```

## Parameters

- `blobMapping`: A dictionary with blob URL as the key and blob data as the value.

<a id="discussion"></a>

## Discussion

An ML Program may use `BlobFileValue` syntax, which stores the blob data in external files and refers them by URL. This factory method enables in-memory workflow for such models by using the specified in-memory blob data in place of the external files.

The format of in-memory blobs must be the same as the external files. The dictionary must contain all the reference URLs used in the specification.

## See Also

### Creating a model asset

- [init(specification:)](init%28specification_%29.md): Creates a model asset from an in-memory model specification.
- [init(url:)](init%28url_%29-43988.md): Constructs a ModelAsset from a compiled model URL.

# modelAssetWithSpecificationData:blobMapping:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Construct a model asset from an ML Program specification by replacing blob file references with corresponding in-memory blobs.

## Declaration

```objectivec
+ (instancetype) modelAssetWithSpecificationData:(NSData *) specificationData blobMapping:(NSDictionary<NSURL *,NSData *> *) blobMapping error:(NSError **) error;
```

## Parameters

- `blobMapping`: A dictionary with blob URL as the key and blob data as the value.
- `error`: When the model asset creation fails error is populated with the reason for failure.

<a id="discussion"></a>

## Discussion

An ML Program may use `BlobFileValue` syntax, which stores the blob data in external files and refers them by URL. This factory method enables in-memory workflow for such models by using the specified in-memory blob data in place of the external files.

The format of in-memory blobs must be the same as the external files. The dictionary must contain all the reference URLs used in the specification.

## See Also

### Creating a model asset

- [modelAssetWithSpecificationData:error:](init%28specification_%29.md): Creates a model asset from an in-memory model specification.
- [modelAssetWithURL:error:](init%28url_%29-43988.md): Constructs a ModelAsset from a compiled model URL.
