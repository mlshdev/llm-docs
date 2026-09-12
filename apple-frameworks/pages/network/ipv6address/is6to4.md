> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/ipv6address/is6to4](https://developer.apple.com/documentation/network/ipv6address/is6to4)

# is6to4

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A Boolean indicating whether the address is a 6to4 address.

## Declaration

```swift
var is6to4: Bool { get }
```

## See Also

### Inspecting Address Properties

- [rawValue](rawvalue.md): The raw data of an IPv6 address.
- [interface](interface.md): The IPv6 scoped interface associated with this address.
- [multicastScope](multicastscope.md): The IPv6 multicast scope of the address.
- [IPv6Address.Scope](scope.md): An IPv6 multicast scope.
- [isAny](isany.md): A Boolean indicating whether the address is the unspecified address (::).
- [isIPv4Compatabile](isipv4compatabile.md): A Boolean indicating whether the address is IPv4-compatible.
- [isIPv4Mapped](isipv4mapped.md): A Boolean indicating whether the address is an IPv4-mapped address.
- [isLinkLocal](islinklocal.md): A Boolean indicating whether this address is in a link-local range.
- [isLoopback](isloopback.md): A Boolean indicating whether this address is a loopback address for the local device.
- [isMulticast](ismulticast.md): A Boolean indicating whether this address is a multicast address.
