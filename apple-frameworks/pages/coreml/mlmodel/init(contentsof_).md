> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel/init(contentsof:)](https://developer.apple.com/documentation/coreml/mlmodel/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a Core ML model instance from a compiled model file.

## Declaration

```swift
convenience init(contentsOf url: URL) throws
```

## Parameters

- `url`: The path to a compiled model file (*ModelName*`.mlmodelc`), typically with the `URL` that [compileModel(at:)](https://developer.apple.com/documentation/coreml/mlmodel/compilemodel%28at:%29-6442s) returns.

<a id="Discussion"></a>

## Discussion

In most cases, your app won’t need to create a model object directly. Consider the programmer-friendly wrapper class that Xcode automatically generates when you add a model to your project (see [Integrating a Core ML Model into Your App](../integrating-a-core-ml-model-into-your-app.md)).

If the wrapper class doesn’t meet your app’s needs or you need to customize the model’s configuration, use this initializer to create a model object from any compiled model file you can access. Typically, you use this initializer after your app has downloaded and compiled a model, which is one technique for saving space in your app (see [Downloading and Compiling a Model on the User’s Device](../downloading-and-compiling-a-model-on-the-user-s-device.md)).

## See Also

### Loading a model

- [load(contentsOf:configuration:)](load%28contentsof_configuration_%29.md): Construct a model asynchronously from a compiled model asset.
- [load(\_:configuration:completionHandler:)](load%28__configuration_completionhandler_%29.md): Construct a model asynchronously from a compiled model asset.
- [load(contentsOf:configuration:completionHandler:)](load%28contentsof_configuration_completionhandler_%29.md): Creates a Core ML model instance asynchronously from a compiled model file, a custom configuration, and a completion handler.
- [init(contentsOf:configuration:)](init%28contentsof_configuration_%29.md): Creates a Core ML model instance from a compiled model file and a custom configuration.
- [init(contentsOfURL:)](init%28contentsofurl_%29.md)
- [init(contentsOfURL:configuration:)](init%28contentsofurl_configuration_%29.md)

# modelWithContentsOfURL:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a Core ML model instance from a compiled model file.

## Declaration

```objectivec
+ (instancetype) modelWithContentsOfURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The path to a compiled model file (*ModelName*`.mlmodelc`), typically with the `URL` that [compileModelAtURL:error:](https://developer.apple.com/documentation/coreml/mlmodel/compilemodel%28at:%29-6442s) returns.
- `error`: On return in Objective-C, if an error occurs, a pointer to an error information instance; otherwise `nil`.

<a id="Discussion"></a>

## Discussion

In most cases, your app won’t need to create a model object directly. Consider the programmer-friendly wrapper class that Xcode automatically generates when you add a model to your project (see [Integrating a Core ML Model into Your App](../integrating-a-core-ml-model-into-your-app.md)).

If the wrapper class doesn’t meet your app’s needs or you need to customize the model’s configuration, use this initializer to create a model object from any compiled model file you can access. Typically, you use this initializer after your app has downloaded and compiled a model, which is one technique for saving space in your app (see [Downloading and Compiling a Model on the User’s Device](../downloading-and-compiling-a-model-on-the-user-s-device.md)).
