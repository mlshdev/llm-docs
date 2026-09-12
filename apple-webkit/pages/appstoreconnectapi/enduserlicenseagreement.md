> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/enduserlicenseagreement](https://developer.apple.com/documentation/appstoreconnectapi/enduserlicenseagreement)

# EndUserLicenseAgreement

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

A custom end-user license agreement (EULA) for an app, targeting specific territories where it applies.

## Declaration

```
object EndUserLicenseAgreement
```

## Properties

- `attributes` — `EndUserLicenseAgreement.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `EndUserLicenseAgreement.Relationships`:
- `type` — `string` (required): **Allowed values:** `endUserLicenseAgreements`

## Topics

### Objects

- [EndUserLicenseAgreement.Attributes](enduserlicenseagreement/attributes-data.dictionary.md): Attributes that describe an End User License Agreements resource.
- [EndUserLicenseAgreement.Relationships](enduserlicenseagreement/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [EndUserLicenseAgreementCreateRequest](enduserlicenseagreementcreaterequest.md): The request body you use to create an End User License Agreement.
- [EndUserLicenseAgreementUpdateRequest](enduserlicenseagreementupdaterequest.md): The request body you use to update an End User License Agreement.
- [EndUserLicenseAgreementResponse](enduserlicenseagreementresponse.md): The response body for endpoints that read or modify a custom end user license agreement for an app.
- [EndUserLicenseAgreementWithoutIncludesResponse](enduserlicenseagreementwithoutincludesresponse.md): A response containing a single EULA, without including territory details.
- [AppEndUserLicenseAgreementLinkageResponse](appenduserlicenseagreementlinkageresponse.md)
- [EndUserLicenseAgreementTerritoriesLinkagesResponse](enduserlicenseagreementterritorieslinkagesresponse.md)
