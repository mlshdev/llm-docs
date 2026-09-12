> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/ip/hoplimit(_:)](https://developer.apple.com/documentation/network/ip/hoplimit(_:))

# hopLimit(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Configure the IP hop limit.

## Declaration

```swift
func hopLimit(_ limit: UInt8) -> IP
```

## Parameters

- `limit`: The hop limit.

<a id="discussion"></a>

## Discussion

Equivalent to `IP_TTL` for IPv4 and `IPV6_HOPLIMIT` for IPv6.
