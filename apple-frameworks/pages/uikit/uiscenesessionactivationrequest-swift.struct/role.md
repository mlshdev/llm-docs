> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesessionactivationrequest-swift.struct/role](https://developer.apple.com/documentation/uikit/uiscenesessionactivationrequest-swift.struct/role)

# role

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

The role to request.

## Declaration

```swift
var role: UISceneSession.Role { get }
```

<a id="Discussion"></a>

## Discussion

If you created the request using [init(session:userActivity:options:)](init%28session_useractivity_options_%29.md), this property reflects the role of the `session`.

## See Also

### Managing request details

- [options](options.md): Activation request options to further customize the request.
- [session](session.md): The specific scene session to activate.
- [userActivity](useractivity.md): A user activity to send to the newly activated scene.
