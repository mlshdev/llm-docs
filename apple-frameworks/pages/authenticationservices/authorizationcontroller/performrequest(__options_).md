> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/authorizationcontroller/performrequest(_:options:)](https://developer.apple.com/documentation/authenticationservices/authorizationcontroller/performrequest(_:options:))

# performRequest(\_:options:)

**Framework:** AuthenticationServices  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

Performs the specified authorization request with explicit options.

## Declaration

```swift
@MainActor func performRequest(_ request: ASAuthorizationRequest, options: ASAuthorizationController.RequestOptions) async throws -> ASAuthorizationResult
```

## Parameters

- `request`: The authorization request to perform.
- `options`: Additional options that customize the request’s behavior. For more information, see [ASAuthorizationController.RequestOptions](../asauthorizationcontroller/requestoptions.md).

<a id="return-value"></a>

## Return Value

The request’s outcome. For more information, see [ASAuthorizationResult](../asauthorizationresult.md).

## See Also

### Performing requests

- [performRequest(\_:)](performrequest%28__%29.md): Performs the specified authorization request.
- [performRequests(\_:)](performrequests%28__%29.md): Performs an authorization request from the provided array.
- [performRequests(\_:options:)](performrequests%28__options_%29.md): Performs an authorization request, with explicit options, from the provided array.
- [performRequest(\_:customMethods:)](performrequest%28__custommethods_%29.md): Performs the authorization request using a custom authorization method.
- [performRequests(\_:customMethods:)](performrequests%28__custommethods_%29.md): Performs an authorization request from the provided array using a custom authorization method.
