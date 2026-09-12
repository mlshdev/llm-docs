> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel/load(contentsof:configuration:completionhandler:)](https://developer.apple.com/documentation/coreml/mlmodel/load(contentsof:configuration:completionhandler:))

# load(contentsOf:configuration:completionHandler:)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a Core ML model instance asynchronously from a compiled model file, a custom configuration, and a completion handler.

## Declaration

```swift
class func load(contentsOf url: URL, configuration: MLModelConfiguration = MLModelConfiguration(), completionHandler handler: @escaping (Result<MLModel, any Error>) -> Void)
```

## Parameters

- `url`: The path to a compiled model file (*ModelName*`.mlmodelc`), typically with the `URL` that [compileModel(at:)](https://developer.apple.com/documentation/coreml/mlmodel/compilemodel%28at:%29-6442s) returns.
- `configuration`: The runtime settings for the new model instance.
- `handler`: A closure the method calls when it finishes loading the model.

<a id="Discussion"></a>

## Discussion

Use this method to load a model asynchronously. Core ML calls your completion handler after it successfully loads the model, or encounters an error attempting to load it.

**Swift**

```swift
MLModel.load(contentsOf: modelURL) { result in
    switch result {
    case .success(let loadedModel):
        print("Successfully loaded model `\(loadedModel)`.")

        // Use the loaded model for predictions.
        // ...

    case .failure(let error):
        print("Error loading model: \(error).")
    }
}
```

**Objective-C**

```objc
[MLModel loadContentsOfURL:modelURL
             configuration:[[MLModelConfiguration alloc] init]
         completionHandler:^(MLModel *loadedModel,
                             NSError *error) {
    if (nil == loadedModel) {
        NSLog(@"Error loading model`: %@", (nil != error) ? error : modelURL);
        return;
    }

    NSLog(@"Successfully loaded model at: %@", modelURL);

    // Use the loaded model for predictions.
    // ...
}];
```

In Swift, if the model loaded successfully, you can use the instance from the [Result.success(\_:)](https://developer.apple.com/documentation/swift/result/success%28_:%29) associated value; otherwise, use the [Result.failure(\_:)](https://developer.apple.com/documentation/swift/result/failure%28_:%29) associated value to address the error. In Objective-C, you can use the [MLModel](../mlmodel.md) instance in your completion hander; otherwise, use the [NSError](../../foundation/nserror.md) instance to address the error.  See [MLModelError.Code](../mlmodelerror-swift.struct/code.md) for the list of error codes.

## See Also

### Loading a model

- [load(contentsOf:configuration:)](load%28contentsof_configuration_%29.md): Construct a model asynchronously from a compiled model asset.
- [load(\_:configuration:completionHandler:)](load%28__configuration_completionhandler_%29.md): Construct a model asynchronously from a compiled model asset.
- [init(contentsOf:)](init%28contentsof_%29.md): Creates a Core ML model instance from a compiled model file.
- [init(contentsOf:configuration:)](init%28contentsof_configuration_%29.md): Creates a Core ML model instance from a compiled model file and a custom configuration.
- [init(contentsOfURL:)](init%28contentsofurl_%29.md)
- [init(contentsOfURL:configuration:)](init%28contentsofurl_configuration_%29.md)
