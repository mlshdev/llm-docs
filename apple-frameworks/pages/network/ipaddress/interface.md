> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/ipaddress/interface](https://developer.apple.com/documentation/network/ipaddress/interface)

# interface

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The interface associated with this address, such as the IPv6 scoped interface.

## Declaration

```swift
var interface: NWInterface? { get }
```

## See Also

### Inspecting Address Properties

- [rawValue](rawvalue.md): The raw data of an IP address.
- [isLinkLocal](islinklocal.md): A Boolean indicating whether this address is in a link-local range.
- [isLoopback](isloopback.md): A Boolean indicating whether this address is a loopback address for the local device.
- [isMulticast](ismulticast.md): A Boolean indicating whether this address is a multicast address.
