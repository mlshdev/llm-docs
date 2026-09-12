> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tls/earlydataenabled(_:)](https://developer.apple.com/documentation/network/tls/earlydataenabled(_:))

# earlyDataEnabled(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Enable early data (0-RTT) for TLS.

## Declaration

```swift
func earlyDataEnabled(_ enabled: Bool) -> TLS
```

## Parameters

- `enabled`: True to enable early data, false otherwise.

<a id="discussion"></a>

## Discussion

> **Warning**

> This may have security implications for application data. In particular, TLS early data is replayable by a network attacker. You must account for this when sending data before the handshake is confirmed. See RFC 8446 for more information. You MUST NOT enable fast open without a specific application profile that defines its use.
