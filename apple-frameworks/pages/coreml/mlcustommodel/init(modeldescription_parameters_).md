> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcustommodel/init(modeldescription:parameters:)](https://developer.apple.com/documentation/coreml/mlcustommodel/init(modeldescription:parameters:))

# init(modelDescription:parameters:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a custom model with the given description and parameters.

## Declaration

```swift
init(modelDescription: MLModelDescription, parameters: [String : Any]) throws
```

## Parameters

- `modelDescription`: A description of the model.
- `parameters`: The parameters for configuring the model.

# initWithModelDescription:parameterDictionary:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a custom model with the given description and parameters.

## Declaration

```objectivec
- (instancetype) initWithModelDescription:(MLModelDescription *) modelDescription parameterDictionary:(NSDictionary<NSString *,id> *) parameters error:(NSError **) error;
```

## Parameters

- `modelDescription`: A description of the model.
- `parameters`: The parameters for configuring the model.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.
