> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelcollection/didchangenotification](https://developer.apple.com/documentation/coreml/mlmodelcollection/didchangenotification)

# didChangeNotification (Swift)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

The notification the framework sends when it receives an update to a model collection.

> Use [Background Assets](../../backgroundassets.md) or [URLSession](../../foundation/urlsession.md) instead.

## Declaration

```swift
class let didChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Register your app to get notifications when a model collection update is available by calling [addObserver(forName:object:queue:using:)](../../foundation/notificationcenter/addobserver%28forname_object_queue_using_%29.md).

```swift
let center = NotificationCenter.default
var token: NSObjectProtocol?

token = center.addObserver(forName: MLModelCollection.didChangeNotification,
                           object: nil,
                           queue: nil) { [unowned self] note in
    guard let modelCollection = note.object as? MLModelCollection else {
        print("Model Collection notification's object is not a model collection")
        return
    }

    // Use updated model collection ...
    self.receivedUpdatedModelCollection(modelCollection)

    // Clean up notification registration.
    center.removeObserver(token!)
}
```

Typically, you register for model collection notifications when your app needs to use the newest models as soon as the collection is available. Your app can always get the newest model collection by calling [beginAccessingModelCollectionWithIdentifier:completionHandler:](beginaccessingmodelcollectionwithidentifier_completionhandler_.md).

# MLModelCollectionDidChangeNotification (Objective-C)

**Framework:** Core ML  
**Kind:** Global Variable  
**Availability:** visionOS 1.0+ (deprecated in 1.1)

The notification the framework sends when it receives an update to a model collection.

> Use [Background Assets](../../backgroundassets.md) or [NSURLSession](../../foundation/urlsession.md) instead.

## Declaration

```objectivec
extern NSNotificationName const MLModelCollectionDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

Register your app to get notifications when a model collection update is available by calling [addObserverForName:object:queue:usingBlock:](../../foundation/notificationcenter/addobserver%28forname_object_queue_using_%29.md).

```swift
let center = NotificationCenter.default
var token: NSObjectProtocol?

token = center.addObserver(forName: MLModelCollection.didChangeNotification,
                           object: nil,
                           queue: nil) { [unowned self] note in
    guard let modelCollection = note.object as? MLModelCollection else {
        print("Model Collection notification's object is not a model collection")
        return
    }

    // Use updated model collection ...
    self.receivedUpdatedModelCollection(modelCollection)

    // Clean up notification registration.
    center.removeObserver(token!)
}
```

Typically, you register for model collection notifications when your app needs to use the newest models as soon as the collection is available. Your app can always get the newest model collection by calling [beginAccessingModelCollectionWithIdentifier:completionHandler:](beginaccessingmodelcollectionwithidentifier_completionhandler_.md).
