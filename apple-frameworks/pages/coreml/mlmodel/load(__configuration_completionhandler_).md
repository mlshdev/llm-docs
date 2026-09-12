> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel/load(_:configuration:completionhandler:)](https://developer.apple.com/documentation/coreml/mlmodel/load(_:configuration:completionhandler:))

# load(\_:configuration:completionHandler:) (Swift)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Construct a model asynchronously from a compiled model asset.

## Declaration

```swift
class func load(_ asset: MLModelAsset, configuration: MLModelConfiguration, completionHandler handler: @escaping @Sendable (MLModel?, (any Error)?) -> Void)
```

```swift
class func load(asset: MLModelAsset, configuration: MLModelConfiguration) async throws -> MLModel
```

## Parameters

- `asset`: The compiled model asset derived from in-memory or on-disk Core ML model.
- `configuration`: The model configuration that holds options for loading the model.
- `handler`: The completion handler invoked when the load completes. A valid [MLModel](../mlmodel.md) returns on success, or an error if failure.

## See Also

### Loading a model

- [load(contentsOf:configuration:)](load%28contentsof_configuration_%29.md): Construct a model asynchronously from a compiled model asset.
- [load(contentsOf:configuration:completionHandler:)](load%28contentsof_configuration_completionhandler_%29.md): Creates a Core ML model instance asynchronously from a compiled model file, a custom configuration, and a completion handler.
- [init(contentsOf:)](init%28contentsof_%29.md): Creates a Core ML model instance from a compiled model file.
- [init(contentsOf:configuration:)](init%28contentsof_configuration_%29.md): Creates a Core ML model instance from a compiled model file and a custom configuration.
- [init(contentsOfURL:)](init%28contentsofurl_%29.md)
- [init(contentsOfURL:configuration:)](init%28contentsofurl_configuration_%29.md)

# loadModelAsset:configuration:completionHandler: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Construct a model asynchronously from a compiled model asset.

## Declaration

```objectivec
+ (void) loadModelAsset:(MLModelAsset *) asset configuration:(MLModelConfiguration *) configuration completionHandler:(void (^)(MLModel *model, NSError *error)) handler;
```

## Parameters

- `asset`: The compiled model asset derived from in-memory or on-disk Core ML model.
- `configuration`: The model configuration that holds options for loading the model.
- `handler`: The completion handler invoked when the load completes. A valid [MLModel](../mlmodel.md) returns on success, or an error if failure.
