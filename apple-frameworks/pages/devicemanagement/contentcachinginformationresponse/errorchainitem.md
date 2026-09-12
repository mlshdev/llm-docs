> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachinginformationresponse/errorchainitem](https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/errorchainitem)

# ContentCachingInformationResponse.ErrorChainItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

A dictionary that describes an error chain item.

## Declaration

```
object ContentCachingInformationResponse.ErrorChainItem
```

## Properties

- `ErrorCode` — `integer` (required): The error code.
- `ErrorDomain` — `string` (required): The error domain.
- `LocalizedDescription` — `string` (required): A description of the error in the device’s localized language.
- `USEnglishDescription` — `string`: A description of the error in U.S. English.

## See Also

### Objects

- [ContentCachingInformationResponse.StatusResponse](statusresponse-data.dictionary.md): A dictionary that contains the status of content caching on a device.
