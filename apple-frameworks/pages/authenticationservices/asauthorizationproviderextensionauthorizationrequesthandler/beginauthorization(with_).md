> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequesthandler/beginauthorization(with:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequesthandler/beginauthorization(with:))

# beginAuthorization(with:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Tells your request handler to authorize the given request.

## Declaration

```swift
func beginAuthorization(with request: ASAuthorizationProviderExtensionAuthorizationRequest)
```

## Parameters

- `request`: The request to be authorized.

<a id="Discussion"></a>

## Discussion

The system calls this method on the main thread.

## See Also

### Starting or Canceling a Request

- [cancelAuthorization(with:)](cancelauthorization%28with_%29.md): Tells your request handler to cancel the authorization of the given request.
- [ASAuthorizationProviderExtensionAuthorizationRequest](../asauthorizationproviderextensionauthorizationrequest.md): An authorization request that your provider extension handles.

# beginAuthorizationWithRequest: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Tells your request handler to authorize the given request.

## Declaration

```objectivec
- (void) beginAuthorizationWithRequest:(ASAuthorizationProviderExtensionAuthorizationRequest *) request;
```

## Parameters

- `request`: The request to be authorized.

<a id="Discussion"></a>

## Discussion

The system calls this method on the main thread.

## See Also

### Starting or Canceling a Request

- [cancelAuthorizationWithRequest:](cancelauthorization%28with_%29.md): Tells your request handler to cancel the authorization of the given request.
- [ASAuthorizationProviderExtensionAuthorizationRequest](../asauthorizationproviderextensionauthorizationrequest.md): An authorization request that your provider extension handles.
