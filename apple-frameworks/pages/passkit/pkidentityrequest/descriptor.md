> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityrequest/descriptor](https://developer.apple.com/documentation/passkit/pkidentityrequest/descriptor)

# descriptor (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The description of the document the app requests.

## Declaration

```swift
var descriptor: (any PKIdentityDocumentDescriptor)? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property before you invoke [requestDocument(\_:completion:)](../pkidentityauthorizationcontroller/requestdocument%28__completion_%29.md).

## See Also

### Configuring an identity request

- [nonce](nonce.md): An arbitrary number that the signed response playload includes.
- [merchantIdentifier](merchantidentifier.md): A value that represents the merchant that makes the request.

# descriptor (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The description of the document the app requests.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id<PKIdentityDocumentDescriptor> descriptor;
```

<a id="Discussion"></a>

## Discussion

Set this property before you invoke [requestDocument:completion:](../pkidentityauthorizationcontroller/requestdocument%28__completion_%29.md).

## See Also

### Configuring an identity request

- [nonce](nonce.md): An arbitrary number that the signed response playload includes.
- [merchantIdentifier](merchantidentifier.md): A value that represents the merchant that makes the request.
