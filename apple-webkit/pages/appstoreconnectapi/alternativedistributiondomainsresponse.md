> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/alternativedistributiondomainsresponse](https://developer.apple.com/documentation/appstoreconnectapi/alternativedistributiondomainsresponse)

# AlternativeDistributionDomainsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.4.1+

The response body for endpoints that list alternative distribution domains.

## Declaration

```
object AlternativeDistributionDomainsResponse
```

## Properties

- `data` — `[AlternativeDistributionDomain]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [AlternativeDistributionDomain](alternativedistributiondomain.md): A web domain authorized to distribute your app outside the App Store via web distribution or an alternative marketplace.
- [AlternativeDistributionDomainCreateRequest](alternativedistributiondomaincreaterequest.md): The request body you use to create an alternative distribution domain.
- [AlternativeDistributionDomainResponse](alternativedistributiondomainresponse.md): The response body for endpoints that create or read a single alternative distribution domain.
