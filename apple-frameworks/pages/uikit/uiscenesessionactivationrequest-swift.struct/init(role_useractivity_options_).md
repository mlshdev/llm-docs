> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesessionactivationrequest-swift.struct/init(role:useractivity:options:)](https://developer.apple.com/documentation/uikit/uiscenesessionactivationrequest-swift.struct/init(role:useractivity:options:))

# init(role:userActivity:options:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

Creates a scene session activation request object with a role, a user activity, and options that you provide.

## Declaration

```swift
init(role: UISceneSession.Role = .windowApplication, userActivity: NSUserActivity? = nil, options: UIScene.ActivationRequestOptions? = nil)
```

## Parameters

- `role`: The role to request.
- `userActivity`: A user activity to send to the newly activated scene.
- `options`: Activation request options to further customize the request.

<a id="Discussion"></a>

## Discussion

Create an activation request with this method when you want the system to activate a scene session appropriate for the `role` and `userActivity` you provide. The system activates an existing scene session when the scene session’s [role](../uiscenesession/role-swift.property.md) matches the [role](role.md) you request, and the user activity’s [targetContentIdentifier](../../foundation/nsuseractivity/targetcontentidentifier.md) satisfies the scene’s [activationConditions](../uiscene/activationconditions.md). Otherwise, the system activates a new scene session.

## See Also

### Creating a request

- [init(session:userActivity:options:)](init%28session_useractivity_options_%29.md): Creates a scene session activation request object with a scene session, a user activity, and options that you provide.
