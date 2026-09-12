> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesessionactivationrequest-c.class/useractivity](https://developer.apple.com/documentation/uikit/uiscenesessionactivationrequest-c.class/useractivity)

# userActivity

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A user activity to send to the newly activated scene.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSUserActivity * userActivity;
```

<a id="Discussion"></a>

## Discussion

The system sends the `userActivity` to the session’s scene upon activation, regardless of whether the scene session already exists.

If you don’t provide a scene session to activate, the system uses the [targetContentIdentifier](../../foundation/nsuseractivity/targetcontentidentifier.md) of the user activity to determine which scene session to activate. When the user activity’s [targetContentIdentifier](../../foundation/nsuseractivity/targetcontentidentifier.md) satisfies the [prefersToActivateForTargetContentIdentifierPredicate](../uisceneactivationconditions/preferstoactivatefortargetcontentidentifierpredicate.md), the system activates that scene’s session to handle the user activity.

## See Also

### Managing request details

- [options](options.md): Activation request options to further customize the request.
- [role](role.md): The role to request.
- [session](session.md): The specific scene session to activate.
