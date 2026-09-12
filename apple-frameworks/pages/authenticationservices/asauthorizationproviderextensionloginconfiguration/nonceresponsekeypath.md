> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/nonceresponsekeypath](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/nonceresponsekeypath)

# nonceResponseKeypath (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The keypath in the response that contains the one-time use value.

## Declaration

```swift
var nonceResponseKeypath: String { get set }
```

## Mentioned In

- [Obtaining a server nonce](../obtaining-a-server-nonce.md)

<a id="Discussion"></a>

## Discussion

## See Also

### Configuring the server nonce

- [customNonceRequestValues](customnoncerequestvalues.md): Custom values to add to the server nonce POST request body.
- [nonceEndpointURL](nonceendpointurl.md): The URL to retrieve a one-time use value from the server.
- [serverNonceClaimName](servernonceclaimname.md): The name of the claim to include in authentication requests.

# nonceResponseKeypath (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The keypath in the response that contains the one-time use value.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * nonceResponseKeypath;
```

## Mentioned In

- [Obtaining a server nonce](../obtaining-a-server-nonce.md)

<a id="Discussion"></a>

## Discussion

## See Also

### Configuring the server nonce

- [customNonceRequestValues](customnoncerequestvalues.md): Custom values to add to the server nonce POST request body.
- [nonceEndpointURL](nonceendpointurl.md): The URL to retrieve a one-time use value from the server.
- [serverNonceClaimName](servernonceclaimname.md): The name of the claim to include in authentication requests.
