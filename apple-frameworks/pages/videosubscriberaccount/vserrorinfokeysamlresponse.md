> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vserrorinfokeysamlresponse](https://developer.apple.com/documentation/videosubscriberaccount/vserrorinfokeysamlresponse)

# VSErrorInfoKeySAMLResponse (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The subscription provider’s SAML error response.

## Declaration

```swift
let VSErrorInfoKeySAMLResponse: String
```

<a id="Discussion"></a>

## Discussion

This key is a string in the [userInfo](../foundation/nserror/userinfo.md) dictionary that the system returns with the error.

## See Also

### Errors

- [VSErrorDomain](vserrordomain.md): The domain for all errors in the framework.
- [VSErrorInfoKeySAMLResponseStatus](vserrorinfokeysamlresponsestatus.md): The subscription provider’s SAML error-response status code.
- [VSErrorInfoKeyAccountProviderResponse](vserrorinfokeyaccountproviderresponse.md): The account provider’s error-response object.
- [VSErrorInfoKeyUnsupportedProviderIdentifier](vserrorinfokeyunsupportedprovideridentifier.md): The identifier of the unsupported subscription provider.
- [VSError](vserror.md): Error information in the framework error domain.
- [VSError.Code](vserror/code.md): Error codes in the framework error domain.

# VSErrorInfoKeySAMLResponse (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The subscription provider’s SAML error response.

## Declaration

```objectivec
extern NSErrorUserInfoKey const VSErrorInfoKeySAMLResponse;
```

<a id="Discussion"></a>

## Discussion

This key is a string in the [userInfo](../foundation/nserror/userinfo.md) dictionary that the system returns with the error.

## See Also

### Errors

- [VSErrorDomain](vserrordomain.md): The domain for all errors in the framework.
- [VSErrorInfoKeySAMLResponseStatus](vserrorinfokeysamlresponsestatus.md): The subscription provider’s SAML error-response status code.
- [VSErrorInfoKeyAccountProviderResponse](vserrorinfokeyaccountproviderresponse.md): The account provider’s error-response object.
- [VSErrorInfoKeyUnsupportedProviderIdentifier](vserrorinfokeyunsupportedprovideridentifier.md): The identifier of the unsupported subscription provider.
- [VSErrorCode](vserror/code.md): Error codes in the framework error domain.
