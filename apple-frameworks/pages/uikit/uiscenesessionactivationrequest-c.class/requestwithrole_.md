> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesessionactivationrequest-c.class/requestwithrole:](https://developer.apple.com/documentation/uikit/uiscenesessionactivationrequest-c.class/requestwithrole:)

# requestWithRole:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a scene session activation request object with a role that you provide.

## Declaration

```objectivec
+ (instancetype) requestWithRole:(UISceneSessionRole) role;
```

## Parameters

- `role`: The role to request.

<a id="return-value"></a>

## Return Value

A scene session activation request object.

<a id="Discussion"></a>

## Discussion

Create an activation request with this method when you want the system to activate a scene session appropriate for the `role` and `userActivity` you provide. The system activates an existing scene session when the scene session’s [role](../uiscenesession/role-swift.property.md) matches the [role](role.md) you request, and the user activity’s [targetContentIdentifier](../../foundation/nsuseractivity/targetcontentidentifier.md) satisfies the scene’s [activationConditions](../uiscene/activationconditions.md). Otherwise, the system activates a new scene session.

## See Also

### Creating a request

- [request](request.md): Creates a scene session activation request object.
- [requestWithSession:](requestwithsession_.md): Creates a scene session activation request object with a scene session that you provide.
