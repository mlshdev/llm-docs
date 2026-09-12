> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesessionactivationrequest-swift.struct/init(session:useractivity:options:)](https://developer.apple.com/documentation/uikit/uiscenesessionactivationrequest-swift.struct/init(session:useractivity:options:))

# init(session:userActivity:options:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

Creates a scene session activation request object with a scene session, a user activity, and options that you provide.

## Declaration

```swift
init(session: UISceneSession, userActivity: NSUserActivity? = nil, options: UIScene.ActivationRequestOptions? = nil)
```

## Parameters

- `session`: The specific scene session to activate.
- `userActivity`: A user activity to send to the newly activated scene.
- `options`: Activation request options to further customize the request.

<a id="Discussion"></a>

## Discussion

Create an activation request with this method when you want the system to activate an existing scene session that you provide.

## See Also

### Creating a request

- [init(role:userActivity:options:)](init%28role_useractivity_options_%29.md): Creates a scene session activation request object with a role, a user activity, and options that you provide.
