> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/ip/receivetimecalculated(_:)](https://developer.apple.com/documentation/network/ip/receivetimecalculated(_:))

# receiveTimeCalculated(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Configure IP to calculate receive time for inbound packets.

## Declaration

```swift
func receiveTimeCalculated(_ calculateReceiveTime: Bool) -> IP
```

## Parameters

- `calculateReceiveTime`: True to calculate receive time, false otherwise.
