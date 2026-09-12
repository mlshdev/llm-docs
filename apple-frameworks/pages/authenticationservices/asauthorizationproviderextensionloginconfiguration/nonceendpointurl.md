> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/nonceendpointurl](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/nonceendpointurl)

# nonceEndpointURL (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The URL to retrieve a one-time use value from the server.

## Declaration

```swift
var nonceEndpointURL: URL { get set }
```

## Mentioned In

- [Obtaining a server nonce](../obtaining-a-server-nonce.md)

<a id="Discussion"></a>

## Discussion

The value of this property defaults to [tokenEndpointURL](tokenendpointurl.md).

## See Also

### Configuring the server nonce

- [customNonceRequestValues](customnoncerequestvalues.md): Custom values to add to the server nonce POST request body.
- [nonceResponseKeypath](nonceresponsekeypath.md): The keypath in the response that contains the one-time use value.
- [serverNonceClaimName](servernonceclaimname.md): The name of the claim to include in authentication requests.

# nonceEndpointURL (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The URL to retrieve a one-time use value from the server.

## Declaration

```objectivec
@property (nonatomic, copy) NSURL * nonceEndpointURL;
```

## Mentioned In

- [Obtaining a server nonce](../obtaining-a-server-nonce.md)

<a id="Discussion"></a>

## Discussion

The value of this property defaults to [tokenEndpointURL](tokenendpointurl.md).

## See Also

### Configuring the server nonce

- [customNonceRequestValues](customnoncerequestvalues.md): Custom values to add to the server nonce POST request body.
- [nonceResponseKeypath](nonceresponsekeypath.md): The keypath in the response that contains the one-time use value.
- [serverNonceClaimName](servernonceclaimname.md): The name of the claim to include in authentication requests.
