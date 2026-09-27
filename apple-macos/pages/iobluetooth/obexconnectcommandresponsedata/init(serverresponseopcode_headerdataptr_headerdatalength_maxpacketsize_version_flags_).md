> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/obexconnectcommandresponsedata/init(serverresponseopcode:headerdataptr:headerdatalength:maxpacketsize:version:flags:)

# init(serverResponseOpCode:headerDataPtr:headerDataLength:maxPacketSize:version:flags:)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

## Declaration

```swift
init(serverResponseOpCode: OBEXOpCode, headerDataPtr: UnsafeMutableRawPointer!, headerDataLength: Int, maxPacketSize: OBEXMaxPacketLength, version: OBEXVersion, flags: OBEXFlags)
```
