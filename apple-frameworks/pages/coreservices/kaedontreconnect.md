> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/kaedontreconnect

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
