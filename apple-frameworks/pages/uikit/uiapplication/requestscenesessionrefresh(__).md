> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/requestscenesessionrefresh(_:)](https://developer.apple.com/documentation/uikit/uiapplication/requestscenesessionrefresh(_:))

# requestSceneSessionRefresh(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Asks the system to update any system UI associated with the specified scene.

## Declaration

```swift
func requestSceneSessionRefresh(_ sceneSession: UISceneSession)
```

## Parameters

- `sceneSession`: The session whose scene you want to update.

<a id="Discussion"></a>

## Discussion

Call this method when your scene is in the background and any part of your scene’s visible appearance changes. For example, call this method after updating your scene’s content to let the system know your scene’s snapshot requires refreshing. You don’t need to call this method when your scene is running in the foreground.

## See Also

### Managing a scene’s life cycle

- [activateSceneSession(for:errorHandler:)](activatescenesession%28for_errorhandler_%29.md): Asks the system to activate an existing scene or create a new scene and associate it with your app.
- [requestSceneSessionDestruction(\_:options:errorHandler:)](requestscenesessiondestruction%28__options_errorhandler_%29.md): Asks the system to dismiss an existing scene and remove it from the app switcher.
- [UISceneSessionActivationRequest](../uiscenesessionactivationrequest-swift.struct.md): A collection of properties that you use to request activation of a scene.
- [UIScene.ActivationRequestOptions](../uiscene/activationrequestoptions.md): An object that contains information you want the system to use when activating the session associated with a scene.
- [UISceneDestructionRequestOptions](../uiscenedestructionrequestoptions.md): An object you pass to UIKit to permanently remove a scene and its associated session from your app.

# requestSceneSessionRefresh: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Asks the system to update any system UI associated with the specified scene.

## Declaration

```objectivec
- (void) requestSceneSessionRefresh:(UISceneSession *) sceneSession;
```

## Parameters

- `sceneSession`: The session whose scene you want to update.

<a id="Discussion"></a>

## Discussion

Call this method when your scene is in the background and any part of your scene’s visible appearance changes. For example, call this method after updating your scene’s content to let the system know your scene’s snapshot requires refreshing. You don’t need to call this method when your scene is running in the foreground.

## See Also

### Managing a scene’s life cycle

- [activateSceneSessionForRequest:errorHandler:](activatescenesessionforrequest_errorhandler_.md): Asks the system to activate an existing scene or create a new scene and associate it with your app.
- [requestSceneSessionDestruction:options:errorHandler:](requestscenesessiondestruction%28__options_errorhandler_%29.md): Asks the system to dismiss an existing scene and remove it from the app switcher.
- [UISceneSessionActivationRequest](../uiscenesessionactivationrequest-c.class.md): A collection of properties that you use to request activation of a scene.
- [UISceneActivationRequestOptions](../uiscene/activationrequestoptions.md): An object that contains information you want the system to use when activating the session associated with a scene.
- [UISceneDestructionRequestOptions](../uiscenedestructionrequestoptions.md): An object you pass to UIKit to permanently remove a scene and its associated session from your app.
