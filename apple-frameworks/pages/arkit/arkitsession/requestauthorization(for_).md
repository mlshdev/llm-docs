> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitsession/requestauthorization(for:)](https://developer.apple.com/documentation/arkit/arkitsession/requestauthorization(for:))

# requestAuthorization(for:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Requests authorization from the user to use the specified kinds of ARKit data.

## Declaration

```swift
final func requestAuthorization(for authorizationTypes: [ARKitSession.AuthorizationType]) async -> [ARKitSession.AuthorizationType : ARKitSession.AuthorizationStatus]
```

## Parameters

- `authorizationTypes`: The types of authorizations your app needs to run.

<a id="return-value"></a>

## Return Value

A dictionary that contains the result of the authorization request for each authorization type you requested.

<a id="Discussion"></a>

## Discussion

You can use the [requiredAuthorizations](../dataprovider/requiredauthorizations.md) property on any of the types that conform to the [DataProvider](../dataprovider.md) protocol to get the list of authorizations specific to that data provider and pass it to this method.

## See Also

### Getting authorization

- [ARKitSession.AuthorizationType](authorizationtype.md): The authorization types you can request from ARKit.
- [queryAuthorization(for:)](queryauthorization%28for_%29.md): Checks whether the current session is authorized for particular authorization types without requesting authorization.
- [ARKitSession.AuthorizationStatus](authorizationstatus.md): The authorization states for a type of ARKit data.
