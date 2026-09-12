> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequesthandler/cancelauthorization(with:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequesthandler/cancelauthorization(with:))

# cancelAuthorization(with:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Tells your request handler to cancel the authorization of the given request.

## Declaration

```swift
optional func cancelAuthorization(with request: ASAuthorizationProviderExtensionAuthorizationRequest)
```

## Parameters

- `request`: The request to cancel.

<a id="Discussion"></a>

## Discussion

The system calls this method on the main thread.

## See Also

### Starting or Canceling a Request

- [beginAuthorization(with:)](beginauthorization%28with_%29.md): Tells your request handler to authorize the given request.
- [ASAuthorizationProviderExtensionAuthorizationRequest](../asauthorizationproviderextensionauthorizationrequest.md): An authorization request that your provider extension handles.

# cancelAuthorizationWithRequest: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Tells your request handler to cancel the authorization of the given request.

## Declaration

```objectivec
- (void) cancelAuthorizationWithRequest:(ASAuthorizationProviderExtensionAuthorizationRequest *) request;
```

## Parameters

- `request`: The request to cancel.

<a id="Discussion"></a>

## Discussion

The system calls this method on the main thread.

## See Also

### Starting or Canceling a Request

- [beginAuthorizationWithRequest:](beginauthorization%28with_%29.md): Tells your request handler to authorize the given request.
- [ASAuthorizationProviderExtensionAuthorizationRequest](../asauthorizationproviderextensionauthorizationrequest.md): An authorization request that your provider extension handles.
