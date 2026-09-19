> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/ipv6address/asipv4

# asIPv4

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Extracts the IPv4 address contained within the IPv6 address, if the IPv6 address is an IPv4-mapped or IPv4-compatible address.

## Declaration

```swift
var asIPv4: IPv4Address? { get }
```

## See Also

### Creating Addresses

- [init(\_:)](init%28__%29.md): Initializes an IPv6 address with a string.
- [init(\_:\_:)](init%28____%29.md): Initializes an IPv6 address with data.
