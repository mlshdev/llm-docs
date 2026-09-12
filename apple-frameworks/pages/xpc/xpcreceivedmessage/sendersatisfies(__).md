> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcreceivedmessage/sendersatisfies(_:)](https://developer.apple.com/documentation/xpc/xpcreceivedmessage/sendersatisfies(_:))

# senderSatisfies(\_:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Check whether the sender of the received message satisfies the specified requirement.

## Declaration

```swift
func senderSatisfies(_ requirement: XPCPeerRequirement) -> Bool
```

<a id="return-value"></a>

## Return Value

A `Bool` indicating whether the sender satisfies the requirement

<a id="discussion"></a>

## Discussion

- requirement: The requirement the peer must have
