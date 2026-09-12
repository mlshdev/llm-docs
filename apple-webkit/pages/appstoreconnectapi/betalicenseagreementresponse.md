> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betalicenseagreementresponse](https://developer.apple.com/documentation/appstoreconnectapi/betalicenseagreementresponse)

# BetaLicenseAgreementResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that read or modify the TestFlight license agreement for an app.

## Declaration

```
object BetaLicenseAgreementResponse
```

## Properties

- `data` — `BetaLicenseAgreement` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.
- `included` — `[App]`:

## See Also

### Related Documentation

- [Read the beta license agreement of an app](get-v1-apps-_id_-betalicenseagreement.md): Get the beta license agreement for a specific app.

### Objects

- [BetaLicenseAgreement](betalicenseagreement.md): The custom terms and conditions presented to TestFlight testers before they begin testing an app.
- [BetaLicenseAgreementUpdateRequest](betalicenseagreementupdaterequest.md): The request body you use to update a Beta License Agreement.
- [BetaLicenseAgreementWithoutIncludesResponse](betalicenseagreementwithoutincludesresponse.md): A response containing a single TestFlight license agreement, without related resources.
- [BetaLicenseAgreementsResponse](betalicenseagreementsresponse.md): The response body for endpoints that list TestFlight license agreements.
- [BetaLicenseAgreementAppLinkageResponse](betalicenseagreementapplinkageresponse.md)
