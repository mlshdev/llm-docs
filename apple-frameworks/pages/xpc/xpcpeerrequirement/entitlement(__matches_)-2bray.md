> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpcpeerrequirement/entitlement(_:matches:)-2bray

# entitlement(\_:matches:)

**Framework:** XPC  
**Kind:** Type Method  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Create a requirement that the peer has the specified entitlement with the matching string value

## Declaration

```swift
static func entitlement(_ entitlement: String, matches value: String) -> XPCPeerRequirement
```

<a id="return-value"></a>

## Return Value

A `XPCPeerRequirement` object representing the requirement

<a id="discussion"></a>

## Discussion

- entitlement: The entitlement to check.
- value: The string value to match
