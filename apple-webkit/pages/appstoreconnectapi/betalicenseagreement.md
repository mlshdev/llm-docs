> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betalicenseagreement](https://developer.apple.com/documentation/appstoreconnectapi/betalicenseagreement)

# BetaLicenseAgreement

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The custom terms and conditions presented to TestFlight testers before they begin testing an app.

## Declaration

```
object BetaLicenseAgreement
```

## Properties

- `attributes` — `BetaLicenseAgreement.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `BetaLicenseAgreement.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaLicenseAgreements`

## Topics

### Objects

- [BetaLicenseAgreement.Attributes](betalicenseagreement/attributes-data.dictionary.md): Attributes that describe a Beta License Agreements resource.
- [BetaLicenseAgreement.Relationships](betalicenseagreement/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [BetaLicenseAgreementUpdateRequest](betalicenseagreementupdaterequest.md): The request body you use to update a Beta License Agreement.
- [BetaLicenseAgreementWithoutIncludesResponse](betalicenseagreementwithoutincludesresponse.md): A response containing a single TestFlight license agreement, without related resources.
- [BetaLicenseAgreementsResponse](betalicenseagreementsresponse.md): The response body for endpoints that list TestFlight license agreements.
- [BetaLicenseAgreementResponse](betalicenseagreementresponse.md): The response body for endpoints that read or modify the TestFlight license agreement for an app.
- [BetaLicenseAgreementAppLinkageResponse](betalicenseagreementapplinkageresponse.md)
