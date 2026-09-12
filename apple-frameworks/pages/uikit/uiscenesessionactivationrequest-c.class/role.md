> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesessionactivationrequest-c.class/role](https://developer.apple.com/documentation/uikit/uiscenesessionactivationrequest-c.class/role)

# role

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The role to request.

## Declaration

```objectivec
@property (nonatomic, readonly) UISceneSessionRole role;
```

<a id="Discussion"></a>

## Discussion

If you created the request using [requestWithSession:](requestwithsession_.md), this property reflects the role of the `session`.

## See Also

### Managing request details

- [options](options.md): Activation request options to further customize the request.
- [session](session.md): The specific scene session to activate.
- [userActivity](useractivity.md): A user activity to send to the newly activated scene.
