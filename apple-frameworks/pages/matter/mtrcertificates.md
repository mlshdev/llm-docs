> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcertificates](https://developer.apple.com/documentation/matter/mtrcertificates)

# MTRCertificates (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRCertificates
```

## Mentioned In

- [Onboarding a Matter device](onboarding-a-matter-device.md)

## Topics

### Type Methods

- [convertMatterCertificate(\_:)](mtrcertificates/convertmattercertificate%28__%29.md)
- [convertX509Certificate(\_:)](mtrcertificates/convertx509certificate%28__%29.md)
- [createCertificateSigningRequest(\_:)](mtrcertificates/createcertificatesigningrequest%28__%29.md)
- [createIntermediateCertificate(\_:rootCertificate:intermediatePublicKey:issuerID:fabricID:)](mtrcertificates/createintermediatecertificate%28__rootcertificate_intermediatepublickey_issuerid_fabricid_%29.md)
- [createIntermediateCertificate(\_:rootCertificate:intermediatePublicKey:issuerID:fabricID:validityPeriod:)](mtrcertificates/createintermediatecertificate%28__rootcertificate_intermediatepublickey_issuerid_fabricid_validityperiod_%29.md)
- [createOperationalCertificate(\_:signingCertificate:operationalPublicKey:fabricID:nodeID:caseAuthenticatedTags:)](mtrcertificates/createoperationalcertificate%28__signingcertificate_operationalpublickey_fabricid_nodeid_caseauthenticatedtags_%29.md)
- [createOperationalCertificate(\_:signingCertificate:operationalPublicKey:fabricID:nodeID:caseAuthenticatedTags:validityPeriod:)](mtrcertificates/createoperationalcertificate%28__signingcertificate_operationalpublickey_fabricid_nodeid_caseauthenticatedtags_validityperiod_%29.md)
- [createRootCertificate(\_:issuerID:fabricID:)](mtrcertificates/createrootcertificate%28__issuerid_fabricid_%29.md)
- [createRootCertificate(\_:issuerID:fabricID:validityPeriod:)](mtrcertificates/createrootcertificate%28__issuerid_fabricid_validityperiod_%29.md)
- [generateCertificateSigningRequest(\_:)](mtrcertificates/generatecertificatesigningrequest%28__%29.md): Deprecated.
- [generateIntermediateCertificate(\_:rootCertificate:intermediatePublicKey:issuerId:fabricId:)](mtrcertificates/generateintermediatecertificate%28__rootcertificate_intermediatepublickey_issuerid_fabricid_%29.md): Deprecated.
- [generateOperationalCertificate(\_:signingCertificate:operationalPublicKey:fabricId:nodeId:caseAuthenticatedTags:)](mtrcertificates/generateoperationalcertificate%28__signingcertificate_operationalpublickey_fabricid_nodeid_caseauthenticatedtags_%29.md): Deprecated.
- [generateRootCertificate(\_:issuerId:fabricId:)](mtrcertificates/generaterootcertificate%28__issuerid_fabricid_%29.md): Deprecated.
- [isCertificate(\_:equalTo:)](mtrcertificates/iscertificate%28__equalto_%29.md)
- [keypair(\_:matchesCertificate:)](mtrcertificates/keypair%28__matchescertificate_%29.md)
- [publicKey(fromCSR:)](mtrcertificates/publickey%28fromcsr_%29.md)

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

# MTRCertificates (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRCertificates : NSObject
```

## Mentioned In

- [Onboarding a Matter device](onboarding-a-matter-device.md)

## Topics

### Type Methods

- [convertMatterCertificate:](mtrcertificates/convertmattercertificate%28__%29.md)
- [convertX509Certificate:](mtrcertificates/convertx509certificate%28__%29.md)
- [createCertificateSigningRequest:error:](mtrcertificates/createcertificatesigningrequest%28__%29.md)
- [createIntermediateCertificate:rootCertificate:intermediatePublicKey:issuerID:fabricID:error:](mtrcertificates/createintermediatecertificate%28__rootcertificate_intermediatepublickey_issuerid_fabricid_%29.md)
- [createIntermediateCertificate:rootCertificate:intermediatePublicKey:issuerID:fabricID:validityPeriod:error:](mtrcertificates/createintermediatecertificate%28__rootcertificate_intermediatepublickey_issuerid_fabricid_validityperiod_%29.md)
- [createOperationalCertificate:signingCertificate:operationalPublicKey:fabricID:nodeID:caseAuthenticatedTags:error:](mtrcertificates/createoperationalcertificate%28__signingcertificate_operationalpublickey_fabricid_nodeid_caseauthenticatedtags_%29.md)
- [createOperationalCertificate:signingCertificate:operationalPublicKey:fabricID:nodeID:caseAuthenticatedTags:validityPeriod:error:](mtrcertificates/createoperationalcertificate%28__signingcertificate_operationalpublickey_fabricid_nodeid_caseauthenticatedtags_validityperiod_%29.md)
- [createRootCertificate:issuerID:fabricID:error:](mtrcertificates/createrootcertificate%28__issuerid_fabricid_%29.md)
- [createRootCertificate:issuerID:fabricID:validityPeriod:error:](mtrcertificates/createrootcertificate%28__issuerid_fabricid_validityperiod_%29.md)
- [generateCertificateSigningRequest:error:](mtrcertificates/generatecertificatesigningrequest%28__%29.md): Deprecated.
- [generateIntermediateCertificate:rootCertificate:intermediatePublicKey:issuerId:fabricId:error:](mtrcertificates/generateintermediatecertificate%28__rootcertificate_intermediatepublickey_issuerid_fabricid_%29.md): Deprecated.
- [generateOperationalCertificate:signingCertificate:operationalPublicKey:fabricId:nodeId:caseAuthenticatedTags:error:](mtrcertificates/generateoperationalcertificate%28__signingcertificate_operationalpublickey_fabricid_nodeid_caseauthenticatedtags_%29.md): Deprecated.
- [generateRootCertificate:issuerId:fabricId:error:](mtrcertificates/generaterootcertificate%28__issuerid_fabricid_%29.md): Deprecated.
- [isCertificate:equalTo:](mtrcertificates/iscertificate%28__equalto_%29.md)
- [keypair:matchesCertificate:](mtrcertificates/keypair%28__matchescertificate_%29.md)
- [publicKeyFromCSR:error:](mtrcertificates/publickey%28fromcsr_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
