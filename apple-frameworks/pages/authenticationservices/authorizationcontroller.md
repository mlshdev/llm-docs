> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/authorizationcontroller](https://developer.apple.com/documentation/authenticationservices/authorizationcontroller)

# AuthorizationController

**Framework:** AuthenticationServices  
**Kind:** Structure  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A SwiftUI environment value that views use to perform authorization requests.

## Declaration

```swift
@MainActor struct AuthorizationController
```

<a id="overview"></a>

## Overview

To access an instance of this type, use the SwiftUI [Environment](https://developer.apple.com/documentation/swiftui/environment) property wrapper and specify [authorizationController](https://developer.apple.com/documentation/swiftui/environmentvalues/authorizationcontroller) as the environment value, as the following example shows:

```swift
struct AuthorizationControllerExample: View {
    // Get an instance of AuthorizationController using SwiftUI's @Environment 
    // property wrapper.
    @Environment(\.authorizationController) private var authorizationController

    var body: some View {
        Button("Sign In") {
            Task {
                do {
                    // Create the authorization request.
                    async let request = makeAuthorizationRequest()
                    // Perform the request and await its result.
                    let result = try await authorizationController
                        .performRequest(request)
                    switch result {
                        // Process the request's result.
                    }
                } catch {
                    // Respond to any authorization errors.
                }
            }
        }
    }
}
```

## Topics

### Performing requests

- [performRequest(\_:)](authorizationcontroller/performrequest%28__%29.md): Performs the specified authorization request.
- [performRequests(\_:)](authorizationcontroller/performrequests%28__%29.md): Performs an authorization request from the provided array.
- [performRequest(\_:options:)](authorizationcontroller/performrequest%28__options_%29.md): Performs the specified authorization request with explicit options.
- [performRequests(\_:options:)](authorizationcontroller/performrequests%28__options_%29.md): Performs an authorization request, with explicit options, from the provided array.
- [performRequest(\_:customMethods:)](authorizationcontroller/performrequest%28__custommethods_%29.md): Performs the authorization request using a custom authorization method.
- [performRequests(\_:customMethods:)](authorizationcontroller/performrequests%28__custommethods_%29.md): Performs an authorization request from the provided array using a custom authorization method.

### Performing assisted requests

- [performAutoFillAssistedRequest(\_:)](authorizationcontroller/performautofillassistedrequest%28__%29.md): Performs an AutoFill-assisted authorization request.
- [performAutoFillAssistedRequests(\_:)](authorizationcontroller/performautofillassistedrequests%28__%29.md): Performs an AutoFill-assisted authorization request from the provided array.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authorization requests

- [ASAuthorizationController](asauthorizationcontroller.md): A controller that manages authorization requests that a provider creates.
- [ASAuthorizationResult](asauthorizationresult.md): Describes the outcome of a successful authorization request.
