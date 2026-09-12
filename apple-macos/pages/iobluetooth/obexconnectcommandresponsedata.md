> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexconnectcommandresponsedata](https://developer.apple.com/documentation/iobluetooth/obexconnectcommandresponsedata)

# OBEXConnectCommandResponseData (Swift)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

Part of the OBEXSessionEvent structure.

## Declaration

```swift
struct OBEXConnectCommandResponseData
```

<a id="overview"></a>

## Overview

Is readable when the event is of type kOBEXSessionEventTypeConnectCommandResponseReceived (see OBEXSessionEventTypes).

## Topics

### Initializers

- [init()](obexconnectcommandresponsedata/init%28%29.md)
- [init(serverResponseOpCode:headerDataPtr:headerDataLength:maxPacketSize:version:flags:)](obexconnectcommandresponsedata/init%28serverresponseopcode_headerdataptr_headerdatalength_maxpacketsize_version_flags_%29.md)

### Instance Properties

- [flags](obexconnectcommandresponsedata/flags.md)
- [headerDataLength](obexconnectcommandresponsedata/headerdatalength.md)
- [headerDataPtr](obexconnectcommandresponsedata/headerdataptr.md)
- [maxPacketSize](obexconnectcommandresponsedata/maxpacketsize.md)
- [serverResponseOpCode](obexconnectcommandresponsedata/serverresponseopcode.md)
- [version](obexconnectcommandresponsedata/version.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [OBEXSessionEvent](obexsessionevent.md)
- [OBEXAbortCommandData](obexabortcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXAbortCommandResponseData](obexabortcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandData](obexconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandData](obexdisconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandResponseData](obexdisconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXErrorData](obexerrordata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandData](obexgetcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandResponseData](obexgetcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandData](obexputcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandResponseData](obexputcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandData](obexsetpathcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandResponseData](obexsetpathcommandresponsedata.md): Part of the OBEXSessionEvent structure.

# OBEXConnectCommandResponseData (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

Part of the OBEXSessionEvent structure.

## Declaration

```objectivec
struct OBEXConnectCommandResponseData;
```

<a id="overview"></a>

## Overview

Is readable when the event is of type kOBEXSessionEventTypeConnectCommandResponseReceived (see OBEXSessionEventTypes).

## Topics

### Instance Properties

- [flags](obexconnectcommandresponsedata/flags.md)
- [headerDataLength](obexconnectcommandresponsedata/headerdatalength.md)
- [headerDataPtr](obexconnectcommandresponsedata/headerdataptr.md)
- [maxPacketSize](obexconnectcommandresponsedata/maxpacketsize.md)
- [serverResponseOpCode](obexconnectcommandresponsedata/serverresponseopcode.md)
- [version](obexconnectcommandresponsedata/version.md)

## See Also

### Data Types

- [OBEXSessionEvent](obexsessionevent.md)
- [OBEXAbortCommandData](obexabortcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXAbortCommandResponseData](obexabortcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandData](obexconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandData](obexdisconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandResponseData](obexdisconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXErrorData](obexerrordata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandData](obexgetcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandResponseData](obexgetcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandData](obexputcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandResponseData](obexputcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandData](obexsetpathcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandResponseData](obexsetpathcommandresponsedata.md): Part of the OBEXSessionEvent structure.
