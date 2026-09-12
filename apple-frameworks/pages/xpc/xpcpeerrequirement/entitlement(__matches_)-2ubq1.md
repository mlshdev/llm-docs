> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcpeerrequirement/entitlement(_:matches:)-2ubq1](https://developer.apple.com/documentation/xpc/xpcpeerrequirement/entitlement(_:matches:)-2ubq1)

# entitlement(\_:matches:)

**Framework:** XPC  
**Kind:** Type Method  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Create a requirement that the peer has the specified entitlement with the matching integer value

## Declaration

```swift
static func entitlement(_ entitlement: String, matches value: Int) -> XPCPeerRequirement
```

<a id="return-value"></a>

## Return Value

A `XPCPeerRequirement` object representing the requirement

<a id="discussion"></a>

## Discussion

- entitlement: The entitlement to check.
- value: The int value to match
