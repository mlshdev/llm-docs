> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelcollection/beginaccessingmodelcollectionwithidentifier:completionhandler:](https://developer.apple.com/documentation/coreml/mlmodelcollection/beginaccessingmodelcollectionwithidentifier:completionhandler:)

# beginAccessingModelCollectionWithIdentifier:completionHandler:

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** visionOS 1.0+ (deprecated in 1.1)

Requests access to a model collection.

> Use [Background Assets](../../backgroundassets.md) or [NSURLSession](../../foundation/urlsession.md) instead.

## Declaration

```objectivec
+ (NSProgress *) beginAccessingModelCollectionWithIdentifier:(NSString *) identifier completionHandler:(void (^)(MLModelCollection *modelCollection, NSError *error)) completionHandler;
```

## Parameters

- `identifier`: The name of the model collection.
- `completionHandler`: In Objective-C, the block that Core ML calls when the model collections is available to your app.

  The block has the following parameters:

  - **model**: An [MLModelCollection](../mlmodelcollection.md) instance if the collection loaded successfully.
  - **error**: An [NSError](../../foundation/nserror.md) instance if the model collection failed to load (see [MLModelError](../mlmodelerror-swift.struct/code.md)).

<a id="Discussion"></a>

## Discussion

Use this method to access a model collection from a deployment (see `Creating and Deploying a Model Collection`). Your app can call this method multiple times, typically each time it needs to access the models in the collection.

**Swift**

```swift
let progress = MLModelCollection.beginAccessing(identifier: modelCollectionName,
                                         completionHandler: modelCollectionAvailable)
```

**Objective-C**

```objc
[MLModelCollection beginAccessingModelCollectionWithIdentifier: modelCollectionName
                                             completionHandler:^(MLModelCollection * _Nullable modelCollection,
                                                                 NSError * _Nullable error) {
    if (nil != error) {
        [self reportError:error];
        return;
    }

    NSLog(@"Model collection `%@` is now available.", modelCollection.identifier);

    // Load a model from the collection.
    [self loadModelWithIdentifier:@"DeploymentModel"
                   fromCollection: modelCollection];
}];

```

Core ML calls your completion app’s completion handler once the entire collection is on the user’s device. If the model collection isn’t already on the user’s device, Core ML immediately begins fetching it over the network.

```swift
func modelCollectionAvailable(result: Result<MLModelCollection, Error>) {
    switch result {
    case .success(let collection):
        print("Model collection `\(collection.identifier)` is now available.")
        
        // Load a model from the collection.
        loadModel("DeploymentModel", from: collection)
        
    case .failure(let error):
        print("Error accessing a model collection: \(error)")
    }
}
```

Once your app has the model collection, use the model’s identifier that you assigned it in the deployment (see `Creating and Deploying a Model Collection`).

**Swift**

```swift
func loadModel(_ modelName: String, from collection: MLModelCollection) {
    guard let entry = collection.entries[modelName] else {
        print("Couldn't find model `\(modelName)` in `\(collection.identifier)`.")
        return
    }

    MLModel.load(contentsOf: entry.modelURL) { result in
        switch result {
        case .success(let modelFromCollection):
            // Use the `modelFromCollection` instance.
            ...

        case .failure(let error):
            print("Error loading model `\(modelName)` in `\(collection.identifier)`: \(error).")
        }
    }
    ...
}
```

**Objective-C**

```objc
- (void)loadModelWithIdentifier:(NSString*) modelName
                 fromCollection:(MLModelCollection*) modelCollection {
    MLModelCollectionEntry* entry = modelCollection.entries[modelName];

    if (nil == entry) {
        NSLog(@"Couldn't find model `%@` in the `%@`.", modelName, modelCollection.identifier);
        return;
    }

    [MLModel loadContentsOfURL:entry.modelURL
                 configuration:[[MLModelConfiguration alloc] init]
             completionHandler:^(MLModel * _Nullable modelFromCollection,
                                 NSError * _Nullable error) {

        if (nil != error) {
            NSLog(@"Error loading model: %@", error);
            return;
        }

        // Use the `modelFromCollection` instance.
        // ...
    }];
}
```

Create an instance of a collection’s model by passing its entry’s `modelURL` — from the model collection’s [entries](entries.md) property — to the `load(contentsOf:configuration:completionHandler:)` class method.

> **Tip**

>  Use a default model from your app’s bundle while your app waits for the model collection. When your app gets the model collection, switch to the collection’s newer model.

If your app uses a default model from the app bundle, you can use an initializer from its convenience wrapper class that Xcode automatically generated.

```swift
let modelFromCollection = try? BuiltInModel(contentsOf: entry.modelURL)
```

## See Also

### Accessing a model collection

- [endAccessingModelCollectionWithIdentifier:completionHandler:](endaccessing%28identifier_%29.md): Deprecated. Terminates access to a model collection.
