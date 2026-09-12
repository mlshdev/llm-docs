> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/bundleid](https://developer.apple.com/documentation/enterpriseprogramapi/bundleid)

# BundleId

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

The data structure that represents a Bundle IDs resource.

## Declaration

```
object BundleId
```

## Properties

- `attributes` — `BundleId.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `relationships` — `BundleId.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `bundleIds`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [BundleId.Attributes](bundleid/attributes-data.dictionary.md): Attributes that describe a Bundle IDs resource.

### Dictionaries

- [BundleId.Relationships](bundleid/relationships-data.dictionary.md): The relationships you included in the request and those on which you can operate.

## See Also

### Objects and Types

- [BundleIdPlatform](bundleidplatform.md): Strings that represent the operating system intended for the bundle.
- [BundleIdCreateRequest](bundleidcreaterequest.md): The request body you use to create a Bundle ID.
- [BundleIdUpdateRequest](bundleidupdaterequest.md): The request body you use to update a Bundle ID.
- [BundleIdResponse](bundleidresponse.md): A response that contains a single Bundle IDs resource.
- [BundleIdWithoutIncludesResponse](bundleidwithoutincludesresponse.md): A response that contains a single Bundle IDs resource without includes.
- [BundleIdsResponse](bundleidsresponse.md): A response that contains a list of Bundle ID resources.
