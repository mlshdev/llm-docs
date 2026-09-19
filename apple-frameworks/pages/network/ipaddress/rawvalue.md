> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/ipaddress/rawvalue

# rawValue

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The raw data of an IP address.

## Declaration

```swift
var rawValue: Data { get }
```

## See Also

### Inspecting Address Properties

- [interface](interface.md): The interface associated with this address, such as the IPv6 scoped interface.
- [isLinkLocal](islinklocal.md): A Boolean indicating whether this address is in a link-local range.
- [isLoopback](isloopback.md): A Boolean indicating whether this address is a loopback address for the local device.
- [isMulticast](ismulticast.md): A Boolean indicating whether this address is a multicast address.
