> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vserrorinfokeysamlresponsestatus](https://developer.apple.com/documentation/videosubscriberaccount/vserrorinfokeysamlresponsestatus)

# VSErrorInfoKeySAMLResponseStatus (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The subscription provider’s SAML error-response status code.

## Declaration

```swift
let VSErrorInfoKeySAMLResponseStatus: String
```

<a id="Discussion"></a>

## Discussion

This key is a string in the [userInfo](../foundation/nserror/userinfo.md) dictionary that the system returns with the error.

## See Also

### Errors

- [VSErrorDomain](vserrordomain.md): The domain for all errors in the framework.
- [VSErrorInfoKeySAMLResponse](vserrorinfokeysamlresponse.md): The subscription provider’s SAML error response.
- [VSErrorInfoKeyAccountProviderResponse](vserrorinfokeyaccountproviderresponse.md): The account provider’s error-response object.
- [VSErrorInfoKeyUnsupportedProviderIdentifier](vserrorinfokeyunsupportedprovideridentifier.md): The identifier of the unsupported subscription provider.
- [VSError](vserror.md): Error information in the framework error domain.
- [VSError.Code](vserror/code.md): Error codes in the framework error domain.

# VSErrorInfoKeySAMLResponseStatus (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The subscription provider’s SAML error-response status code.

## Declaration

```objectivec
extern NSErrorUserInfoKey const VSErrorInfoKeySAMLResponseStatus;
```

<a id="Discussion"></a>

## Discussion

This key is a string in the [userInfo](../foundation/nserror/userinfo.md) dictionary that the system returns with the error.

## See Also

### Errors

- [VSErrorDomain](vserrordomain.md): The domain for all errors in the framework.
- [VSErrorInfoKeySAMLResponse](vserrorinfokeysamlresponse.md): The subscription provider’s SAML error response.
- [VSErrorInfoKeyAccountProviderResponse](vserrorinfokeyaccountproviderresponse.md): The account provider’s error-response object.
- [VSErrorInfoKeyUnsupportedProviderIdentifier](vserrorinfokeyunsupportedprovideridentifier.md): The identifier of the unsupported subscription provider.
- [VSErrorCode](vserror/code.md): Error codes in the framework error domain.
