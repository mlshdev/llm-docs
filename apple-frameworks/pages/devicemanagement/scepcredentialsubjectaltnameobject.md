> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/scepcredentialsubjectaltnameobject](https://developer.apple.com/documentation/devicemanagement/scepcredentialsubjectaltnameobject)

# SCEPCredentialSubjectAltNameObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+ · watchOS 10.0+

The subject’s alternative name for the certificate.

## Declaration

```
object SCEPCredentialSubjectAltNameObject
```

## Properties

- `dNSName` — `string`: The DNS name.
- `ntPrincipalName` — `string`: The NT principal name. Use an other name OID set to `1.3.6.1.4.1.311.20.2.3`.
- `rfc822Name` — `string`: The RFC 822 email address.
- `uniformResourceIdentifier` — `string`: The uniform resource identifier.
