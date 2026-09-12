> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcodeincomingcallerror-swift.struct/filteredbydonotdisturb](https://developer.apple.com/documentation/callkit/cxerrorcodeincomingcallerror-swift.struct/filteredbydonotdisturb)

# filteredByDoNotDisturb

**Framework:** CallKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The system is filtering the incoming call because Do Not Disturb is active and the incoming caller isn’t a VIP.

## Declaration

```swift
static var filteredByDoNotDisturb: CXErrorCodeIncomingCallError.Code { get }
```

## See Also

### Errors

- [callUUIDAlreadyExists](calluuidalreadyexists.md): The incoming call UUID already exists.
- [filteredByBlockList](filteredbyblocklist.md): The system is filtering the incoming call because the user is blocking it.
- [unentitled](unentitled.md): The app doesn’t have the entitlement to receive incoming calls.
- [unknown](unknown.md): An unknown error occurred.
