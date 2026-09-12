> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/activatescenesessionforrequest:errorhandler:](https://developer.apple.com/documentation/uikit/uiapplication/activatescenesessionforrequest:errorhandler:)

# activateSceneSessionForRequest:errorHandler:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Asks the system to activate an existing scene or create a new scene and associate it with your app.

## Declaration

```objectivec
- (void) activateSceneSessionForRequest:(UISceneSessionActivationRequest *) request errorHandler:(void (^)(NSError *error)) errorHandler;
```

## Parameters

- `request`: The activation request.
- `errorHandler`: A handler to call if the request fails.

## See Also

### Related Documentation

- [requestSceneSessionActivation:userActivity:options:errorHandler:](requestscenesessionactivation%28__useractivity_options_errorhandler_%29.md): Deprecated. Asks the system to activate an existing scene, or create a new scene and associate it with your app.

### Managing a scene’s life cycle

- [requestSceneSessionDestruction:options:errorHandler:](requestscenesessiondestruction%28__options_errorhandler_%29.md): Asks the system to dismiss an existing scene and remove it from the app switcher.
- [requestSceneSessionRefresh:](requestscenesessionrefresh%28__%29.md): Asks the system to update any system UI associated with the specified scene.
- [UISceneSessionActivationRequest](../uiscenesessionactivationrequest-c.class.md): A collection of properties that you use to request activation of a scene.
- [UISceneActivationRequestOptions](../uiscene/activationrequestoptions.md): An object that contains information you want the system to use when activating the session associated with a scene.
- [UISceneDestructionRequestOptions](../uiscenedestructionrequestoptions.md): An object you pass to UIKit to permanently remove a scene and its associated session from your app.
