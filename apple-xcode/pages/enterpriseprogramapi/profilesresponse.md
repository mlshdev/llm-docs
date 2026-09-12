> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/profilesresponse](https://developer.apple.com/documentation/enterpriseprogramapi/profilesresponse)

# ProfilesResponse

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

A response that contains a list of Profiles resources.

## Declaration

```
object ProfilesResponse
```

## Properties

- `data` — `[Profile]` (required): The resource data.
- `included` — `[*]`: **Allowed types:** `BundleId`, `Device`, `Certificate`
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.

## See Also

### Objects

- [Profile](profile.md): The data structure that represents a Profiles resource.
- [ProfileCreateRequest](profilecreaterequest.md): The request body you use to create a Profile.
- [ProfileResponse](profileresponse.md): A response that contains a single Profiles resource.
- [ProfilesWithoutIncludesResponse](profileswithoutincludesresponse.md)
