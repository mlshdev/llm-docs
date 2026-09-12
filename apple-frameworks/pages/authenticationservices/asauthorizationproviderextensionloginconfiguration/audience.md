> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/audience](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/audience)

# audience (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The audience for validation and requests.

## Declaration

```swift
var audience: String { get set }
```

## Mentioned In

- [Supporting key requests and key exchange requests](../supporting-key-requests-and-key-exchange-requests.md)
- [Creating an embedded assertion](../creating-an-embedded-assertion.md)
- [Creating an encrypted embedded assertion](../creating-an-encrypted-embedded-assertion.md)

## See Also

### Obtaining the required configuration

- [clientID](clientid.md): The identifier for the client at the identity provider.
- [jwksEndpointURL](jwksendpointurl.md): The JSON Web Key Set endpoint URL for keys.
- [tokenEndpointURL](tokenendpointurl.md): The token endpoint URL for login requests.
- [issuer](issuer.md): The issuer of the identity token that the identity provider returns.

# audience (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The audience for validation and requests.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * audience;
```

## Mentioned In

- [Supporting key requests and key exchange requests](../supporting-key-requests-and-key-exchange-requests.md)
- [Creating an embedded assertion](../creating-an-embedded-assertion.md)
- [Creating an encrypted embedded assertion](../creating-an-encrypted-embedded-assertion.md)

## See Also

### Obtaining the required configuration

- [clientID](clientid.md): The identifier for the client at the identity provider.
- [jwksEndpointURL](jwksendpointurl.md): The JSON Web Key Set endpoint URL for keys.
- [tokenEndpointURL](tokenendpointurl.md): The token endpoint URL for login requests.
- [issuer](issuer.md): The issuer of the identity token that the identity provider returns.
