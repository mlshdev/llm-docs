> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/securityinterface/sfcertificateview/savetrustsettings()

# saveTrustSettings() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Saves the user’s current trust settings for the displayed certificate.

## Declaration

```swift
func saveTrustSettings()
```

<a id="Discussion"></a>

## Discussion

If trust settings are not editable, this method effectively does nothing. You can use `SecTrustGetUserTrust` to subsequently retrieve the trust settings.

## See Also

### Related Documentation

- [setEditableTrust(\_:)](seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.

# saveTrustSettings (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Saves the user’s current trust settings for the displayed certificate.

## Declaration

```objectivec
- (void) saveTrustSettings;
```

<a id="Discussion"></a>

## Discussion

If trust settings are not editable, this method effectively does nothing. You can use `SecTrustGetUserTrust` to subsequently retrieve the trust settings.

## See Also

### Related Documentation

- [setEditableTrust:](seteditabletrust%28__%29.md): Specifies whether the user can edit the certificate’s trust settings.
