> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/remotecapabilities(for:)](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/remotecapabilities(for:))

# remoteCapabilities(for:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Requests remote capability discovery for a given handle

## Declaration

```swift
final func remoteCapabilities(for request: RCSService.RemoteCapabilitiesRequest) async throws -> RCSService.RemoteCapabilities?
```

## Parameters

- `request`: `RemoteCapabilitiesRequest` containing the request parameters.

<a id="return-value"></a>

## Return Value

Remote capabilities for requested handle, if available.

## See Also

### Discovering remote capabilities

- [RCSService.RemoteCapabilitiesRequest](remotecapabilitiesrequest.md): A structure representing a request to retrieve the capabilities of a remote handle.
- [RCSService.RemoteCapabilities](remotecapabilities.md): Structure representing the capabilities of a remote handle.
