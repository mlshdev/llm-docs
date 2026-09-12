> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroutedatadelegate-7vt4b/receive(_:)](https://developer.apple.com/documentation/avsystemrouting/avsystemroutedatadelegate-7vt4b/receive(_:))

# receive(\_:)

**Framework:** AVSystemRouting  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Receives data sent from a connected remote applicaiton.

## Declaration

```swift
func receive(_ data: Data) async throws
```

## Parameters

- `data`: The data received from the remote app.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if processing the received data fails.
