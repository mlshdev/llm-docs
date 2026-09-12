> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vserror/code](https://developer.apple.com/documentation/videosubscriberaccount/vserror/code)

# VSError.Code (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

Error codes in the framework error domain.

## Declaration

```swift
enum Code
```

## Topics

### Error Codes

- [VSError.Code.accessNotGranted](code/accessnotgranted.md): The user hasn’t granted access to their subscription information.
- [VSError.Code.invalidVerificationToken](code/invalidverificationtoken.md): The user’s subscription provider rejected the verification token that the app sent with the request.
- [VSError.Code.providerRejected](code/providerrejected.md): The user’s subscription provider didn’t allow the request to proceed.
- [VSError.Code.rejected](code/rejected.md): The system rejected the request.
- [VSError.Code.serviceTemporarilyUnavailable](code/servicetemporarilyunavailable.md): The request failed due to a timeout or unreachable host, but a subsequent attempt might succeed.
- [VSError.Code.unsupported](code/unsupported.md): The provider doesn’t support the feature the user requested in the device’s current region.
- [VSError.Code.unsupportedProvider](code/unsupportedprovider.md): The system doesn’t support the user’s subscription provider.
- [VSError.Code.userCancelled](code/usercancelled.md): The user canceled the request.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [VSErrorDomain](../vserrordomain.md): The domain for all errors in the framework.
- [VSErrorInfoKeySAMLResponse](../vserrorinfokeysamlresponse.md): The subscription provider’s SAML error response.
- [VSErrorInfoKeySAMLResponseStatus](../vserrorinfokeysamlresponsestatus.md): The subscription provider’s SAML error-response status code.
- [VSErrorInfoKeyAccountProviderResponse](../vserrorinfokeyaccountproviderresponse.md): The account provider’s error-response object.
- [VSErrorInfoKeyUnsupportedProviderIdentifier](../vserrorinfokeyunsupportedprovideridentifier.md): The identifier of the unsupported subscription provider.
- [VSError](../vserror.md): Error information in the framework error domain.

# VSErrorCode (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

Error codes in the framework error domain.

## Declaration

```objectivec
enum VSErrorCode : NSInteger;
```

## Topics

### Error Codes

- [VSErrorCodeAccessNotGranted](code/accessnotgranted.md): The user hasn’t granted access to their subscription information.
- [VSErrorCodeInvalidVerificationToken](code/invalidverificationtoken.md): The user’s subscription provider rejected the verification token that the app sent with the request.
- [VSErrorCodeProviderRejected](code/providerrejected.md): The user’s subscription provider didn’t allow the request to proceed.
- [VSErrorCodeRejected](code/rejected.md): The system rejected the request.
- [VSErrorCodeServiceTemporarilyUnavailable](code/servicetemporarilyunavailable.md): The request failed due to a timeout or unreachable host, but a subsequent attempt might succeed.
- [VSErrorCodeUnsupported](code/unsupported.md): The provider doesn’t support the feature the user requested in the device’s current region.
- [VSErrorCodeUnsupportedProvider](code/unsupportedprovider.md): The system doesn’t support the user’s subscription provider.
- [VSErrorCodeUserCancelled](code/usercancelled.md): The user canceled the request.

## See Also

### Errors

- [VSErrorDomain](../vserrordomain.md): The domain for all errors in the framework.
- [VSErrorInfoKeySAMLResponse](../vserrorinfokeysamlresponse.md): The subscription provider’s SAML error response.
- [VSErrorInfoKeySAMLResponseStatus](../vserrorinfokeysamlresponsestatus.md): The subscription provider’s SAML error-response status code.
- [VSErrorInfoKeyAccountProviderResponse](../vserrorinfokeyaccountproviderresponse.md): The account provider’s error-response object.
- [VSErrorInfoKeyUnsupportedProviderIdentifier](../vserrorinfokeyunsupportedprovideridentifier.md): The identifier of the unsupported subscription provider.
