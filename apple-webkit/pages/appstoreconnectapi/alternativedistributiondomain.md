> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/alternativedistributiondomain](https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributiondomain)

# AlternativeDistributionDomain

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.4.1+

A web domain authorized to distribute your app outside the App Store via web distribution or an alternative marketplace.

## Declaration

```
object AlternativeDistributionDomain
```

## Properties

- `attributes` — `AlternativeDistributionDomain.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `alternativeDistributionDomains`

## Topics

### Objects

- [AlternativeDistributionDomain.Attributes](alternativedistributiondomain/attributes-data.dictionary.md): Attributes that describe an alternative distribution domain resource.

## See Also

### Objects

- [AlternativeDistributionDomainCreateRequest](alternativedistributiondomaincreaterequest.md): The request body you use to create an alternative distribution domain.
- [AlternativeDistributionDomainResponse](alternativedistributiondomainresponse.md): The response body for endpoints that create or read a single alternative distribution domain.
- [AlternativeDistributionDomainsResponse](alternativedistributiondomainsresponse.md): The response body for endpoints that list alternative distribution domains.
