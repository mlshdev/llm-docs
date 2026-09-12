> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tcp/ackstretchingdisabled(_:)](https://developer.apple.com/documentation/network/tcp/ackstretchingdisabled(_:))

# ackStretchingDisabled(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Disable ACK stretching.

## Declaration

```swift
func ackStretchingDisabled(_ disableAckStretching: Bool) -> TCP
```

## Parameters

- `disableAckStretching`: True to disable ACK stretching, false otherwise.

<a id="discussion"></a>

## Discussion

A boolean to cause TCP to disable ACK stretching (`TCP_SENDMOREACKS`).
