> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadata/samlattributequeryresponse](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadata/samlattributequeryresponse)

# samlAttributeQueryResponse (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The SAML response from the account provider.

## Declaration

```swift
var samlAttributeQueryResponse: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if you didn’t specify any SAML attributes in your [VSAccountMetadataRequest](../vsaccountmetadatarequest.md) object or if the person doesn’t have a valid authentication session with the account provider.

## See Also

### Getting App Authentication Info

- [accountProviderResponse](accountproviderresponse.md): The response from the account provider.
- [verificationData](verificationdata.md): Data you use to verify that the response came from the account provider.

# SAMLAttributeQueryResponse (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The SAML response from the account provider.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * SAMLAttributeQueryResponse;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if you didn’t specify any SAML attributes in your [VSAccountMetadataRequest](../vsaccountmetadatarequest.md) object or if the person doesn’t have a valid authentication session with the account provider.

## See Also

### Getting App Authentication Info

- [accountProviderResponse](accountproviderresponse.md): The response from the account provider.
- [verificationData](verificationdata.md): Data you use to verify that the response came from the account provider.
