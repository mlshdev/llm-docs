> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel/load(contentsof:configuration:)](https://developer.apple.com/documentation/coreml/mlmodel/load(contentsof:configuration:))

# load(contentsOf:configuration:)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Construct a model asynchronously from a compiled model asset.

## Declaration

```swift
class func load(contentsOf url: URL, configuration: MLModelConfiguration = MLModelConfiguration()) async throws -> MLModel
```

## Parameters

- `url`: The URL of the compiled model asset derived from in-memory or on-disk Core ML model.
- `configuration`: The model configuration that hold options for loading the model.

<a id="return-value"></a>

## Return Value

The loaded model, if successful; otherwise, `nil`.

## See Also

### Loading a model

- [load(\_:configuration:completionHandler:)](load%28__configuration_completionhandler_%29.md): Construct a model asynchronously from a compiled model asset.
- [load(contentsOf:configuration:completionHandler:)](load%28contentsof_configuration_completionhandler_%29.md): Creates a Core ML model instance asynchronously from a compiled model file, a custom configuration, and a completion handler.
- [init(contentsOf:)](init%28contentsof_%29.md): Creates a Core ML model instance from a compiled model file.
- [init(contentsOf:configuration:)](init%28contentsof_configuration_%29.md): Creates a Core ML model instance from a compiled model file and a custom configuration.
- [init(contentsOfURL:)](init%28contentsofurl_%29.md)
- [init(contentsOfURL:configuration:)](init%28contentsofurl_configuration_%29.md)
