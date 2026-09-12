> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/tokenendpointurl](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/tokenendpointurl)

# tokenEndpointURL (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The token endpoint URL for login requests.

## Declaration

```swift
var tokenEndpointURL: URL { get set }
```

## See Also

### Obtaining the required configuration

- [audience](audience.md): The audience for validation and requests.
- [clientID](clientid.md): The identifier for the client at the identity provider.
- [jwksEndpointURL](jwksendpointurl.md): The JSON Web Key Set endpoint URL for keys.
- [issuer](issuer.md): The issuer of the identity token that the identity provider returns.

# tokenEndpointURL (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The token endpoint URL for login requests.

## Declaration

```objectivec
@property (nonatomic, copy) NSURL * tokenEndpointURL;
```

## See Also

### Obtaining the required configuration

- [audience](audience.md): The audience for validation and requests.
- [clientID](clientid.md): The identifier for the client at the identity provider.
- [jwksEndpointURL](jwksendpointurl.md): The JSON Web Key Set endpoint URL for keys.
- [issuer](issuer.md): The issuer of the identity token that the identity provider returns.
