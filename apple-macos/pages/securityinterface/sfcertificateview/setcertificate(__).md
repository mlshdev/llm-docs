> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificateview/setcertificate(_:)](https://developer.apple.com/documentation/securityinterface/sfcertificateview/setcertificate(_:))

# setCertificate(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Specifies the certificate that’s displayed in the view.

## Declaration

```swift
func setCertificate(_ certificate: SecCertificate!)
```

## Parameters

- `certificate`: The new certificate for the view.

## See Also

### Related Documentation

- [certificate()](certificate%28%29.md): Returns the certificate currently displayed in the view.

# setCertificate: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Specifies the certificate that’s displayed in the view.

## Declaration

```objectivec
- (void) setCertificate:(SecCertificateRef) certificate;
```

## Parameters

- `certificate`: The new certificate for the view.

## See Also

### Related Documentation

- [certificate](certificate%28%29.md): Returns the certificate currently displayed in the view.
