> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcpeerrequirement](https://developer.apple.com/documentation/xpc/xpcpeerrequirement)

# XPCPeerRequirement

**Framework:** XPC  
**Kind:** Structure  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```swift
struct XPCPeerRequirement
```

## Topics

### Initializers

- [init(lightweightCodeRequirements:)](xpcpeerrequirement/init%28lightweightcoderequirements_%29.md)

### Type Methods

- [codeRequirement(\_:)](xpcpeerrequirement/coderequirement%28__%29.md): Create an XPCPeerRequirement from a ProcessCodeRequirement
- [entitlement(\_:matches:)](xpcpeerrequirement/entitlement%28__matches_%29-2bray.md): Create a requirement that the peer has the specified entitlement with the matching string value
- [entitlement(\_:matches:)](xpcpeerrequirement/entitlement%28__matches_%29-2ubq1.md): Create a requirement that the peer has the specified entitlement with the matching integer value
- [entitlement(\_:matches:)](xpcpeerrequirement/entitlement%28__matches_%29-6h77e.md): Create a requirement that the peer has the specified entitlement with the matching bool value
- [hasEntitlement(\_:)](xpcpeerrequirement/hasentitlement%28__%29.md): Create a requirement that the peer has the specified entitlement
- [isFromSameTeam(andMatchesSigningIdentifier:)](xpcpeerrequirement/isfromsameteam%28andmatchessigningidentifier_%29.md): Create a requirement that the peer is signed with the same team identifier as the current process. If provided, additionally requires that the peer has the specified signing identifier.
- [isPlatformCode(andMatchesSigningIdentifier:)](xpcpeerrequirement/isplatformcode%28andmatchessigningidentifier_%29.md): Create a requirement that the peer is platform binary. If provided, additionally requires that the peer has the specified signing identifier.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
