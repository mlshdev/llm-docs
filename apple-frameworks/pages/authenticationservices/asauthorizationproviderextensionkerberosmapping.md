> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionkerberosmapping](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionkerberosmapping)

# ASAuthorizationProviderExtensionKerberosMapping (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** macOS 13.0+

A set of Kerberos mappings that the system login process uses.

## Declaration

```swift
class ASAuthorizationProviderExtensionKerberosMapping
```

## Mentioned In

- [Creating a JSON Web Encryption (JWE) login response](creating-a-json-web-encryption-jwe-login-response.md)

<a id="overview"></a>

## Overview

This class contains a set of mappings for the sign-on token when importing the Kerberos ticket.

## Topics

### Getting the properties

- [clientNameKeyName](asauthorizationproviderextensionkerberosmapping/clientnamekeyname.md): The key name of the Kerberos client name string.
- [encryptionKeyTypeKeyName](asauthorizationproviderextensionkerberosmapping/encryptionkeytypekeyname.md): The key name of the Kerberos session key type number.
- [messageBufferKeyName](asauthorizationproviderextensionkerberosmapping/messagebufferkeyname.md): The key name of the Base 64-encoded Kerberos AS-REP string.
- [realmKeyName](asauthorizationproviderextensionkerberosmapping/realmkeyname.md): The key name of the Kerberos realm string.
- [serviceNameKeyName](asauthorizationproviderextensionkerberosmapping/servicenamekeyname.md): The key name of the Kerberos service name string.
- [sessionKeyKeyName](asauthorizationproviderextensionkerberosmapping/sessionkeykeyname.md): The key name of the Kerberos session key.
- [ticketKeyPath](asauthorizationproviderextensionkerberosmapping/ticketkeypath.md): The keypath in the response JSON that uses this set of mappings.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Authentication

- [Authentication process](authentication-process.md): Use a system-supported method to authenticate with an identity provider.
- [Implementing web-based authentication with Platform Single Sign-on](implementing-web-based-authentication.md): Support modern, phishing-resistant, and flexible authentication methods.
- [Using access keys with Platform Single Sign-on](using-access-keys-with-platform-single-sign-on.md): Authenticate users with access keys stored in Apple Wallet.

# ASAuthorizationProviderExtensionKerberosMapping (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** macOS 13.0+

A set of Kerberos mappings that the system login process uses.

## Declaration

```objectivec
@interface ASAuthorizationProviderExtensionKerberosMapping : NSObject
```

## Mentioned In

- [Creating a JSON Web Encryption (JWE) login response](creating-a-json-web-encryption-jwe-login-response.md)

<a id="overview"></a>

## Overview

This class contains a set of mappings for the sign-on token when importing the Kerberos ticket.

## Topics

### Getting the properties

- [clientNameKeyName](asauthorizationproviderextensionkerberosmapping/clientnamekeyname.md): The key name of the Kerberos client name string.
- [encryptionKeyTypeKeyName](asauthorizationproviderextensionkerberosmapping/encryptionkeytypekeyname.md): The key name of the Kerberos session key type number.
- [messageBufferKeyName](asauthorizationproviderextensionkerberosmapping/messagebufferkeyname.md): The key name of the Base 64-encoded Kerberos AS-REP string.
- [realmKeyName](asauthorizationproviderextensionkerberosmapping/realmkeyname.md): The key name of the Kerberos realm string.
- [serviceNameKeyName](asauthorizationproviderextensionkerberosmapping/servicenamekeyname.md): The key name of the Kerberos service name string.
- [sessionKeyKeyName](asauthorizationproviderextensionkerberosmapping/sessionkeykeyname.md): The key name of the Kerberos session key.
- [ticketKeyPath](asauthorizationproviderextensionkerberosmapping/ticketkeypath.md): The keypath in the response JSON that uses this set of mappings.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Authentication

- [Authentication process](authentication-process.md): Use a system-supported method to authenticate with an identity provider.
- [Implementing web-based authentication with Platform Single Sign-on](implementing-web-based-authentication.md): Support modern, phishing-resistant, and flexible authentication methods.
- [Using access keys with Platform Single Sign-on](using-access-keys-with-platform-single-sign-on.md): Authenticate users with access keys stored in Apple Wallet.
