> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vserrorinfokeyaccountproviderresponse](https://developer.apple.com/documentation/videosubscriberaccount/vserrorinfokeyaccountproviderresponse)

# VSErrorInfoKeyAccountProviderResponse (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Global Variable  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 10.2+ · macOS · tvOS 10.1+ · visionOS 1.0+

The account provider’s error-response object.

## Declaration

```swift
let VSErrorInfoKeyAccountProviderResponse: String
```

<a id="Discussion"></a>

## Discussion

This key is a string in the [userInfo](../foundation/nserror/userinfo.md) dictionary that the system returns with the error.

## See Also

### Errors

- [VSErrorDomain](vserrordomain.md): The domain for all errors in the framework.
- [VSErrorInfoKeySAMLResponse](vserrorinfokeysamlresponse.md): The subscription provider’s SAML error response.
- [VSErrorInfoKeySAMLResponseStatus](vserrorinfokeysamlresponsestatus.md): The subscription provider’s SAML error-response status code.
- [VSErrorInfoKeyUnsupportedProviderIdentifier](vserrorinfokeyunsupportedprovideridentifier.md): The identifier of the unsupported subscription provider.
- [VSError](vserror.md): Error information in the framework error domain.
- [VSError.Code](vserror/code.md): Error codes in the framework error domain.

# VSErrorInfoKeyAccountProviderResponse (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Global Variable  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · macOS · tvOS 10.1+ · visionOS 1.0+

The account provider’s error-response object.

## Declaration

```objectivec
extern NSErrorUserInfoKey const VSErrorInfoKeyAccountProviderResponse;
```

<a id="Discussion"></a>

## Discussion

This key is a string in the [userInfo](../foundation/nserror/userinfo.md) dictionary that the system returns with the error.

## See Also

### Errors

- [VSErrorDomain](vserrordomain.md): The domain for all errors in the framework.
- [VSErrorInfoKeySAMLResponse](vserrorinfokeysamlresponse.md): The subscription provider’s SAML error response.
- [VSErrorInfoKeySAMLResponseStatus](vserrorinfokeysamlresponsestatus.md): The subscription provider’s SAML error-response status code.
- [VSErrorInfoKeyUnsupportedProviderIdentifier](vserrorinfokeyunsupportedprovideridentifier.md): The identifier of the unsupported subscription provider.
- [VSErrorCode](vserror/code.md): Error codes in the framework error domain.
