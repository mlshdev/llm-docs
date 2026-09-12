> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnikev2ppkconfiguration](https://developer.apple.com/documentation/networkextension/nevpnikev2ppkconfiguration)

# NEVPNIKEv2PPKConfiguration (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A class that manages parameters of a post-quantum pre-shared key (PPK).

## Declaration

```swift
class NEVPNIKEv2PPKConfiguration
```

<a id="Discussion"></a>

## Discussion

Instances of this class are thread safe. The class conforms to RFC 8784.

## Topics

### Creating a PPK configuration

- [init(identifier:keychainReference:)](nevpnikev2ppkconfiguration/init%28identifier_keychainreference_%29.md): Initializes a quantum-secure pre-shared key (PPK) configuration.

### Accessing the configuration parameters

- [identifier](nevpnikev2ppkconfiguration/identifier.md): The identifier for the PPK.
- [keychainReference](nevpnikev2ppkconfiguration/keychainreference.md): A persistent reference to the key in the keychain.
- [isMandatory](nevpnikev2ppkconfiguration/ismandatory.md): A Boolean value that indicates whether it’s mandatory for the VPN server to use this PPK.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Supporting quantum-secure cryptography

- [allowPostQuantumKeyExchangeFallback](nevpnprotocolikev2/allowpostquantumkeyexchangefallback.md): A Boolean value that indicates whether servers that don’t support post-quantum key exchanges can skip them.
- [ppkConfiguration](nevpnprotocolikev2/ppkconfiguration.md): The configuration for a post-quantum pre-shared key (PPK).

# NEVPNIKEv2PPKConfiguration (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A class that manages parameters of a post-quantum pre-shared key (PPK).

## Declaration

```objectivec
@interface NEVPNIKEv2PPKConfiguration : NSObject
```

<a id="Discussion"></a>

## Discussion

Instances of this class are thread safe. The class conforms to RFC 8784.

## Topics

### Creating a PPK configuration

- [initWithIdentifier:keychainReference:](nevpnikev2ppkconfiguration/init%28identifier_keychainreference_%29.md): Initializes a quantum-secure pre-shared key (PPK) configuration.

### Accessing the configuration parameters

- [identifier](nevpnikev2ppkconfiguration/identifier.md): The identifier for the PPK.
- [keychainReference](nevpnikev2ppkconfiguration/keychainreference.md): A persistent reference to the key in the keychain.
- [isMandatory](nevpnikev2ppkconfiguration/ismandatory.md): A Boolean value that indicates whether it’s mandatory for the VPN server to use this PPK.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Supporting quantum-secure cryptography

- [allowPostQuantumKeyExchangeFallback](nevpnprotocolikev2/allowpostquantumkeyexchangefallback.md): A Boolean value that indicates whether servers that don’t support post-quantum key exchanges can skip them.
- [ppkConfiguration](nevpnprotocolikev2/ppkconfiguration.md): The configuration for a post-quantum pre-shared key (PPK).
