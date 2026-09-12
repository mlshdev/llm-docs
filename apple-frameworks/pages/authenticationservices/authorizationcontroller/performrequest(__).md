> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/authorizationcontroller/performrequest(_:)](https://developer.apple.com/documentation/authenticationservices/authorizationcontroller/performrequest(_:))

# performRequest(\_:)

**Framework:** AuthenticationServices  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Performs the specified authorization request.

## Declaration

```swift
@MainActor func performRequest(_ request: ASAuthorizationRequest) async throws -> ASAuthorizationResult
```

## Parameters

- `request`: The authorization request to perform.

<a id="return-value"></a>

## Return Value

The request’s outcome. For more information, see [ASAuthorizationResult](../asauthorizationresult.md).

## See Also

### Performing requests

- [performRequests(\_:)](performrequests%28__%29.md): Performs an authorization request from the provided array.
- [performRequest(\_:options:)](performrequest%28__options_%29.md): Performs the specified authorization request with explicit options.
- [performRequests(\_:options:)](performrequests%28__options_%29.md): Performs an authorization request, with explicit options, from the provided array.
- [performRequest(\_:customMethods:)](performrequest%28__custommethods_%29.md): Performs the authorization request using a custom authorization method.
- [performRequests(\_:customMethods:)](performrequests%28__custommethods_%29.md): Performs an authorization request from the provided array using a custom authorization method.
