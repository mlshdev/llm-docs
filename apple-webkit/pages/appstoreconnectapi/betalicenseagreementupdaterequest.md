> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betalicenseagreementupdaterequest](https://developer.apple.com/documentation/appstoreconnectapi/betalicenseagreementupdaterequest)

# BetaLicenseAgreementUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The request body you use to update a Beta License Agreement.

## Declaration

```
object BetaLicenseAgreementUpdateRequest
```

## Properties

- `data` — `BetaLicenseAgreementUpdateRequest.Data` (required): The resource data.

## Topics

### Objects

- [BetaLicenseAgreementUpdateRequest.Data](betalicenseagreementupdaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects

- [BetaLicenseAgreement](betalicenseagreement.md): The custom terms and conditions presented to TestFlight testers before they begin testing an app.
- [BetaLicenseAgreementWithoutIncludesResponse](betalicenseagreementwithoutincludesresponse.md): A response containing a single TestFlight license agreement, without related resources.
- [BetaLicenseAgreementsResponse](betalicenseagreementsresponse.md): The response body for endpoints that list TestFlight license agreements.
- [BetaLicenseAgreementResponse](betalicenseagreementresponse.md): The response body for endpoints that read or modify the TestFlight license agreement for an app.
- [BetaLicenseAgreementAppLinkageResponse](betalicenseagreementapplinkageresponse.md)
