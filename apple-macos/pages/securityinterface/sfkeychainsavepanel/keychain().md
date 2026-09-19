> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/securityinterface/sfkeychainsavepanel/keychain()

# keychain() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the keychain created by the keychain save panel.

## Declaration

```swift
func keychain() -> Unmanaged<SecKeychain>!
```

## See Also

### Returning Information from the Sheet or Panel

- [error()](error%28%29.md): Returns the last error encountered by the keychain save panel.

# keychain (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the keychain created by the keychain save panel.

## Declaration

```objectivec
- (SecKeychainRef) keychain;
```

## See Also

### Returning Information from the Sheet or Panel

- [error](error%28%29.md): Returns the last error encountered by the keychain save panel.
