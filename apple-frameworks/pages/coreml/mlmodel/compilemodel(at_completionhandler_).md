> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel/compilemodel(at:completionhandler:)](https://developer.apple.com/documentation/coreml/mlmodel/compilemodel(at:completionhandler:))

# compileModel(at:completionHandler:)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Compile a model for a device.

## Declaration

```swift
class func compileModel(at url: URL, completionHandler handler: @escaping (Result<URL, any Error>) -> Void)
```

## Parameters

- `url`: The URL to the model file.
- `handler`: The completion handler the framework calls when the compilation completes.

## See Also

### Compiling a model

- [compileModel(at:)](compilemodel%28at_%29.md)
