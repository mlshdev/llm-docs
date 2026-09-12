> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecord/jwsrepresentation](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecord/jwsrepresentation)

# jwsRepresentation (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 15.4) · iPadOS 15.0+ (deprecated in 15.4) · Mac Catalyst 15.0+ (deprecated in 15.4) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0)

A raw representation of the SMART Health Card’s contents.

> Use [dataRepresentation](datarepresentation.md) instead.

## Declaration

```swift
var jwsRepresentation: Data { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a JSON Web Signature (JWS) Compact Serialization of the card. The data is cryptographically signed by the issuer, and compressed.

> **Important**

>  To ensure that the data is authentic and that no one has tampered with it, decompress the data and then use a public key from the issuer to verify their signature.

## See Also

### Accessing the Raw Payload

- [dataRepresentation](datarepresentation.md): A raw representation of the record’s data.

# JWSRepresentation (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 15.4) · iPadOS 15.0+ (deprecated in 15.4) · Mac Catalyst 15.0+ (deprecated in 15.4) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0)

A raw representation of the SMART Health Card’s contents.

> Use [dataRepresentation](datarepresentation.md) instead.

## Declaration

```objectivec
@property (copy, readonly) NSData * JWSRepresentation;
```

<a id="Discussion"></a>

## Discussion

This property contains a JSON Web Signature (JWS) Compact Serialization of the card. The data is cryptographically signed by the issuer, and compressed.

> **Important**

>  To ensure that the data is authentic and that no one has tampered with it, decompress the data and then use a public key from the issuer to verify their signature.

## See Also

### Accessing the Raw Payload

- [dataRepresentation](datarepresentation.md): A raw representation of the record’s data.
