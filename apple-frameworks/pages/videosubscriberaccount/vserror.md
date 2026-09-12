> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vserror](https://developer.apple.com/documentation/videosubscriberaccount/vserror)

# VSError

**Framework:** Video Subscriber Account  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

Error information in the framework error domain.

## Declaration

```swift
struct VSError
```

## Topics

### Error information

- [errorDomain](vserror/errordomain.md)

### Error codes

- [accessNotGranted](vserror/accessnotgranted.md): The user hasn’t granted access to their subscription information.
- [invalidVerificationToken](vserror/invalidverificationtoken.md): The user’s subscription provider rejected the verification token that the app sent with the request.
- [providerRejected](vserror/providerrejected.md): The user’s subscription provider didn’t allow the request to proceed.
- [rejected](vserror/rejected.md): The system rejected the request.
- [serviceTemporarilyUnavailable](vserror/servicetemporarilyunavailable.md): The request failed due to a timeout or unreachable host, but a subsequent attempt might succeed.
- [unsupported](vserror/unsupported.md): The provider doesn’t support the feature the user requested in the device’s current region.
- [unsupportedProvider](vserror/unsupportedprovider.md): The system doesn’t support the user’s subscription provider.
- [userCancelled](vserror/usercancelled.md): The user canceled the request.
- [VSError.Code](vserror/code.md): Error codes in the framework error domain.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [VSErrorDomain](vserrordomain.md): The domain for all errors in the framework.
- [VSErrorInfoKeySAMLResponse](vserrorinfokeysamlresponse.md): The subscription provider’s SAML error response.
- [VSErrorInfoKeySAMLResponseStatus](vserrorinfokeysamlresponsestatus.md): The subscription provider’s SAML error-response status code.
- [VSErrorInfoKeyAccountProviderResponse](vserrorinfokeyaccountproviderresponse.md): The account provider’s error-response object.
- [VSErrorInfoKeyUnsupportedProviderIdentifier](vserrorinfokeyunsupportedprovideridentifier.md): The identifier of the unsupported subscription provider.
- [VSError.Code](vserror/code.md): Error codes in the framework error domain.
