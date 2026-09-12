> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelcollection/endaccessing(identifier:)](https://developer.apple.com/documentation/coreml/mlmodelcollection/endaccessing(identifier:))

# endAccessing(identifier:) (Swift)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

Terminates access to a model collection.

> Use [Background Assets](../../backgroundassets.md) or [URLSession](../../foundation/urlsession.md) instead.

## Declaration

```swift
class func endAccessing(identifier: String) async throws -> Bool
```

## Parameters

- `identifier`: The name of the model collection.

<a id="Discussion"></a>

## Discussion

Use this method when your app no longer needs access to a model collection.

**Swift**

```swift
MLModelCollection.endAccessing(identifier: modelCollectionName) { result in
    switch result {
    case .success():
        print("Successfully ended access to `\(modelCollectionName)`.")

    case .failure(let error):
        print("Error ending access to `\(modelCollectionName)`: \(error)")
    }
}
```

**Objective-C**

```objc
[MLModelCollection endAccessingModelCollectionWithIdentifier:modelCollectionName
                                           completionHandler:^(BOOL success,
                                                               NSError * _Nullable error) {
    if (success) {
        NSLog(@"Successfully ended access to `%@`.", modelCollectionName);
    }
    else {
        NSLog(@"Error ending access to `%@`: %@", modelCollectionName, error);
    }
}];
```

# endAccessingModelCollectionWithIdentifier:completionHandler: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** visionOS 1.0+ (deprecated in 1.1)

Terminates access to a model collection.

> Use [Background Assets](../../backgroundassets.md) or [NSURLSession](../../foundation/urlsession.md) instead.

## Declaration

```objectivec
+ (void) endAccessingModelCollectionWithIdentifier:(NSString *) identifier completionHandler:(void (^)(BOOL success, NSError *error)) completionHandler;
```

## Parameters

- `identifier`: The name of the model collection.
- `completionHandler`: In Objective-C, the block that Core ML calls when it’s finished removing your app’s access to the model collection.

  The block has the following parameters:

  - **success**: A Boolean value that indicates whether the method completed successfully.
  - **error**: An [NSError](../../foundation/nserror.md) instance if the method failed to end your app’s access to the model collection (see [MLModelError](../mlmodelerror-swift.struct/code.md)).

<a id="Discussion"></a>

## Discussion

Use this method when your app no longer needs access to a model collection.

**Swift**

```swift
MLModelCollection.endAccessing(identifier: modelCollectionName) { result in
    switch result {
    case .success():
        print("Successfully ended access to `\(modelCollectionName)`.")

    case .failure(let error):
        print("Error ending access to `\(modelCollectionName)`: \(error)")
    }
}
```

**Objective-C**

```objc
[MLModelCollection endAccessingModelCollectionWithIdentifier:modelCollectionName
                                           completionHandler:^(BOOL success,
                                                               NSError * _Nullable error) {
    if (success) {
        NSLog(@"Successfully ended access to `%@`.", modelCollectionName);
    }
    else {
        NSLog(@"Error ending access to `%@`: %@", modelCollectionName, error);
    }
}];
```

## See Also

### Accessing a model collection

- [beginAccessingModelCollectionWithIdentifier:completionHandler:](beginaccessingmodelcollectionwithidentifier_completionhandler_.md): Deprecated. Requests access to a model collection.
