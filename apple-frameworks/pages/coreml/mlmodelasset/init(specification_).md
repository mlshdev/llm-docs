> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelasset/init(specification:)](https://developer.apple.com/documentation/coreml/mlmodelasset/init(specification:))

# init(specification:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a model asset from an in-memory model specification.

## Declaration

```swift
convenience init(specification specificationData: Data) throws
```

## Parameters

- `specificationData`: The contents of a `.mlmodel` as a data blob.

## See Also

### Creating a model asset

- [init(specification:blobMapping:)](init%28specification_blobmapping_%29.md): Construct a model asset from an ML Program specification by replacing blob file references with corresponding in-memory blobs.
- [init(url:)](init%28url_%29-43988.md): Constructs a ModelAsset from a compiled model URL.

# modelAssetWithSpecificationData:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a model asset from an in-memory model specification.

## Declaration

```objectivec
+ (instancetype) modelAssetWithSpecificationData:(NSData *) specificationData error:(NSError **) error;
```

## Parameters

- `specificationData`: The contents of a `.mlmodel` as a data blob.
- `error`: In Objective-C, contains a pointer to an error information instance if an error occurs; otherwise, `nil`.

## See Also

### Creating a model asset

- [modelAssetWithSpecificationData:blobMapping:error:](init%28specification_blobmapping_%29.md): Construct a model asset from an ML Program specification by replacing blob file references with corresponding in-memory blobs.
- [modelAssetWithURL:error:](init%28url_%29-43988.md): Constructs a ModelAsset from a compiled model URL.
