> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/enduserlicenseagreementterritorieslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/enduserlicenseagreementterritorieslinkagesresponse)

# EndUserLicenseAgreementTerritoriesLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

## Declaration

```
object EndUserLicenseAgreementTerritoriesLinkagesResponse
```

## Properties

- `data` — `[EndUserLicenseAgreementTerritoriesLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [EndUserLicenseAgreementTerritoriesLinkagesResponse.Data](enduserlicenseagreementterritorieslinkagesresponse/data-data.dictionary.md)

## See Also

### Objects

- [EndUserLicenseAgreement](enduserlicenseagreement.md): A custom end-user license agreement (EULA) for an app, targeting specific territories where it applies.
- [EndUserLicenseAgreementCreateRequest](enduserlicenseagreementcreaterequest.md): The request body you use to create an End User License Agreement.
- [EndUserLicenseAgreementUpdateRequest](enduserlicenseagreementupdaterequest.md): The request body you use to update an End User License Agreement.
- [EndUserLicenseAgreementResponse](enduserlicenseagreementresponse.md): The response body for endpoints that read or modify a custom end user license agreement for an app.
- [EndUserLicenseAgreementWithoutIncludesResponse](enduserlicenseagreementwithoutincludesresponse.md): A response containing a single EULA, without including territory details.
- [AppEndUserLicenseAgreementLinkageResponse](appenduserlicenseagreementlinkageresponse.md)
