> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsessionevent](https://developer.apple.com/documentation/iobluetooth/obexsessionevent)

# OBEXSessionEvent (Swift)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```swift
struct OBEXSessionEvent
```

<a id="Overview"></a>

## Overview

When a new session event occurs, your selector (or C callback) will be given an OBEXSessionEvent pointer, and in it will be information you might find interesting so that you can then reply back appropriately. For example, of you receive a kOBEXSessionEventTypeConnectCommandResponseReceived event, you can then parse out the information related to that event, and if all looks well to you, you could them send a “Get” command to get a file off of the OBEX server you just connected to.

## Topics

### Initializers

- [init()](obexsessionevent/init%28%29.md)
- [init(type:session:refCon:isEndOfEventData:reserved1:reserved2:u:)](obexsessionevent/init%28type_session_refcon_isendofeventdata_reserved1_reserved2_u_%29.md)

### Instance Properties

- [isEndOfEventData](obexsessionevent/isendofeventdata.md)
- [refCon](obexsessionevent/refcon.md)
- [reserved1](obexsessionevent/reserved1.md)
- [reserved2](obexsessionevent/reserved2.md)
- [session](obexsessionevent/session.md)
- [type](obexsessionevent/type.md)
- [u](obexsessionevent/u.md)

## See Also

### Data Types

- [OBEXAbortCommandData](obexabortcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXAbortCommandResponseData](obexabortcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandData](obexconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandResponseData](obexconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandData](obexdisconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandResponseData](obexdisconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXErrorData](obexerrordata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandData](obexgetcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandResponseData](obexgetcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandData](obexputcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandResponseData](obexputcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandData](obexsetpathcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandResponseData](obexsetpathcommandresponsedata.md): Part of the OBEXSessionEvent structure.

# OBEXSessionEvent (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```objectivec
struct OBEXSessionEvent;
```

<a id="Overview"></a>

## Overview

When a new session event occurs, your selector (or C callback) will be given an OBEXSessionEvent pointer, and in it will be information you might find interesting so that you can then reply back appropriately. For example, of you receive a kOBEXSessionEventTypeConnectCommandResponseReceived event, you can then parse out the information related to that event, and if all looks well to you, you could them send a “Get” command to get a file off of the OBEX server you just connected to.

## Topics

### Instance Properties

- [isEndOfEventData](obexsessionevent/isendofeventdata.md)
- [refCon](obexsessionevent/refcon.md)
- [reserved1](obexsessionevent/reserved1.md)
- [reserved2](obexsessionevent/reserved2.md)
- [session](obexsessionevent/session.md)
- [type](obexsessionevent/type.md)
- [u](obexsessionevent/u.md)

## See Also

### Data Types

- [OBEXAbortCommandData](obexabortcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXAbortCommandResponseData](obexabortcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandData](obexconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandResponseData](obexconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandData](obexdisconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandResponseData](obexdisconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXErrorData](obexerrordata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandData](obexgetcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandResponseData](obexgetcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandData](obexputcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandResponseData](obexputcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandData](obexsetpathcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandResponseData](obexsetpathcommandresponsedata.md): Part of the OBEXSessionEvent structure.
