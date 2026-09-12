> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesessionactivationrequest-swift.struct](https://developer.apple.com/documentation/uikit/uiscenesessionactivationrequest-swift.struct)

# UISceneSessionActivationRequest

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

A collection of properties that you use to request activation of a scene.

## Declaration

```swift
struct UISceneSessionActivationRequest
```

<a id="overview"></a>

## Overview

A `UISceneSessionActiviationRequest` object provides information about how to activate a scene session. Create a request to specify:

- A user activity for the scene session.
- An existing scene session.
- A scene session with a specific role.

You create a `UISceneSessionActivationRequest` object in your code, then you pass it as a parameter when you call [activateSceneSession(for:errorHandler:)](uiapplication/activatescenesession%28for_errorhandler_%29.md) to ask the system to activate the scene session.

## Topics

### Creating a request

- [init(role:userActivity:options:)](uiscenesessionactivationrequest-swift.struct/init%28role_useractivity_options_%29.md): Creates a scene session activation request object with a role, a user activity, and options that you provide.
- [init(session:userActivity:options:)](uiscenesessionactivationrequest-swift.struct/init%28session_useractivity_options_%29.md): Creates a scene session activation request object with a scene session, a user activity, and options that you provide.

### Managing request details

- [options](uiscenesessionactivationrequest-swift.struct/options.md): Activation request options to further customize the request.
- [role](uiscenesessionactivationrequest-swift.struct/role.md): The role to request.
- [session](uiscenesessionactivationrequest-swift.struct/session.md): The specific scene session to activate.
- [userActivity](uiscenesessionactivationrequest-swift.struct/useractivity.md): A user activity to send to the newly activated scene.

### Initializers

- [init(hostingDelegateClass:)](uiscenesessionactivationrequest-swift.struct/init%28hostingdelegateclass_%29.md): Creates a `UISceneSessionActivationRequest` customized to open a SwiftUI scene.
- [init(hostingDelegateClass:id:)](uiscenesessionactivationrequest-swift.struct/init%28hostingdelegateclass_id_%29.md): Creates a `UISceneSessionActivationRequest` customized to open a SwiftUI scene with the given identifier.
- [init(hostingDelegateClass:id:value:)](uiscenesessionactivationrequest-swift.struct/init%28hostingdelegateclass_id_value_%29.md): Creates a `UISceneSessionActivationRequest` customized to open a SwiftUI scene with the given identifier and presented value.
- [init(hostingDelegateClass:value:)](uiscenesessionactivationrequest-swift.struct/init%28hostingdelegateclass_value_%29.md): Creates a `UISceneSessionActivationRequest` customized to open a SwiftUI scene with a presented value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Managing a scene’s life cycle

- [activateSceneSession(for:errorHandler:)](uiapplication/activatescenesession%28for_errorhandler_%29.md): Asks the system to activate an existing scene or create a new scene and associate it with your app.
- [requestSceneSessionDestruction(\_:options:errorHandler:)](uiapplication/requestscenesessiondestruction%28__options_errorhandler_%29.md): Asks the system to dismiss an existing scene and remove it from the app switcher.
- [requestSceneSessionRefresh(\_:)](uiapplication/requestscenesessionrefresh%28__%29.md): Asks the system to update any system UI associated with the specified scene.
- [UIScene.ActivationRequestOptions](uiscene/activationrequestoptions.md): An object that contains information you want the system to use when activating the session associated with a scene.
- [UISceneDestructionRequestOptions](uiscenedestructionrequestoptions.md): An object you pass to UIKit to permanently remove a scene and its associated session from your app.
