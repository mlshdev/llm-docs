> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexputcommanddata](https://developer.apple.com/documentation/iobluetooth/obexputcommanddata)

# OBEXPutCommandData (Swift)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

Part of the OBEXSessionEvent structure.

## Declaration

```swift
struct OBEXPutCommandData
```

<a id="overview"></a>

## Overview

Is readable when the event is of type kOBEXSessionEventTypePutCommandReceived (see OBEXSessionEventTypes).

## Topics

### Initializers

- [init()](obexputcommanddata/init%28%29.md)
- [init(headerDataPtr:headerDataLength:bodyDataLeftToSend:)](obexputcommanddata/init%28headerdataptr_headerdatalength_bodydatalefttosend_%29.md)

### Instance Properties

- [bodyDataLeftToSend](obexputcommanddata/bodydatalefttosend.md)
- [headerDataLength](obexputcommanddata/headerdatalength.md)
- [headerDataPtr](obexputcommanddata/headerdataptr.md)

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
- [OBEXDisconnectCommandResponseData](obexdisconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXErrorData](obexerrordata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandData](obexgetcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandResponseData](obexgetcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandResponseData](obexputcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandData](obexsetpathcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandResponseData](obexsetpathcommandresponsedata.md): Part of the OBEXSessionEvent structure.

# OBEXPutCommandData (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

Part of the OBEXSessionEvent structure.

## Declaration

```objectivec
struct OBEXPutCommandData;
```

<a id="overview"></a>

## Overview

Is readable when the event is of type kOBEXSessionEventTypePutCommandReceived (see OBEXSessionEventTypes).

## Topics

### Instance Properties

- [bodyDataLeftToSend](obexputcommanddata/bodydatalefttosend.md)
- [headerDataLength](obexputcommanddata/headerdatalength.md)
- [headerDataPtr](obexputcommanddata/headerdataptr.md)

## See Also

### Data Types

- [OBEXSessionEvent](obexsessionevent.md)
- [OBEXAbortCommandData](obexabortcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXAbortCommandResponseData](obexabortcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandData](obexconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandResponseData](obexconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandData](obexdisconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandResponseData](obexdisconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXErrorData](obexerrordata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandData](obexgetcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandResponseData](obexgetcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandResponseData](obexputcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandData](obexsetpathcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandResponseData](obexsetpathcommandresponsedata.md): Part of the OBEXSessionEvent structure.
