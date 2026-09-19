> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/identity()

# identity() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the identity that the user chose in the panel or sheet.

## Declaration

```swift
func identity() -> Unmanaged<SecIdentity>!
```

# identity (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the identity that the user chose in the panel or sheet.

## Declaration

```objectivec
- (SecIdentityRef) identity;
```
