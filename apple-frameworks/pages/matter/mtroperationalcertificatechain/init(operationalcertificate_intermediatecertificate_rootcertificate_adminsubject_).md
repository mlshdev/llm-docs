> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtroperationalcertificatechain/init(operationalcertificate:intermediatecertificate:rootcertificate:adminsubject:)](https://developer.apple.com/documentation/matter/mtroperationalcertificatechain/init(operationalcertificate:intermediatecertificate:rootcertificate:adminsubject:))

# init(operationalCertificate:intermediateCertificate:rootCertificate:adminSubject:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
init(operationalCertificate: Data, intermediateCertificate: Data?, rootCertificate: Data, adminSubject: NSNumber?)
```

# initWithOperationalCertificate:intermediateCertificate:rootCertificate:adminSubject: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (instancetype) initWithOperationalCertificate:(MTRCertificateDERBytes) operationalCertificate intermediateCertificate:(MTRCertificateDERBytes) intermediateCertificate rootCertificate:(MTRCertificateDERBytes) rootCertificate adminSubject:(NSNumber *) adminSubject;
```
