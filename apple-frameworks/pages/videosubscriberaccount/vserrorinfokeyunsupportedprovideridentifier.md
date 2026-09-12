> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vserrorinfokeyunsupportedprovideridentifier](https://developer.apple.com/documentation/videosubscriberaccount/vserrorinfokeyunsupportedprovideridentifier)

# VSErrorInfoKeyUnsupportedProviderIdentifier (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Global Variable  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 10.2+ · macOS · tvOS 10.2+ · visionOS 1.0+

The identifier of the unsupported subscription provider.

## Declaration

```swift
let VSErrorInfoKeyUnsupportedProviderIdentifier: String
```

<a id="Discussion"></a>

## Discussion

This key is a string in the [userInfo](../foundation/nserror/userinfo.md) dictionary that the system returns with the error.

## See Also

### Errors

- [VSErrorDomain](vserrordomain.md): The domain for all errors in the framework.
- [VSErrorInfoKeySAMLResponse](vserrorinfokeysamlresponse.md): The subscription provider’s SAML error response.
- [VSErrorInfoKeySAMLResponseStatus](vserrorinfokeysamlresponsestatus.md): The subscription provider’s SAML error-response status code.
- [VSErrorInfoKeyAccountProviderResponse](vserrorinfokeyaccountproviderresponse.md): The account provider’s error-response object.
- [VSError](vserror.md): Error information in the framework error domain.
- [VSError.Code](vserror/code.md): Error codes in the framework error domain.

# VSErrorInfoKeyUnsupportedProviderIdentifier (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Global Variable  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · macOS · tvOS 10.2+ · visionOS 1.0+

The identifier of the unsupported subscription provider.

## Declaration

```objectivec
extern NSErrorUserInfoKey const VSErrorInfoKeyUnsupportedProviderIdentifier;
```

<a id="Discussion"></a>

## Discussion

This key is a string in the [userInfo](../foundation/nserror/userinfo.md) dictionary that the system returns with the error.

## See Also

### Errors

- [VSErrorDomain](vserrordomain.md): The domain for all errors in the framework.
- [VSErrorInfoKeySAMLResponse](vserrorinfokeysamlresponse.md): The subscription provider’s SAML error response.
- [VSErrorInfoKeySAMLResponseStatus](vserrorinfokeysamlresponsestatus.md): The subscription provider’s SAML error-response status code.
- [VSErrorInfoKeyAccountProviderResponse](vserrorinfokeyaccountproviderresponse.md): The account provider’s error-response object.
- [VSErrorCode](vserror/code.md): Error codes in the framework error domain.
