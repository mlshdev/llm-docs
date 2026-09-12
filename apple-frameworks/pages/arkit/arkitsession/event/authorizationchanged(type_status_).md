> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitsession/event/authorizationchanged(type:status:)](https://developer.apple.com/documentation/arkit/arkitsession/event/authorizationchanged(type:status:))

# ARKitSession.Event.authorizationChanged(type:status:)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** visionOS 1.0+

An event that represents a change in authorization status for a specific authorization type.

## Declaration

```swift
case authorizationChanged(type: ARKitSession.AuthorizationType, status: ARKitSession.AuthorizationStatus)
```

## Parameters

- `type`: The type of authorization status that changed.
- `status`: The new state of authorization.
