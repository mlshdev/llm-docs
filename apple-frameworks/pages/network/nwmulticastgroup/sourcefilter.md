> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwmulticastgroup/sourcefilter](https://developer.apple.com/documentation/network/nwmulticastgroup/sourcefilter)

# sourceFilter

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An optional address endpoint you provide to filter received multicast packets.

## Declaration

```swift
final let sourceFilter: NWEndpoint?
```

## See Also

### Inspecting Multicast Groups

- [members](members.md): The set of IP multicast group addresses that the connection group joins.
- [isUnicastDisabled](isunicastdisabled.md): A Boolean that specifies whether the connection group rejects unicast traffic.
