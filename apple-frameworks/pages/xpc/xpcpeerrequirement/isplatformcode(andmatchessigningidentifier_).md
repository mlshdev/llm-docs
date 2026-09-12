> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcpeerrequirement/isplatformcode(andmatchessigningidentifier:)](https://developer.apple.com/documentation/xpc/xpcpeerrequirement/isplatformcode(andmatchessigningidentifier:))

# isPlatformCode(andMatchesSigningIdentifier:)

**Framework:** XPC  
**Kind:** Type Method  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Create a requirement that the peer is platform binary. If provided, additionally requires that the peer has the specified signing identifier.

## Declaration

```swift
static func isPlatformCode(andMatchesSigningIdentifier: String? = nil) -> XPCPeerRequirement
```

<a id="return-value"></a>

## Return Value

A `XPCPeerRequirement` object representing the requirement

<a id="discussion"></a>

## Discussion

- andMatchesSigningIdentifier: If non-nil, The signing identifier the peer must have
