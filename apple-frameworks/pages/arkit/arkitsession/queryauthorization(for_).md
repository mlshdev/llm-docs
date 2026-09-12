> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitsession/queryauthorization(for:)](https://developer.apple.com/documentation/arkit/arkitsession/queryauthorization(for:))

# queryAuthorization(for:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Checks whether the current session is authorized for particular authorization types without requesting authorization.

## Declaration

```swift
final func queryAuthorization(for authorizationTypes: [ARKitSession.AuthorizationType]) async -> [ARKitSession.AuthorizationType : ARKitSession.AuthorizationStatus]
```

## Parameters

- `authorizationTypes`: The authorization types you want to check.

<a id="return-value"></a>

## Return Value

A list of the authorization statuses for each authorization type you passed in `authorizationTypes`.

## See Also

### Getting authorization

- [requestAuthorization(for:)](requestauthorization%28for_%29.md): Requests authorization from the user to use the specified kinds of ARKit data.
- [ARKitSession.AuthorizationType](authorizationtype.md): The authorization types you can request from ARKit.
- [ARKitSession.AuthorizationStatus](authorizationstatus.md): The authorization states for a type of ARKit data.
