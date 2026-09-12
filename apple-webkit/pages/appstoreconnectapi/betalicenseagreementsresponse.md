> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betalicenseagreementsresponse](https://developer.apple.com/documentation/appstoreconnectapi/betalicenseagreementsresponse)

# BetaLicenseAgreementsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that list TestFlight license agreements.

## Declaration

```
object BetaLicenseAgreementsResponse
```

## Properties

- `data` — `[BetaLicenseAgreement]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.
- `included` — `[App]`:

## See Also

### Related Documentation

- [List beta license agreements](get-v1-betalicenseagreements.md): Find and list beta license agreements for all apps.

### Objects

- [BetaLicenseAgreement](betalicenseagreement.md): The custom terms and conditions presented to TestFlight testers before they begin testing an app.
- [BetaLicenseAgreementUpdateRequest](betalicenseagreementupdaterequest.md): The request body you use to update a Beta License Agreement.
- [BetaLicenseAgreementWithoutIncludesResponse](betalicenseagreementwithoutincludesresponse.md): A response containing a single TestFlight license agreement, without related resources.
- [BetaLicenseAgreementResponse](betalicenseagreementresponse.md): The response body for endpoints that read or modify the TestFlight license agreement for an app.
- [BetaLicenseAgreementAppLinkageResponse](betalicenseagreementapplinkageresponse.md)
