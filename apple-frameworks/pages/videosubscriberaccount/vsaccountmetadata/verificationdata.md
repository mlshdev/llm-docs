> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadata/verificationdata](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadata/verificationdata)

# verificationData (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

Data you use to verify that the response came from the account provider.

## Declaration

```swift
var verificationData: Data? { get }
```

<a id="Discussion"></a>

## Discussion

Use the data in this property to cryptographically verify that [samlAttributeQueryResponse](samlattributequeryresponse.md) came from the account provider.

## See Also

### Getting App Authentication Info

- [accountProviderResponse](accountproviderresponse.md): The response from the account provider.
- [samlAttributeQueryResponse](samlattributequeryresponse.md): The SAML response from the account provider.

# verificationData (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

Data you use to verify that the response came from the account provider.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * verificationData;
```

<a id="Discussion"></a>

## Discussion

Use the data in this property to cryptographically verify that [SAMLAttributeQueryResponse](samlattributequeryresponse.md) came from the account provider.

## See Also

### Getting App Authentication Info

- [accountProviderResponse](accountproviderresponse.md): The response from the account provider.
- [SAMLAttributeQueryResponse](samlattributequeryresponse.md): The SAML response from the account provider.
