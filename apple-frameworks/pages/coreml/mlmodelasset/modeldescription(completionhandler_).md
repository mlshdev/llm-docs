> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelasset/modeldescription(completionhandler:)](https://developer.apple.com/documentation/coreml/mlmodelasset/modeldescription(completionhandler:))

# modelDescription(completionHandler:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The default model descripton.

## Declaration

```swift
func modelDescription(completionHandler handler: @escaping @Sendable (MLModelDescription?, (any Error)?) -> Void)
```

```swift
var modelDescription: MLModelDescription { get async throws }
```

<a id="discussion"></a>

## Discussion

Use this method to get the description of the model such as the feature descriptions, the model author, and other metadata.

For the multi-function model asset, this method vends the description for the default function. Use `modelDescription(for:)` to get the model description of other functions.

```swift
let modelAsset = try MLModelAsset(url: modelURL)
let modelDescription = try await modelAsset.modelDescription()
print(modelDescription)
```

## See Also

### Getting the model description

- [modelDescription(ofFunctionNamed:completionHandler:)](modeldescription%28offunctionnamed_completionhandler_%29.md): The model descripton for a specified function.

# modelDescriptionWithCompletionHandler: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The default model descripton.

## Declaration

```objectivec
- (void) modelDescriptionWithCompletionHandler:(void (^)(MLModelDescription *modelDescription, NSError *error)) handler;
```

<a id="discussion"></a>

## Discussion

Use this method to get the description of the model such as the feature descriptions, the model author, and other metadata.

For the multi-function model asset, this method vends the description for the default function. Use `modelDescription(for:)` to get the model description of other functions.

```swift
let modelAsset = try MLModelAsset(url: modelURL)
let modelDescription = try await modelAsset.modelDescription()
print(modelDescription)
```

## See Also

### Getting the model description

- [modelDescriptionOfFunctionNamed:completionHandler:](modeldescription%28offunctionnamed_completionhandler_%29.md): The model descripton for a specified function.
