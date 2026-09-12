> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/inplaymediaintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Handles the media playback request.

## Declaration

```swift
func handle(intent: INPlayMediaIntent, completion: @escaping @Sendable (INPlayMediaIntentResponse) -> Void)
```

```swift
func handle(intent: INPlayMediaIntent) async -> INPlayMediaIntentResponse
```

## Parameters

- `intent`: The [INPlayMediaIntent](../inplaymediaintent.md) object that contains details about the user’s request. The Intents app extension confirms the information in this intent before the system calls the [handle(intent:completion:)](handle%28intent_completion_%29.md) method.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **`response`**: The [INPlayMediaIntentResponse](../inplaymediaintentresponse.md) object you create that reports the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Because the lifespan for an Intents app extension is short, the [INPlayMediaIntent](../inplaymediaintent.md) handler tells the main app to start the media playback. For audio content, respond with the [INPlayMediaIntentResponseCode.handleInApp](../inplaymediaintentresponsecode/handleinapp.md) response code. This code tells the system to launch the main app in the background and call [application(\_:handle:completionHandler:)](../../uikit/uiapplicationdelegate/application%28__handle_completionhandler_%29.md) on the [UIApplicationDelegate](../../uikit/uiapplicationdelegate.md) object. Your app should begin the audio playback in this app delegate method.

The listing below tells the app to play the requested media in the background.

```swift
public func handle(intent: INPlayMediaIntent, completion: @escaping (INPlayMediaIntentResponse) -> Void) {
    let response = INPlayMediaIntentResponse(code: .handleInApp, userActivity: nil)
    completion(response)
}
```

For video content, respond with [INPlayMediaIntentResponseCode.continueInApp](../inplaymediaintentresponsecode/continueinapp.md). This code instructs the system to launch your app in the foreground and call [application(\_:continue:restorationHandler:)](../../uikit/uiapplicationdelegate/application%28__continue_restorationhandler_%29.md) on the [UIApplicationDelegate](../../uikit/uiapplicationdelegate.md) object. Your app should start the video playback in this app delegate method.

The listing below tells the app to play the requested media in the foreground.

```swift
public func handle(intent: INPlayMediaIntent, completion: @escaping (INPlayMediaIntentResponse) -> Void) {
    let response = INPlayMediaIntentResponse(code: .continueInApp, userActivity: nil)
    completion(response)
}

```

# handlePlayMedia:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Handles the media playback request.

## Declaration

```objectivec
- (void) handlePlayMedia:(INPlayMediaIntent *) intent completion:(void (^)(INPlayMediaIntentResponse *response)) completion;
```

## Parameters

- `intent`: The [INPlayMediaIntent](../inplaymediaintent.md) object that contains details about the user’s request. The Intents app extension confirms the information in this intent before the system calls the [handlePlayMedia:completion:](handle%28intent_completion_%29.md) method.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **`response`**: The [INPlayMediaIntentResponse](../inplaymediaintentresponse.md) object you create that reports the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Because the lifespan for an Intents app extension is short, the [INPlayMediaIntent](../inplaymediaintent.md) handler tells the main app to start the media playback. For audio content, respond with the [INPlayMediaIntentResponseCodeHandleInApp](../inplaymediaintentresponsecode/handleinapp.md) response code. This code tells the system to launch the main app in the background and call [application:handleIntent:completionHandler:](../../uikit/uiapplicationdelegate/application%28__handle_completionhandler_%29.md) on the [UIApplicationDelegate](../../uikit/uiapplicationdelegate.md) object. Your app should begin the audio playback in this app delegate method.

The listing below tells the app to play the requested media in the background.

```swift
public func handle(intent: INPlayMediaIntent, completion: @escaping (INPlayMediaIntentResponse) -> Void) {
    let response = INPlayMediaIntentResponse(code: .handleInApp, userActivity: nil)
    completion(response)
}
```

For video content, respond with [INPlayMediaIntentResponseCodeContinueInApp](../inplaymediaintentresponsecode/continueinapp.md). This code instructs the system to launch your app in the foreground and call [application:continueUserActivity:restorationHandler:](../../uikit/uiapplicationdelegate/application%28__continue_restorationhandler_%29.md) on the [UIApplicationDelegate](../../uikit/uiapplicationdelegate.md) object. Your app should start the video playback in this app delegate method.

The listing below tells the app to play the requested media in the foreground.

```swift
public func handle(intent: INPlayMediaIntent, completion: @escaping (INPlayMediaIntentResponse) -> Void) {
    let response = INPlayMediaIntentResponse(code: .continueInApp, userActivity: nil)
    completion(response)
}

```
