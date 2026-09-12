> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/servernonceclaimname](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/servernonceclaimname)

# serverNonceClaimName (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The name of the claim to include in authentication requests.

## Declaration

```swift
var serverNonceClaimName: String { get set }
```

## Mentioned In

- [Creating an embedded assertion](../creating-an-embedded-assertion.md)
- [Supporting key requests and key exchange requests](../supporting-key-requests-and-key-exchange-requests.md)
- [Creating a refresh request](../creating-a-refresh-request.md)
- [Creating an encrypted embedded assertion](../creating-an-encrypted-embedded-assertion.md)
- [Creating and validating a login request](../creating-and-validating-a-login-request.md)

<a id="Discussion"></a>

## Discussion

The default value is `request_nonce`.

## See Also

### Configuring the server nonce

- [customNonceRequestValues](customnoncerequestvalues.md): Custom values to add to the server nonce POST request body.
- [nonceEndpointURL](nonceendpointurl.md): The URL to retrieve a one-time use value from the server.
- [nonceResponseKeypath](nonceresponsekeypath.md): The keypath in the response that contains the one-time use value.

# serverNonceClaimName (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The name of the claim to include in authentication requests.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * serverNonceClaimName;
```

## Mentioned In

- [Creating an embedded assertion](../creating-an-embedded-assertion.md)
- [Supporting key requests and key exchange requests](../supporting-key-requests-and-key-exchange-requests.md)
- [Creating a refresh request](../creating-a-refresh-request.md)
- [Creating an encrypted embedded assertion](../creating-an-encrypted-embedded-assertion.md)
- [Creating and validating a login request](../creating-and-validating-a-login-request.md)

<a id="Discussion"></a>

## Discussion

The default value is `request_nonce`.

## See Also

### Configuring the server nonce

- [customNonceRequestValues](customnoncerequestvalues.md): Custom values to add to the server nonce POST request body.
- [nonceEndpointURL](nonceendpointurl.md): The URL to retrieve a one-time use value from the server.
- [nonceResponseKeypath](nonceresponsekeypath.md): The keypath in the response that contains the one-time use value.
