> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/authorizationcontroller/performrequest(_:custommethods:)](https://developer.apple.com/documentation/authenticationservices/authorizationcontroller/performrequest(_:custommethods:))

# performRequest(\_:customMethods:)

**Framework:** AuthenticationServices  
**Kind:** Instance Method  
**Availability:** tvOS 16.4+

Performs the authorization request using a custom authorization method.

## Declaration

```swift
@MainActor func performRequest(_ request: ASAuthorizationRequest, customMethods: [ASAuthorizationCustomMethod]) async throws -> ASAuthorizationResult
```

## Parameters

- `request`: The authorization request to perform.
- `customMethods`: An array of custom authorization methods to display in the system authorization UI. For more information, see [ASAuthorizationCustomMethod](../asauthorizationcustommethod.md).

<a id="return-value"></a>

## Return Value

The request’s outcome. For more information, see [ASAuthorizationResult](../asauthorizationresult.md).

<a id="Discussion"></a>

## Discussion

If the return value is [ASAuthorizationResult.customMethod(\_:)](../asauthorizationresult/custommethod%28__%29.md), use the case’s associated value to access the chosen authorization method.

## See Also

### Performing requests

- [performRequest(\_:)](performrequest%28__%29.md): Performs the specified authorization request.
- [performRequests(\_:)](performrequests%28__%29.md): Performs an authorization request from the provided array.
- [performRequest(\_:options:)](performrequest%28__options_%29.md): Performs the specified authorization request with explicit options.
- [performRequests(\_:options:)](performrequests%28__options_%29.md): Performs an authorization request, with explicit options, from the provided array.
- [performRequests(\_:customMethods:)](performrequests%28__custommethods_%29.md): Performs an authorization request from the provided array using a custom authorization method.
