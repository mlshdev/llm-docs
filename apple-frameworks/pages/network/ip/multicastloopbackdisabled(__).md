> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/ip/multicastloopbackdisabled(_:)

# multicastLoopbackDisabled(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Specify if multicast packets should be looped back for local delivery.

## Declaration

```swift
func multicastLoopbackDisabled(_ disableMulticastLoopback: Bool) -> IP
```

## Parameters

- `disableMulticastLoopback`: True to disable multicast loopback, false otherwise.

<a id="discussion"></a>

## Discussion

By default, a multicast packet sent to a group to which the sending host itself belongs will be looped back for local delivery. `disableMulticastLoopback` disables this behavior and, if set, multicast packets will not be looped back to the sender.

> **Note**

> Only applies to multicast packets.
