> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obextransporteventtype](https://developer.apple.com/documentation/iobluetooth/obextransporteventtype)

# OBEXTransportEventType (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias OBEXTransportEventType = UInt32
```

<a id="Discussion"></a>

## Discussion

Pass these types in the OBEXTransportEvent, and then pass the struct on to the session object once you have filled it out. This is how you can communicate with the session when events happen - if data is received, the type will be ‘kOBEXTransportEventTypeDataReceived’. if an error has occurred on your transport, like the remote target died, you can send a status event with a non-zero value. Since session objects will receive this status code on their event handlers, you should try to pass a useful status/error code, such as an IOReturn value.

## See Also

### DataTypes

- [OBEXTransportEvent](obextransportevent.md)

# OBEXTransportEventType (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef uint32_t OBEXTransportEventType;
```

<a id="Discussion"></a>

## Discussion

Pass these types in the OBEXTransportEvent, and then pass the struct on to the session object once you have filled it out. This is how you can communicate with the session when events happen - if data is received, the type will be ‘kOBEXTransportEventTypeDataReceived’. if an error has occurred on your transport, like the remote target died, you can send a status event with a non-zero value. Since session objects will receive this status code on their event handlers, you should try to pass a useful status/error code, such as an IOReturn value.

## See Also

### DataTypes

- [OBEXTransportEvent](obextransportevent.md)
