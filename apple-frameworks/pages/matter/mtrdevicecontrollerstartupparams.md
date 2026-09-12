> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerstartupparams](https://developer.apple.com/documentation/matter/mtrdevicecontrollerstartupparams)

# MTRDeviceControllerStartupParams (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRDeviceControllerStartupParams
```

## Mentioned In

- [Onboarding a Matter device](onboarding-a-matter-device.md)

## Topics

### Initializers

- [init(ipk:fabricID:nocSigner:)](mtrdevicecontrollerstartupparams/init%28ipk_fabricid_nocsigner_%29-810ix.md)
- [init(ipk:operationalKeypair:operationalCertificate:intermediateCertificate:rootCertificate:)](mtrdevicecontrollerstartupparams/init%28ipk_operationalkeypair_operationalcertificate_intermediatecertificate_rootcertificate_%29-3l4qp.md)
- [init(operationalKeypair:operationalCertificate:intermediateCertificate:rootCertificate:ipk:)](mtrdevicecontrollerstartupparams/init%28operationalkeypair_operationalcertificate_intermediatecertificate_rootcertificate_ipk_%29.md): Deprecated.
- [init(signingKeypair:fabricId:ipk:)](mtrdevicecontrollerstartupparams/init%28signingkeypair_fabricid_ipk_%29.md): Deprecated.
- [init(IPK:fabricID:nocSigner:)](mtrdevicecontrollerstartupparams/init%28ipk_fabricid_nocsigner_%29-6tfo5.md)
- [init(IPK:operationalKeypair:operationalCertificate:intermediateCertificate:rootCertificate:)](mtrdevicecontrollerstartupparams/init%28ipk_operationalkeypair_operationalcertificate_intermediatecertificate_rootcertificate_%29-3k8x7.md)
- [init(signing:fabricId:ipk:)](mtrdevicecontrollerstartupparams/init%28signing_fabricid_ipk_%29.md): Deprecated.

### Instance Properties

- [caseAuthenticatedTags](mtrdevicecontrollerstartupparams/caseauthenticatedtags.md)
- [fabricID](mtrdevicecontrollerstartupparams/fabricid-1cm6z.md)
- [fabricId](mtrdevicecontrollerstartupparams/fabricid-1cm7v.md): Deprecated.
- [intermediateCertificate](mtrdevicecontrollerstartupparams/intermediatecertificate.md)
- [ipk](mtrdevicecontrollerstartupparams/ipk.md)
- [nocSigner](mtrdevicecontrollerstartupparams/nocsigner.md)
- [nodeID](mtrdevicecontrollerstartupparams/nodeid-9iwwv.md): Node id for this controller.
- [nodeId](mtrdevicecontrollerstartupparams/nodeid-9iwxr.md): Deprecated.
- [operationalCertificate](mtrdevicecontrollerstartupparams/operationalcertificate.md)
- [operationalCertificateIssuer](mtrdevicecontrollerstartupparams/operationalcertificateissuer.md)
- [operationalCertificateIssuerQueue](mtrdevicecontrollerstartupparams/operationalcertificateissuerqueue.md)
- [operationalKeypair](mtrdevicecontrollerstartupparams/operationalkeypair.md)
- [rootCertificate](mtrdevicecontrollerstartupparams/rootcertificate.md)
- [vendorID](mtrdevicecontrollerstartupparams/vendorid-8ru1s.md)
- [vendorId](mtrdevicecontrollerstartupparams/vendorid-8ru0w.md): Deprecated.

### Default Implementations

- [MTRDeviceControllerStartupParams Implementations](mtrdevicecontrollerstartupparams/mtrdevicecontrollerstartupparams-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRDeviceControllerStartupParams (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRDeviceControllerStartupParams : NSObject
```

## Mentioned In

- [Onboarding a Matter device](onboarding-a-matter-device.md)

## Topics

### Initializers

- [initWithIPK:fabricID:nocSigner:](mtrdevicecontrollerstartupparams/init%28ipk_fabricid_nocsigner_%29-810ix.md)
- [initWithIPK:operationalKeypair:operationalCertificate:intermediateCertificate:rootCertificate:](mtrdevicecontrollerstartupparams/init%28ipk_operationalkeypair_operationalcertificate_intermediatecertificate_rootcertificate_%29-3l4qp.md)
- [initWithOperationalKeypair:operationalCertificate:intermediateCertificate:rootCertificate:ipk:](mtrdevicecontrollerstartupparams/init%28operationalkeypair_operationalcertificate_intermediatecertificate_rootcertificate_ipk_%29.md): Deprecated.

### Instance Properties

- [caseAuthenticatedTags](mtrdevicecontrollerstartupparams/caseauthenticatedtags.md)
- [fabricID](mtrdevicecontrollerstartupparams/fabricid-1cm6z.md)
- [fabricId](mtrdevicecontrollerstartupparams/fabricid-1cm7v.md): Deprecated.
- [intermediateCertificate](mtrdevicecontrollerstartupparams/intermediatecertificate.md)
- [ipk](mtrdevicecontrollerstartupparams/ipk.md)
- [nocSigner](mtrdevicecontrollerstartupparams/nocsigner.md)
- [nodeID](mtrdevicecontrollerstartupparams/nodeid-9iwwv.md): Node id for this controller.
- [nodeId](mtrdevicecontrollerstartupparams/nodeid-9iwxr.md): Deprecated.
- [operationalCertificate](mtrdevicecontrollerstartupparams/operationalcertificate.md)
- [operationalCertificateIssuer](mtrdevicecontrollerstartupparams/operationalcertificateissuer.md)
- [operationalCertificateIssuerQueue](mtrdevicecontrollerstartupparams/operationalcertificateissuerqueue.md)
- [operationalKeypair](mtrdevicecontrollerstartupparams/operationalkeypair.md)
- [rootCertificate](mtrdevicecontrollerstartupparams/rootcertificate.md)
- [vendorID](mtrdevicecontrollerstartupparams/vendorid-8ru1s.md)
- [vendorId](mtrdevicecontrollerstartupparams/vendorid-8ru0w.md): Deprecated.

### Instance Methods

- [initWithSigningKeypair:fabricId:ipk:](mtrdevicecontrollerstartupparams/init%28signing_fabricid_ipk_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
