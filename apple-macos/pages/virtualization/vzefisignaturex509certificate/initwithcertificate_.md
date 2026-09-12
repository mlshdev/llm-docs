> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefisignaturex509certificate/initwithcertificate:](https://developer.apple.com/documentation/virtualization/vzefisignaturex509certificate/initwithcertificate:)

# initWithCertificate:

**Interface language:** Objective-C

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a signature from an X.509 certificate.

## Declaration

```objectivec
- (instancetype) initWithCertificate:(SecCertificateRef) certificate;
```

## Parameters

- `certificate`: An X.509 certificate object.
