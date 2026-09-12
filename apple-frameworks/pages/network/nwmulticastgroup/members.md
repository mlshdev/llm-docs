> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwmulticastgroup/members](https://developer.apple.com/documentation/network/nwmulticastgroup/members)

# members

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The set of IP multicast group addresses that the connection group joins.

## Declaration

```swift
var members: [NWEndpoint] { get }
```

## See Also

### Inspecting Multicast Groups

- [sourceFilter](sourcefilter.md): An optional address endpoint you provide to filter received multicast packets.
- [isUnicastDisabled](isunicastdisabled.md): A Boolean that specifies whether the connection group rejects unicast traffic.
