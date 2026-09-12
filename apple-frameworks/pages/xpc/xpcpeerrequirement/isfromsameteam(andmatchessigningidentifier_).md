> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcpeerrequirement/isfromsameteam(andmatchessigningidentifier:)](https://developer.apple.com/documentation/xpc/xpcpeerrequirement/isfromsameteam(andmatchessigningidentifier:))

# isFromSameTeam(andMatchesSigningIdentifier:)

**Framework:** XPC  
**Kind:** Type Method  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Create a requirement that the peer is signed with the same team identifier as the current process. If provided, additionally requires that the peer has the specified signing identifier.

## Declaration

```swift
static func isFromSameTeam(andMatchesSigningIdentifier: String? = nil) -> XPCPeerRequirement
```

<a id="return-value"></a>

## Return Value

A `XPCPeerRequirement` object representing the requirement

<a id="discussion"></a>

## Discussion

- andMatchesSigningIdentifier: If non-nil, The signing identifier the peer must have
