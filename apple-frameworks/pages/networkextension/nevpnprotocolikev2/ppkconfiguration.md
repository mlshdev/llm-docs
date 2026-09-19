> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nevpnprotocolikev2/ppkconfiguration

# ppkConfiguration (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The configuration for a post-quantum pre-shared key (PPK).

## Declaration

```swift
@NSCopying var ppkConfiguration: NEVPNIKEv2PPKConfiguration? { get set }
```

## See Also

### Supporting quantum-secure cryptography

- [allowPostQuantumKeyExchangeFallback](allowpostquantumkeyexchangefallback.md): A Boolean value that indicates whether servers that don’t support post-quantum key exchanges can skip them.
- [NEVPNIKEv2PPKConfiguration](../nevpnikev2ppkconfiguration.md): A class that manages parameters of a post-quantum pre-shared key (PPK).

# ppkConfiguration (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The configuration for a post-quantum pre-shared key (PPK).

## Declaration

```objectivec
@property (copy, nullable) NEVPNIKEv2PPKConfiguration * ppkConfiguration;
```

## See Also

### Supporting quantum-secure cryptography

- [allowPostQuantumKeyExchangeFallback](allowpostquantumkeyexchangefallback.md): A Boolean value that indicates whether servers that don’t support post-quantum key exchanges can skip them.
- [NEVPNIKEv2PPKConfiguration](../nevpnikev2ppkconfiguration.md): A class that manages parameters of a post-quantum pre-shared key (PPK).
