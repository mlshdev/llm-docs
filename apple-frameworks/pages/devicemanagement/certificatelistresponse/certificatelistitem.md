> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/certificatelistresponse/certificatelistitem](https://developer.apple.com/documentation/devicemanagement/certificatelistresponse/certificatelistitem)

# CertificateListResponse.CertificateListItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that contains information about a certificate list item.

## Declaration

```
object CertificateListResponse.CertificateListItem
```

## Properties

- `CommonName` — `string` (required): The certificate’s common name.
- `Data` — `data` (required): The certificate in DER-encoded X.509 format.
- `IsIdentity` — `boolean` (required): If `true`, this is an identity certificate.

## See Also

### Objects

- [CertificateListResponse.ErrorChainItem](errorchainitem.md): A dictionary that describes an error chain item.
