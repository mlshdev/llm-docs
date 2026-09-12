> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/bundleidresponse](https://developer.apple.com/documentation/enterpriseprogramapi/bundleidresponse)

# BundleIdResponse

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

A response that contains a single Bundle IDs resource.

## Declaration

```
object BundleIdResponse
```

## Properties

- `data` — `BundleId` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.
- `included` — `[*]`: The requested relationship data.
  **Allowed types:** `Profile`, `BundleIdCapability`

## See Also

### Objects and Types

- [BundleId](bundleid.md): The data structure that represents a Bundle IDs resource.
- [BundleIdPlatform](bundleidplatform.md): Strings that represent the operating system intended for the bundle.
- [BundleIdCreateRequest](bundleidcreaterequest.md): The request body you use to create a Bundle ID.
- [BundleIdUpdateRequest](bundleidupdaterequest.md): The request body you use to update a Bundle ID.
- [BundleIdWithoutIncludesResponse](bundleidwithoutincludesresponse.md): A response that contains a single Bundle IDs resource without includes.
- [BundleIdsResponse](bundleidsresponse.md): A response that contains a list of Bundle ID resources.
