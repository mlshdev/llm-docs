> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlmodel/init(mlmodel:)-9tpjr](https://developer.apple.com/documentation/naturallanguage/nlmodel/init(mlmodel:)-9tpjr)

# init(mlModel:) (Swift)

**Framework:** Natural Language  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a new natural language model based on the given Core ML model instance.

## Declaration

```swift
convenience init(mlModel: MLModel) throws
```

## Parameters

- `mlModel`: A Core ML model instance that’s the basis for this natural language model.

## See Also

### Creating a model

- [init(contentsOf:)](init%28contentsof_%29.md): Creates a new natural language model based on a compiled Core ML model at the given URL.

# modelWithMLModel:error: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a new natural language model based on the given Core ML model instance.

## Declaration

```objectivec
+ (instancetype) modelWithMLModel:(MLModel *) mlModel error:(NSError **) error;
```

## Parameters

- `mlModel`: A Core ML model instance that’s the basis for this natural language model.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## See Also

### Creating a model

- [modelWithContentsOfURL:error:](init%28contentsof_%29.md): Creates a new natural language model based on a compiled Core ML model at the given URL.
