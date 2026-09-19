> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/callkit/cxerrorcodeincomingcallerror-swift.struct/unentitled

# unentitled

**Framework:** CallKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The app doesn’t have the entitlement to receive incoming calls.

## Declaration

```swift
static var unentitled: CXErrorCodeIncomingCallError.Code { get }
```

## See Also

### Errors

- [callUUIDAlreadyExists](calluuidalreadyexists.md): The incoming call UUID already exists.
- [filteredByBlockList](filteredbyblocklist.md): The system is filtering the incoming call because the user is blocking it.
- [filteredByDoNotDisturb](filteredbydonotdisturb.md): The system is filtering the incoming call because Do Not Disturb is active and the incoming caller isn’t a VIP.
- [unknown](unknown.md): An unknown error occurred.
