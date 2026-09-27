> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/remotecapabilities(for:)

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
