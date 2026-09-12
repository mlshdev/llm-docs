> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betalicenseagreementwithoutincludesresponse](https://developer.apple.com/documentation/appstoreconnectapi/betalicenseagreementwithoutincludesresponse)

# BetaLicenseAgreementWithoutIncludesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response containing a single TestFlight license agreement, without related resources.

## Declaration

```
object BetaLicenseAgreementWithoutIncludesResponse
```

## Properties

- `data` — `BetaLicenseAgreement` (required):
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [BetaLicenseAgreement](betalicenseagreement.md): The custom terms and conditions presented to TestFlight testers before they begin testing an app.
- [BetaLicenseAgreementUpdateRequest](betalicenseagreementupdaterequest.md): The request body you use to update a Beta License Agreement.
- [BetaLicenseAgreementsResponse](betalicenseagreementsresponse.md): The response body for endpoints that list TestFlight license agreements.
- [BetaLicenseAgreementResponse](betalicenseagreementresponse.md): The response body for endpoints that read or modify the TestFlight license agreement for an app.
- [BetaLicenseAgreementAppLinkageResponse](betalicenseagreementapplinkageresponse.md)
