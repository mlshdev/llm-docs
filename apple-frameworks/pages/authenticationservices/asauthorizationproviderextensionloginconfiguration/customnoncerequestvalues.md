> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/customnoncerequestvalues](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/customnoncerequestvalues)

# customNonceRequestValues (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

Custom values to add to the server nonce POST request body.

## Declaration

```swift
var customNonceRequestValues: [URLQueryItem] { get set }
```

## Mentioned In

- [Obtaining a server nonce](../obtaining-a-server-nonce.md)

## See Also

### Configuring the server nonce

- [nonceEndpointURL](nonceendpointurl.md): The URL to retrieve a one-time use value from the server.
- [nonceResponseKeypath](nonceresponsekeypath.md): The keypath in the response that contains the one-time use value.
- [serverNonceClaimName](servernonceclaimname.md): The name of the claim to include in authentication requests.

# customNonceRequestValues (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

Custom values to add to the server nonce POST request body.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSURLQueryItem *> * customNonceRequestValues;
```

## Mentioned In

- [Obtaining a server nonce](../obtaining-a-server-nonce.md)

## See Also

### Configuring the server nonce

- [nonceEndpointURL](nonceendpointurl.md): The URL to retrieve a one-time use value from the server.
- [nonceResponseKeypath](nonceresponsekeypath.md): The keypath in the response that contains the one-time use value.
- [serverNonceClaimName](servernonceclaimname.md): The name of the claim to include in authentication requests.
