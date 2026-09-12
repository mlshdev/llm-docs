> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/ip/fragmentationdisabled(_:)](https://developer.apple.com/documentation/network/ip/fragmentationdisabled(_:))

# fragmentationDisabled(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Configure IP to disable fragmentation on outgoing packets.

## Declaration

```swift
func fragmentationDisabled(_ dontFragment: Bool) -> IP
```

## Parameters

- `dontFragment`: True to disable fragmentation, false otherwise.

<a id="discussion"></a>

## Discussion

Equivalent to `IP_DONTFRAG` for IPv4 and `IPV6_DONTFRAG` for IPv6.
