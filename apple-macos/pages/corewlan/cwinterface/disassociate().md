> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corewlan/cwinterface/disassociate()

# disassociate() (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Disassociates from the current network.

## Declaration

```swift
func disassociate()
```

<a id="Discussion"></a>

## Discussion

This method has no effect if the interface is not associated to a network. This operation may require an administrator password.

# disassociate (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Disassociates from the current network.

## Declaration

```objectivec
- (void) disassociate;
```

<a id="Discussion"></a>

## Discussion

This method has no effect if the interface is not associated to a network. This operation may require an administrator password.
