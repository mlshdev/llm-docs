> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialdescriptor/init(credentialid:transports:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationsecuritykeypublickeycredentialdescriptor/init(credentialid:transports:))

# init(credentialID:transports:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates the object with the credential ID and the array of transports.

## Declaration

```swift
init(credentialID: Data, transports allowedTransports: [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor.Transport])
```

## Parameters

- `credentialID`: The credential identifier.
- `allowedTransports`: The array of allowed transports.

## See Also

### Creating the descriptor

- [transports](transports.md): The array of transport types.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptor.Transport](transport.md): A structure that defines the security key credential transport type.

# initWithCredentialID:transports: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates the object with the credential ID and the array of transports.

## Declaration

```objectivec
- (instancetype) initWithCredentialID:(NSData *) credentialID transports:(NSArray<NSString *> *) allowedTransports;
```

## Parameters

- `credentialID`: The credential identifier.
- `allowedTransports`: The array of allowed transports.

## See Also

### Creating the descriptor

- [transports](transports.md): The array of transport types.
- [ASAuthorizationSecurityKeyPublicKeyCredentialDescriptorTransport](transport.md): A structure that defines the security key credential transport type.
