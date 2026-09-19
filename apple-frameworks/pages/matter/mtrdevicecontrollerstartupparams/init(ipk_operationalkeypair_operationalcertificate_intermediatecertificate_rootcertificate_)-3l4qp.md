> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdevicecontrollerstartupparams/init(ipk:operationalkeypair:operationalcertificate:intermediatecertificate:rootcertificate:)-3l4qp

# init(ipk:operationalKeypair:operationalCertificate:intermediateCertificate:rootCertificate:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
init(ipk: Data, operationalKeypair: any MTRKeypair, operationalCertificate: Data, intermediateCertificate: Data?, rootCertificate: Data)
```

# initWithIPK:operationalKeypair:operationalCertificate:intermediateCertificate:rootCertificate: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (instancetype) initWithIPK:(NSData *) ipk operationalKeypair:(id<MTRKeypair>) operationalKeypair operationalCertificate:(MTRCertificateDERBytes) operationalCertificate intermediateCertificate:(MTRCertificateDERBytes) intermediateCertificate rootCertificate:(MTRCertificateDERBytes) rootCertificate;
```
