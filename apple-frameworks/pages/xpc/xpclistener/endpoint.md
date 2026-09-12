> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpclistener/endpoint](https://developer.apple.com/documentation/xpc/xpclistener/endpoint)

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
