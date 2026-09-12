> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocolikev2/allowpostquantumkeyexchangefallback](https://developer.apple.com/documentation/networkextension/nevpnprotocolikev2/allowpostquantumkeyexchangefallback)

# allowPostQuantumKeyExchangeFallback (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A Boolean value that indicates whether servers that don’t support post-quantum key exchanges can skip them.

## Declaration

```swift
var allowPostQuantumKeyExchangeFallback: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property has no effect if you don’t configure any post-quantum key exchange methods in the [NEVPNIKEv2SecurityAssociationParameters](../nevpnikev2securityassociationparameters.md). The property’s default value is `false`.

## See Also

### Supporting quantum-secure cryptography

- [ppkConfiguration](ppkconfiguration.md): The configuration for a post-quantum pre-shared key (PPK).
- [NEVPNIKEv2PPKConfiguration](../nevpnikev2ppkconfiguration.md): A class that manages parameters of a post-quantum pre-shared key (PPK).

# allowPostQuantumKeyExchangeFallback (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A Boolean value that indicates whether servers that don’t support post-quantum key exchanges can skip them.

## Declaration

```objectivec
@property BOOL allowPostQuantumKeyExchangeFallback;
```

<a id="Discussion"></a>

## Discussion

This property has no effect if you don’t configure any post-quantum key exchange methods in the [NEVPNIKEv2SecurityAssociationParameters](../nevpnikev2securityassociationparameters.md). The property’s default value is `false`.

## See Also

### Supporting quantum-secure cryptography

- [ppkConfiguration](ppkconfiguration.md): The configuration for a post-quantum pre-shared key (PPK).
- [NEVPNIKEv2PPKConfiguration](../nevpnikev2ppkconfiguration.md): A class that manages parameters of a post-quantum pre-shared key (PPK).
