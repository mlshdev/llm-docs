> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/protocolstack/applicationprotocols](https://developer.apple.com/documentation/network/nwparameters/protocolstack/applicationprotocols)

# applicationProtocols

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The array of application protocol options used by connections and listeners.

## Declaration

```swift
var applicationProtocols: [NWProtocolOptions] { get set }
```

<a id="Discussion"></a>

## Discussion

The array of application protocols is ordered with the closest to the application first, and the closest to the transport protocol last. For example, if you want to run the WebSocket protocol over TLS, the WebSocket protocol should come first, and the TLS protocol should come second.
