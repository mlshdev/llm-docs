> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/remotecapabilitiesrequest/cachepolicy-swift.property](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/remotecapabilitiesrequest/cachepolicy-swift.property)

# cachePolicy

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

Cache policy to use for request.

## Declaration

```swift
var cachePolicy: RCSService.RemoteCapabilitiesRequest.CachePolicy
```

<a id="discussion"></a>

## Discussion

Always use cache first and then if it fails, prefer cacheOrRemote, remote is something that should be avoided (reserved for cases where the client feels that the cache is invalid, or incorrect)

## See Also

### Accessing request properties

- [cellularServiceID](cellularserviceid.md): Service identifier to use for this request.
- [handle](handle.md): The RCS handle, typically a phone number.
- [RCSService.RemoteCapabilitiesRequest.CachePolicy](cachepolicy-swift.enum.md): Enumeration representing the cache policy to use in requests.
