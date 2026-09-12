> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesessionactivationrequest-c.class/request](https://developer.apple.com/documentation/uikit/uiscenesessionactivationrequest-c.class/request)

# request

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a scene session activation request object.

## Declaration

```objectivec
+ (instancetype) request;
```

<a id="return-value"></a>

## Return Value

A scene session activation request object.

<a id="Discussion"></a>

## Discussion

When you create a scene session activation request object with this method, [role](role.md) defaults to [UIWindowSceneSessionRoleApplication](../uiscenesession/role-swift.struct/windowapplication.md).

## See Also

### Creating a request

- [requestWithRole:](requestwithrole_.md): Creates a scene session activation request object with a role that you provide.
- [requestWithSession:](requestwithsession_.md): Creates a scene session activation request object with a scene session that you provide.
