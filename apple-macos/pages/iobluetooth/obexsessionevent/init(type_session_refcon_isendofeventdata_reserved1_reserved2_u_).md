> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/obexsessionevent/init(type:session:refcon:isendofeventdata:reserved1:reserved2:u:)

# init(type:session:refCon:isEndOfEventData:reserved1:reserved2:u:)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

## Declaration

```swift
init(type: OBEXSessionEventType, session: OBEXSessionRef!, refCon: UnsafeMutableRawPointer!, isEndOfEventData: DarwinBoolean, reserved1: UnsafeMutableRawPointer!, reserved2: UnsafeMutableRawPointer!, u: OBEXSessionEvent.__Unnamed_union_u)
```
