> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/businessinformation(for:)](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/businessinformation(for:))

# businessInformation(for:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Requests business information for a specified handle.

## Declaration

```swift
final func businessInformation(for request: RCSService.BusinessInformationRequest) async throws -> RCSService.Business?
```

## Parameters

- `request`: `BusinessInformationRequest` containing the request parameters.

<a id="return-value"></a>

## Return Value

The actual render information structure or error.

## See Also

### Retrieving business information

- [RCSService.BusinessInformationRequest](businessinformationrequest.md): A structure representing a request to retrieve information about a business.
- [RCSService.Business](business.md): Structure containing details about a business.
