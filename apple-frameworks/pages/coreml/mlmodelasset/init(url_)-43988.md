> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelasset/init(url:)-43988](https://developer.apple.com/documentation/coreml/mlmodelasset/init(url:)-43988)

# init(url:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Constructs a ModelAsset from a compiled model URL.

## Declaration

```swift
convenience init(url compiledModelURL: URL) throws
```

## Parameters

- `compiledModelURL`: Location on the disk where the model asset is present.

<a id="return-value"></a>

## Return Value

A model asset or nil if there is an error.

## See Also

### Creating a model asset

- [init(specification:)](init%28specification_%29.md): Creates a model asset from an in-memory model specification.
- [init(specification:blobMapping:)](init%28specification_blobmapping_%29.md): Construct a model asset from an ML Program specification by replacing blob file references with corresponding in-memory blobs.

# modelAssetWithURL:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Constructs a ModelAsset from a compiled model URL.

## Declaration

```objectivec
+ (instancetype) modelAssetWithURL:(NSURL *) compiledModelURL error:(NSError **) error;
```

## Parameters

- `compiledModelURL`: Location on the disk where the model asset is present.
- `error`: Errors if the model asset is not loadable.

<a id="return-value"></a>

## Return Value

A model asset or nil if there is an error.

## See Also

### Creating a model asset

- [modelAssetWithSpecificationData:error:](init%28specification_%29.md): Creates a model asset from an in-memory model specification.
- [modelAssetWithSpecificationData:blobMapping:error:](init%28specification_blobmapping_%29.md): Construct a model asset from an ML Program specification by replacing blob file references with corresponding in-memory blobs.
