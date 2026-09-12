> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelcollection](https://developer.apple.com/documentation/coreml/mlmodelcollection)

# MLModelCollection (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

A set of Core ML models from a model deployment.

> Use [Background Assets](../backgroundassets.md) or [URLSession](../foundation/urlsession.md) instead.

## Declaration

```swift
class MLModelCollection
```

<a id="overview"></a>

## Overview

Use a model collection to access the models from a Core ML Model Deployment. For example, you can use a model collection to replace one or more of your app’s built-in models with a newer version.

To access the newest model collection from a deployment, call the [beginAccessingModelCollectionWithIdentifier:completionHandler:](mlmodelcollection/beginaccessingmodelcollectionwithidentifier_completionhandler_.md) type method. Your app can also get a notification when Core ML receives an update to a model collection (see [didChangeNotification](mlmodelcollection/didchangenotification.md)).

## Topics

### Accessing a model collection

- [endAccessing(identifier:)](mlmodelcollection/endaccessing%28identifier_%29.md): Deprecated. Terminates access to a model collection.

### Identifying a model collection

- [identifier](mlmodelcollection/identifier.md): Deprecated. The name of the model collection, unique to the development team.
- [deploymentID](mlmodelcollection/deploymentid.md): Deprecated. The unique identifier of the model collection’s deployment.

### Retreiving models from a collection

- [entries](mlmodelcollection/entries.md): Deprecated. A dictionary of model entries keyed to the models’ identifiers.
- [MLModelCollection.Entry](mlmodelcollection/entry.md): Deprecated. A model and its identifier within a model collection.

### Registering for model collection updates

- [didChangeNotification](mlmodelcollection/didchangenotification.md): Deprecated. The notification the framework sends when it receives an update to a model collection.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MLModelCollection (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** visionOS 1.0+ (deprecated in 1.1)

A set of Core ML models from a model deployment.

> Use [Background Assets](../backgroundassets.md) or [NSURLSession](../foundation/urlsession.md) instead.

## Declaration

```objectivec
@interface MLModelCollection : NSObject
```

<a id="overview"></a>

## Overview

Use a model collection to access the models from a Core ML Model Deployment. For example, you can use a model collection to replace one or more of your app’s built-in models with a newer version.

To access the newest model collection from a deployment, call the [beginAccessingModelCollectionWithIdentifier:completionHandler:](mlmodelcollection/beginaccessingmodelcollectionwithidentifier_completionhandler_.md) type method. Your app can also get a notification when Core ML receives an update to a model collection (see [MLModelCollectionDidChangeNotification](mlmodelcollection/didchangenotification.md)).

## Topics

### Accessing a model collection

- [beginAccessingModelCollectionWithIdentifier:completionHandler:](mlmodelcollection/beginaccessingmodelcollectionwithidentifier_completionhandler_.md): Deprecated. Requests access to a model collection.
- [endAccessingModelCollectionWithIdentifier:completionHandler:](mlmodelcollection/endaccessing%28identifier_%29.md): Deprecated. Terminates access to a model collection.

### Identifying a model collection

- [identifier](mlmodelcollection/identifier.md): Deprecated. The name of the model collection, unique to the development team.
- [deploymentID](mlmodelcollection/deploymentid.md): Deprecated. The unique identifier of the model collection’s deployment.

### Retreiving models from a collection

- [entries](mlmodelcollection/entries.md): Deprecated. A dictionary of model entries keyed to the models’ identifiers.
- [MLModelCollectionEntry](mlmodelcollection/entry.md): Deprecated. A model and its identifier within a model collection.

### Registering for model collection updates

- [MLModelCollectionDidChangeNotification](mlmodelcollection/didchangenotification.md): Deprecated. The notification the framework sends when it receives an update to a model collection.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
