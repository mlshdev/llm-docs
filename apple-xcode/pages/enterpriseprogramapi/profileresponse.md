> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/profileresponse](https://developer.apple.com/documentation/enterpriseprogramapi/profileresponse)

# ProfileResponse

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

A response that contains a single Profiles resource.

## Declaration

```
object ProfileResponse
```

## Properties

- `data` — `Profile` (required): The resource data.
- `included` — `[*]`: **Allowed types:** `BundleId`, `Device`, `Certificate`
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Objects

- [Profile](profile.md): The data structure that represents a Profiles resource.
- [ProfileCreateRequest](profilecreaterequest.md): The request body you use to create a Profile.
- [ProfilesResponse](profilesresponse.md): A response that contains a list of Profiles resources.
- [ProfilesWithoutIncludesResponse](profileswithoutincludesresponse.md)
