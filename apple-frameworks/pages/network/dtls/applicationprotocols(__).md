> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/dtls/applicationprotocols(_:)](https://developer.apple.com/documentation/network/dtls/applicationprotocols(_:))

# applicationProtocols(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Set application protocols supported by clients of this protocol.

## Declaration

```swift
func applicationProtocols(_ protocols: [String]) -> DTLS
```

<a id="discussion"></a>

## Discussion

Application layer protocol negotiation (ALPN) tokens describe the application protocol in use above DTLS.
