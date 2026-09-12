> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecord/datarepresentation](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecord/datarepresentation)

# dataRepresentation (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS 1.0+

A raw representation of the record’s data.

## Declaration

```swift
var dataRepresentation: Data { get }
```

<a id="Discussion"></a>

## Discussion

The data’s format varies based on its [sourceType](sourcetype.md):

- **SMART Health Card**: The raw representation corresponds to the compact JSON Web Signatures (JWS) serialization. For more information, see [SMART Health Card Framework](https://spec.smarthealth.cards/#health-cards-are-encoded-as-compact-serialization-json-web-signatures-jws).
- **EU-DCC Records**: The raw representation corresponds to the CBOR Web Tokens (CWT) of the Electronic Health Certificate (HCERT). For more information, see [Electronic Health Certificates](https://github.com/ehn-dcc-development/hcert-spec).

> **Important**

>  To ensure that the data is authentic and that no one has tampered with it, decompress the data and then use a public key from the issuer to verify their signature.

## See Also

### Accessing the Raw Payload

- [jwsRepresentation](jwsrepresentation.md): Deprecated. A raw representation of the SMART Health Card’s contents.

# dataRepresentation (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS 1.0+

A raw representation of the record’s data.

## Declaration

```objectivec
@property (copy, readonly) NSData * dataRepresentation;
```

<a id="Discussion"></a>

## Discussion

The data’s format varies based on its [sourceType](sourcetype.md):

- **SMART Health Card**: The raw representation corresponds to the compact JSON Web Signatures (JWS) serialization. For more information, see [SMART Health Card Framework](https://spec.smarthealth.cards/#health-cards-are-encoded-as-compact-serialization-json-web-signatures-jws).
- **EU-DCC Records**: The raw representation corresponds to the CBOR Web Tokens (CWT) of the Electronic Health Certificate (HCERT). For more information, see [Electronic Health Certificates](https://github.com/ehn-dcc-development/hcert-spec).

> **Important**

>  To ensure that the data is authentic and that no one has tampered with it, decompress the data and then use a public key from the issuer to verify their signature.

## See Also

### Accessing the Raw Payload

- [JWSRepresentation](jwsrepresentation.md): Deprecated. A raw representation of the SMART Health Card’s contents.
