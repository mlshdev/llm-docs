> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlmodel/init(contentsof:)](https://developer.apple.com/documentation/naturallanguage/nlmodel/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** Natural Language  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a new natural language model based on a compiled Core ML model at the given URL.

## Declaration

```swift
convenience init(contentsOf url: URL) throws
```

## Parameters

- `url`: The location of the *compiled* Core ML model file in the file system (ending with `.mlmodelc`) that’s the basis for this natural language model.

## See Also

### Creating a model

- [init(mlModel:)](init%28mlmodel_%29-9tpjr.md): Creates a new natural language model based on the given Core ML model instance.

# modelWithContentsOfURL:error: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a new natural language model based on a compiled Core ML model at the given URL.

## Declaration

```objectivec
+ (instancetype) modelWithContentsOfURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The location of the *compiled* Core ML model file in the file system (ending with `.mlmodelc`) that’s the basis for this natural language model.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## See Also

### Creating a model

- [modelWithMLModel:error:](init%28mlmodel_%29-9tpjr.md): Creates a new natural language model based on the given Core ML model instance.
