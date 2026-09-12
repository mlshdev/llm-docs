> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/enduserlicenseagreementupdaterequest](https://developer.apple.com/documentation/appstoreconnectapi/enduserlicenseagreementupdaterequest)

# EndUserLicenseAgreementUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The request body you use to update an End User License Agreement.

## Declaration

```
object EndUserLicenseAgreementUpdateRequest
```

## Properties

- `data` — `EndUserLicenseAgreementUpdateRequest.Data` (required):

## Topics

### Objects

- [EndUserLicenseAgreementUpdateRequest.Data](enduserlicenseagreementupdaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects

- [EndUserLicenseAgreement](enduserlicenseagreement.md): A custom end-user license agreement (EULA) for an app, targeting specific territories where it applies.
- [EndUserLicenseAgreementCreateRequest](enduserlicenseagreementcreaterequest.md): The request body you use to create an End User License Agreement.
- [EndUserLicenseAgreementResponse](enduserlicenseagreementresponse.md): The response body for endpoints that read or modify a custom end user license agreement for an app.
- [EndUserLicenseAgreementWithoutIncludesResponse](enduserlicenseagreementwithoutincludesresponse.md): A response containing a single EULA, without including territory details.
- [AppEndUserLicenseAgreementLinkageResponse](appenduserlicenseagreementlinkageresponse.md)
- [EndUserLicenseAgreementTerritoriesLinkagesResponse](enduserlicenseagreementterritorieslinkagesresponse.md)
