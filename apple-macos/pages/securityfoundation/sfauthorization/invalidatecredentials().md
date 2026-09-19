> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/securityfoundation/sfauthorization/invalidatecredentials()

# invalidateCredentials() (Swift)

**Framework:** Security Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Prevents any rights that were obtained by this object from being preserved.

## Declaration

```swift
func invalidateCredentials()
```

<a id="Discussion"></a>

## Discussion

This method effectively ensures that authorizations are not shared.

# invalidateCredentials (Objective-C)

**Framework:** Security Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Prevents any rights that were obtained by this object from being preserved.

## Declaration

```objectivec
- (void) invalidateCredentials;
```

<a id="Discussion"></a>

## Discussion

This method effectively ensures that authorizations are not shared.
