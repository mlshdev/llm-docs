> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kaedontreconnect](https://developer.apple.com/documentation/coreservices/kaedontreconnect)

# kAEDontReconnect

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var kAEDontReconnect: Int { get }
```

<a id="discussion"></a>

## Discussion

Deprecated and unsupported in macOS. The reconnection preference—the Apple Event Manager must not automatically try to reconnect if it receives a `sessClosedErr` result code from the PPC Toolbox. If you don’t set this flag, the Apple Event Manager automatically attempts to reconnect and reestablish the session.
