> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/ipv6address/scope](https://developer.apple.com/documentation/network/ipv6address/scope)

# IPv6Address.Scope

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An IPv6 multicast scope.

## Declaration

```swift
enum Scope
```

## Topics

### Scope Values

- [IPv6Address.Scope.nodeLocal](scope/nodelocal.md): The node-local multicast scope.
- [IPv6Address.Scope.linkLocal](scope/linklocal.md): The link-local multicast scope.
- [IPv6Address.Scope.siteLocal](scope/sitelocal.md): The site-local multicast scope.
- [IPv6Address.Scope.organizationLocal](scope/organizationlocal.md): The organization-local multicast scope.
- [IPv6Address.Scope.global](scope/global.md): The global multicast scope.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Inspecting Address Properties

- [rawValue](rawvalue.md): The raw data of an IPv6 address.
- [interface](interface.md): The IPv6 scoped interface associated with this address.
- [multicastScope](multicastscope.md): The IPv6 multicast scope of the address.
- [isAny](isany.md): A Boolean indicating whether the address is the unspecified address (::).
- [is6to4](is6to4.md): A Boolean indicating whether the address is a 6to4 address.
- [isIPv4Compatabile](isipv4compatabile.md): A Boolean indicating whether the address is IPv4-compatible.
- [isIPv4Mapped](isipv4mapped.md): A Boolean indicating whether the address is an IPv4-mapped address.
- [isLinkLocal](islinklocal.md): A Boolean indicating whether this address is in a link-local range.
- [isLoopback](isloopback.md): A Boolean indicating whether this address is a loopback address for the local device.
- [isMulticast](ismulticast.md): A Boolean indicating whether this address is a multicast address.
