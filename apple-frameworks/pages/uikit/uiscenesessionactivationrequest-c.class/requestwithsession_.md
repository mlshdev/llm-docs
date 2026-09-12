> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesessionactivationrequest-c.class/requestwithsession:](https://developer.apple.com/documentation/uikit/uiscenesessionactivationrequest-c.class/requestwithsession:)

# requestWithSession:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a scene session activation request object with a scene session that you provide.

## Declaration

```objectivec
+ (instancetype) requestWithSession:(UISceneSession *) session;
```

## Parameters

- `session`: The specific scene session to activate.

<a id="return-value"></a>

## Return Value

A scene session activation request object.

<a id="Discussion"></a>

## Discussion

Create an activation request with this method when you want the system to activate an existing scene session that you provide.

## See Also

### Creating a request

- [request](request.md): Creates a scene session activation request object.
- [requestWithRole:](requestwithrole_.md): Creates a scene session activation request object with a role that you provide.
