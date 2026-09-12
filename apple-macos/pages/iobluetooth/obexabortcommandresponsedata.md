> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexabortcommandresponsedata](https://developer.apple.com/documentation/iobluetooth/obexabortcommandresponsedata)

# OBEXAbortCommandResponseData (Swift)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

Part of the OBEXSessionEvent structure.

## Declaration

```swift
struct OBEXAbortCommandResponseData
```

<a id="overview"></a>

## Overview

Is readable when the event is of type kOBEXSessionEventTypeAbortCommandResponseReceived (see OBEXSessionEventTypes).

## Topics

### Initializers

- [init()](obexabortcommandresponsedata/init%28%29.md)
- [init(serverResponseOpCode:headerDataPtr:headerDataLength:)](obexabortcommandresponsedata/init%28serverresponseopcode_headerdataptr_headerdatalength_%29.md)

### Instance Properties

- [headerDataLength](obexabortcommandresponsedata/headerdatalength.md)
- [headerDataPtr](obexabortcommandresponsedata/headerdataptr.md)
- [serverResponseOpCode](obexabortcommandresponsedata/serverresponseopcode.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [OBEXSessionEvent](obexsessionevent.md)
- [OBEXAbortCommandData](obexabortcommanddata.md): Part of the OBEXSessionEvent structure.
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

# OBEXAbortCommandResponseData (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

Part of the OBEXSessionEvent structure.

## Declaration

```objectivec
struct OBEXAbortCommandResponseData;
```

<a id="overview"></a>

## Overview

Is readable when the event is of type kOBEXSessionEventTypeAbortCommandResponseReceived (see OBEXSessionEventTypes).

## Topics

### Instance Properties

- [headerDataLength](obexabortcommandresponsedata/headerdatalength.md)
- [headerDataPtr](obexabortcommandresponsedata/headerdataptr.md)
- [serverResponseOpCode](obexabortcommandresponsedata/serverresponseopcode.md)

## See Also

### Data Types

- [OBEXSessionEvent](obexsessionevent.md)
- [OBEXAbortCommandData](obexabortcommanddata.md): Part of the OBEXSessionEvent structure.
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
