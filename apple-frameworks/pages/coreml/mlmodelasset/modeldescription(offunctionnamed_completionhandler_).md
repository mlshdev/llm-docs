> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelasset/modeldescription(offunctionnamed:completionhandler:)](https://developer.apple.com/documentation/coreml/mlmodelasset/modeldescription(offunctionnamed:completionhandler:))

# modelDescription(ofFunctionNamed:completionHandler:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The model descripton for a specified function.

## Declaration

```swift
func modelDescription(ofFunctionNamed functionName: String, completionHandler handler: @escaping @Sendable (MLModelDescription?, (any Error)?) -> Void)
```

```swift
func modelDescription(of functionName: String) async throws -> MLModelDescription
```

<a id="discussion"></a>

## Discussion

Use this method to get the description of the model such as the feature descriptions, the model author, and other metadata.

```swift
let modelAsset = try MLModelAsset(url: modelURL)
let modelDescription = try await modelAsset.modelDescription(of: "my_function")
print(modelDescription)
```

## See Also

### Getting the model description

- [modelDescription(completionHandler:)](modeldescription%28completionhandler_%29.md): The default model descripton.

# modelDescriptionOfFunctionNamed:completionHandler: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The model descripton for a specified function.

## Declaration

```objectivec
- (void) modelDescriptionOfFunctionNamed:(NSString *) functionName completionHandler:(void (^)(MLModelDescription *modelDescription, NSError *error)) handler;
```

<a id="discussion"></a>

## Discussion

Use this method to get the description of the model such as the feature descriptions, the model author, and other metadata.

```swift
let modelAsset = try MLModelAsset(url: modelURL)
let modelDescription = try await modelAsset.modelDescription(of: "my_function")
print(modelDescription)
```

## See Also

### Getting the model description

- [modelDescriptionWithCompletionHandler:](modeldescription%28completionhandler_%29.md): The default model descripton.
