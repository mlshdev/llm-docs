> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tls/applicationprotocols(_:)](https://developer.apple.com/documentation/network/tls/applicationprotocols(_:))

# applicationProtocols(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set application protocols supported by clients of this protocol.

## Declaration

```swift
func applicationProtocols(_ protocols: [String]) -> TLS
```

<a id="discussion"></a>

## Discussion

Application layer protocol negotiation (ALPN) tokens describe the application protocol in use above TLS.
