> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialdescriptor/transports](https://developer.apple.com/documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialdescriptor/transports)

# transports (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The array of transport types.

## Declaration

```swift
var transports: [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor.Transport] { get set }
```

## See Also

### Creating the descriptor

- [init(credentialID:transports:)](init%28credentialid_transports_%29.md): Creates the object with the credential ID and the array of transports.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor.Transport](transport.md): A structure that defines the security key credential transport type.

# transports (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The array of transport types.

## Declaration

```objectivec
@property (nonatomic) NSArray<NSString *> * transports;
```

## See Also

### Creating the descriptor

- [initWithCredentialID:transports:](init%28credentialid_transports_%29.md): Creates the object with the credential ID and the array of transports.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptorTransport](transport.md): A structure that defines the security key credential transport type.
