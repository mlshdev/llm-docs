> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obextransportevent](https://developer.apple.com/documentation/iobluetooth/obextransportevent)

# OBEXTransportEvent (Swift)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```swift
struct OBEXTransportEvent
```

<a id="Overview"></a>

## Overview

You will need to construcy these when data is received, and then pass a pointer to it to one of the incoming data methods defined below. Pass 0 as your status if data was received OK. Otherwise, you can put your own error code in there. For the transport type, be sure to use one of the defined types above.

## Topics

### Initializers

- [init()](obextransportevent/init%28%29.md)
- [init(type:status:dataPtr:dataLength:)](obextransportevent/init%28type_status_dataptr_datalength_%29.md)

### Instance Properties

- [dataLength](obextransportevent/datalength.md)
- [dataPtr](obextransportevent/dataptr.md)
- [status](obextransportevent/status.md)
- [type](obextransportevent/type.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### DataTypes

- [OBEXTransportEventType](obextransporteventtype.md)

# OBEXTransportEvent (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```objectivec
struct OBEXTransportEvent;
```

<a id="Overview"></a>

## Overview

You will need to construcy these when data is received, and then pass a pointer to it to one of the incoming data methods defined below. Pass 0 as your status if data was received OK. Otherwise, you can put your own error code in there. For the transport type, be sure to use one of the defined types above.

## Topics

### Instance Properties

- [dataLength](obextransportevent/datalength.md)
- [dataPtr](obextransportevent/dataptr.md)
- [status](obextransportevent/status.md)
- [type](obextransportevent/type.md)

## See Also

### DataTypes

- [OBEXTransportEventType](obextransporteventtype.md)
