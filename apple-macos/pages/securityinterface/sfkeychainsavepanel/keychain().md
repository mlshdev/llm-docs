> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfkeychainsavepanel/keychain()](https://developer.apple.com/documentation/securityinterface/sfkeychainsavepanel/keychain())

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
