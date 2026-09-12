> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:handlewatchkitextensionrequest:reply:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:handlewatchkitextensionrequest:reply:))

# application(\_:handleWatchKitExtensionRequest:reply:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.2+ · iPadOS 8.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate to respond to a request from a paired watchOS app.

## Declaration

```swift
optional func application(_ application: UIApplication, handleWatchKitExtensionRequest userInfo: [AnyHashable : Any]?, reply: @escaping ([AnyHashable : Any]?) -> Void)
```

```swift
optional func application(_ application: UIApplication, handleWatchKitExtensionRequest userInfo: [AnyHashable : Any]?) async -> [AnyHashable : Any]?
```

## Parameters

- `application`: Your singleton app object.
- `userInfo`: A dictionary provided by the watchOS app with the request information. Use the data in this dictionary to process the request from the watchOS app.
- `reply`: A block to execute with the results of the request. This block has no return value and takes the following parameter:

  - **replyInfo**: A dictionary containing data to return to the watchOS app. The contents of the dictionary must be serializable to a property list file. The contents of this dictionary are at your discretion and you may specify `nil`.

<a id="Discussion"></a>

## Discussion

If your iOS app and watchOS app coordinate efforts to perform certain tasks, implement this method and use it to respond to requests from the watchOS app. After finishing the request, execute the provided `reply` block (if any) to return the results.

Because this method is likely to be called while your app is in the background, call the [beginBackgroundTask(withName:expirationHandler:)](../uiapplication/beginbackgroundtask%28withname_expirationhandler_%29.md) method at the start of your implementation and the [endBackgroundTask(\_:)](../uiapplication/endbackgroundtask%28__%29.md) method after you have processed the reply and executed the `reply` block. Starting a background task ensures that your app is not suspended before it has a chance to send its reply.

# application:handleWatchKitExtensionRequest:reply: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.2+ · iPadOS 8.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate to respond to a request from a paired watchOS app.

## Declaration

```objectivec
- (void) application:(UIApplication *) application handleWatchKitExtensionRequest:(NSDictionary *) userInfo reply:(void (^)(NSDictionary *replyInfo)) reply;
```

## Parameters

- `application`: Your singleton app object.
- `userInfo`: A dictionary provided by the watchOS app with the request information. Use the data in this dictionary to process the request from the watchOS app.
- `reply`: A block to execute with the results of the request. This block has no return value and takes the following parameter:

  - **replyInfo**: A dictionary containing data to return to the watchOS app. The contents of the dictionary must be serializable to a property list file. The contents of this dictionary are at your discretion and you may specify `nil`.

<a id="Discussion"></a>

## Discussion

If your iOS app and watchOS app coordinate efforts to perform certain tasks, implement this method and use it to respond to requests from the watchOS app. After finishing the request, execute the provided `reply` block (if any) to return the results.

Because this method is likely to be called while your app is in the background, call the [beginBackgroundTaskWithName:expirationHandler:](../uiapplication/beginbackgroundtask%28withname_expirationhandler_%29.md) method at the start of your implementation and the [endBackgroundTask:](../uiapplication/endbackgroundtask%28__%29.md) method after you have processed the reply and executed the `reply` block. Starting a background task ensures that your app is not suspended before it has a chance to send its reply.
