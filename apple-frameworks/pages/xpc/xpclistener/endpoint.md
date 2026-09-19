> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpclistener/endpoint

# endpoint

**Framework:** XPC  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

Creates an endpoint from the listener.

## Declaration

```swift
var endpoint: XPCEndpoint { get }
```

<a id="return-value"></a>

## Return Value

This returns a new endpoint struct that can be used to establish a connection with this listener.
