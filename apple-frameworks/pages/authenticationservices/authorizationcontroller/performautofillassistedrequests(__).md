> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/authorizationcontroller/performautofillassistedrequests(_:)](https://developer.apple.com/documentation/authenticationservices/authorizationcontroller/performautofillassistedrequests(_:))

# performAutoFillAssistedRequests(\_:)

**Framework:** AuthenticationServices  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · visionOS 1.0+

Performs an AutoFill-assisted authorization request from the provided array.

## Declaration

```swift
@MainActor func performAutoFillAssistedRequests(_ requests: [ASAuthorizationRequest]) async throws -> ASAuthorizationResult
```

## Parameters

- `requests`: An array of supported authorization requests.

<a id="return-value"></a>

## Return Value

The request’s outcome. For more information, see [ASAuthorizationResult](../asauthorizationresult.md).

<a id="Discussion"></a>

## Discussion

To perform AutoFill-assisted authorization requests, add the appropriate [textContentType(\_:)](https://developer.apple.com/documentation/swiftui/view/textcontenttype%28_:%29-ufdv) to any sign-in related fields, such as those for usernames and passwords:

```swift
TextField("Username", text: $username)
    .textContentType(.username)
```

Then use [task(name:priority:file:line:\_:)](https://developer.apple.com/documentation/swiftui/view/task%28name:priority:file:line:_:%29) or [task(id:name:priority:file:line:\_:)](https://developer.apple.com/documentation/swiftui/view/task%28id:name:priority:file:line:_:%29) to perform the requests when the view appears:

```swift
.task {
    // Create the authorization requests.
    async let requests = makeAutoFillAuthorizationRequests()
    // Perform the request and await its result.
    let result = try await authorizationController
        .performAutoFillAssistedRequests(requests)
    switch result {
        // Process the request's result.
    }
}
```

## See Also

### Performing assisted requests

- [performAutoFillAssistedRequest(\_:)](performautofillassistedrequest%28__%29.md): Performs an AutoFill-assisted authorization request.
