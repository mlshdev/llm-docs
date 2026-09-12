> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/getassetsresponse](https://developer.apple.com/documentation/devicemanagement/getassetsresponse)

# GetAssetsResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.0+

The paginated response that contains the requested assets.

## Declaration

```
object GetAssetsResponse
```

## Properties

- `assets` — `[ResponseAsset]`: The set of requested assets.
- `unlimitedAssets` — `[UnlimitedResponseAsset]`: The set of requested unlimited assets.
- `currentPageIndex` — `int32`: The current page index of the paginated response.
- `nextPageIndex` — `int32`: The next page index in the paginated response.

  The response only includes this field when  there is a next page.
- `size` — `int32`: The number of assets on the current page.
- `totalPages` — `int32`: The total number of pages in the paginated response.
- `versionId` — `string`: The current version identifier. When traversing the paginated response, use `versionId` to identify when changes occur to underlying data.

  When any writes occur to the underlying data in a fetch, `versionId` updates.
- `mdmInfo` — `MdmInfo`: The current information for the provided token.

  The response only includes this field when MDM sets a value using the [Client Config](client-config-4szk1.md) endpoint.
- `tokenExpirationDate` — `string`: The token expiration date in an ISO-8601 format.

  Note: The server shows all dates and times in UTC.
- `uId` — `string`: The unique library identifier. When querying records using multiple tokens that may share libraries, use the `uId` field to filter duplicates and avoid double-counting records when different content managers upload duplicate tokens.

## Mentioned In

- [Getting started with the management API](getting-started-with-the-management-api.md)
- [Managing assets](managing-assets.md)

## Topics

### Objects and data types

- [ResponseAsset](responseasset.md): The asset that the organization owns.
- [UnlimitedResponseAsset](unlimitedresponseasset.md): An asset with an unlimited license that the organization owns.
- [MdmInfo](mdminfo.md): Information about the MDM client.

## See Also

### Response

- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.
