> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadata/accountproviderresponse](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadata/accountproviderresponse)

# accountProviderResponse (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 10.2+ · macOS · tvOS 10.1+ · visionOS 1.0+

The response from the account provider.

## Declaration

```swift
var accountProviderResponse: VSAccountProviderResponse? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if you didn’t specify any attributes in your [VSAccountMetadataRequest](../vsaccountmetadatarequest.md) object or if the person doesn’t have a valid authentication session with the account provider.

## See Also

### Getting App Authentication Info

- [samlAttributeQueryResponse](samlattributequeryresponse.md): The SAML response from the account provider.
- [verificationData](verificationdata.md): Data you use to verify that the response came from the account provider.

# accountProviderResponse (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · macOS · tvOS 10.1+ · visionOS 1.0+

The response from the account provider.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) VSAccountProviderResponse * accountProviderResponse;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if you didn’t specify any attributes in your [VSAccountMetadataRequest](../vsaccountmetadatarequest.md) object or if the person doesn’t have a valid authentication session with the account provider.

## See Also

### Getting App Authentication Info

- [SAMLAttributeQueryResponse](samlattributequeryresponse.md): The SAML response from the account provider.
- [verificationData](verificationdata.md): Data you use to verify that the response came from the account provider.
