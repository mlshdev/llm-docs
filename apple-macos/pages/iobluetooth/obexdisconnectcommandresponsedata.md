> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexdisconnectcommandresponsedata](https://developer.apple.com/documentation/iobluetooth/obexdisconnectcommandresponsedata)

# OBEXDisconnectCommandResponseData (Swift)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

Part of the OBEXSessionEvent structure.

## Declaration

```swift
struct OBEXDisconnectCommandResponseData
```

<a id="overview"></a>

## Overview

Is readable when the event is of type kOBEXSessionEventTypeDisconnectCommandResponseReceived (see OBEXSessionEventTypes).

## Topics

### Initializers

- [init()](obexdisconnectcommandresponsedata/init%28%29.md)
- [init(serverResponseOpCode:headerDataPtr:headerDataLength:)](obexdisconnectcommandresponsedata/init%28serverresponseopcode_headerdataptr_headerdatalength_%29.md)

### Instance Properties

- [headerDataLength](obexdisconnectcommandresponsedata/headerdatalength.md)
- [headerDataPtr](obexdisconnectcommandresponsedata/headerdataptr.md)
- [serverResponseOpCode](obexdisconnectcommandresponsedata/serverresponseopcode.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [OBEXSessionEvent](obexsessionevent.md)
- [OBEXAbortCommandData](obexabortcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXAbortCommandResponseData](obexabortcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandData](obexconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandResponseData](obexconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandData](obexdisconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXErrorData](obexerrordata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandData](obexgetcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandResponseData](obexgetcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandData](obexputcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandResponseData](obexputcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandData](obexsetpathcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandResponseData](obexsetpathcommandresponsedata.md): Part of the OBEXSessionEvent structure.

# OBEXDisconnectCommandResponseData (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

Part of the OBEXSessionEvent structure.

## Declaration

```objectivec
struct OBEXDisconnectCommandResponseData;
```

<a id="overview"></a>

## Overview

Is readable when the event is of type kOBEXSessionEventTypeDisconnectCommandResponseReceived (see OBEXSessionEventTypes).

## Topics

### Instance Properties

- [headerDataLength](obexdisconnectcommandresponsedata/headerdatalength.md)
- [headerDataPtr](obexdisconnectcommandresponsedata/headerdataptr.md)
- [serverResponseOpCode](obexdisconnectcommandresponsedata/serverresponseopcode.md)

## See Also

### Data Types

- [OBEXSessionEvent](obexsessionevent.md)
- [OBEXAbortCommandData](obexabortcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXAbortCommandResponseData](obexabortcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandData](obexconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandResponseData](obexconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandData](obexdisconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXErrorData](obexerrordata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandData](obexgetcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandResponseData](obexgetcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandData](obexputcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandResponseData](obexputcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandData](obexsetpathcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandResponseData](obexsetpathcommandresponsedata.md): Part of the OBEXSessionEvent structure.
