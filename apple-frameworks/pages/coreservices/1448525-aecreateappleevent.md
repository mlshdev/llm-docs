> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448525-aecreateappleevent](https://developer.apple.com/documentation/coreservices/1448525-aecreateappleevent)

# AECreateAppleEvent(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates an Apple event with several important attributes but no parameters.

## Declaration

```swift
func AECreateAppleEvent(_ theAEEventClass: AEEventClass, _ theAEEventID: AEEventID, _ target: UnsafePointer<AEAddressDesc>!, _ returnID: AEReturnID, _ transactionID: AETransactionID, _ result: UnsafeMutablePointer<AppleEvent>!) -> OSErr
```

## Parameters

- `theAEEventClass`: The event class of the Apple event to create. This parameter becomes accessible through the `keyEventClassAttr` attribute of the Apple event. Some event classes are described in [Event Class Constants](apple_events/1527210-event_class_constants.md). See [AEEventClass](aeeventclass.md).
- `theAEEventID`: The event ID of the Apple event to create. This parameter becomes accessible through the `keyEventIDAttr `attribute of the Apple event. Some event IDs are described in [Event ID Constants](apple_events/1527223-event_id_constants.md). See [AEEventID](aeeventid.md).
- `target`: A pointer to an address descriptor. Before calling `AECreateAppleEvent`, you set the descriptor to identify the target (or server) application for the Apple event. This parameter becomes accessible through the `keyAddressAttr` attribute of the Apple event. See [AEAddressDesc](aeaddressdesc.md).
- `returnID`: The return ID for the created Apple event. If you pass a value of `kAutoGenerateReturnID`, the Apple Event Manager assigns the created Apple event a return ID that is unique to the current session. If you pass any other value, the Apple Event Manager assigns that value for the ID. This parameter becomes accessible through the `keyReturnIDAttr` attribute of the Apple event. The return ID constant is described in [ID Constants for the AECreateAppleEvent Function](apple_events/1542799-id_constants_for_the_aecreateapp.md). See [AEReturnID](aereturnid.md).
- `transactionID`: The transaction ID for this Apple event. A transaction is a sequence of Apple events that are sent back and forth between the client and server applications, beginning with the client’s initial request for a service. All Apple events that are part of a transaction must have the same transaction ID. You can specify the `kAnyTransactionID` constant if the Apple event is not one of a series of interdependent Apple events. This parameter becomes accessible through the `keyTransactionIDAttr` attribute of the Apple event. This transaction ID constant is described in [ID Constants for the AECreateAppleEvent Function](apple_events/1542799-id_constants_for_the_aecreateapp.md). See [AETransactionID](aetransactionid.md).
- `result`: A pointer to an Apple event. On successful return, the new Apple event. On error, a null descriptor (one with descriptor type `typeNull`). If the function returns successfully, your application should call the [AEDisposeDesc(\_:)](1444208-aedisposedesc.md) function to dispose of the resulting Apple event after it has finished using it. See the [AppleEvent](appleevent.md) data type.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

The `AECreateAppleEvent `function creates an empty Apple event. You can add parameters to the Apple event after you create it with the functions described in [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager). 

<a id="1770171"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

# AECreateAppleEvent (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates an Apple event with several important attributes but no parameters.

## Declaration

```objectivec
OSErr AECreateAppleEvent(AEEventClass theAEEventClass, AEEventID theAEEventID, const AEAddressDesc *target, AEReturnID returnID, AETransactionID transactionID, AppleEvent *result);
```

## Parameters

- `theAEEventClass`: The event class of the Apple event to create. This parameter becomes accessible through the `keyEventClassAttr` attribute of the Apple event. Some event classes are described in [Event Class Constants](1527210-event_class_constants.md). See [AEEventClass](aeeventclass.md).
- `theAEEventID`: The event ID of the Apple event to create. This parameter becomes accessible through the `keyEventIDAttr `attribute of the Apple event. Some event IDs are described in [Event ID Constants](1527223-event_id_constants.md). See [AEEventID](aeeventid.md).
- `target`: A pointer to an address descriptor. Before calling `AECreateAppleEvent`, you set the descriptor to identify the target (or server) application for the Apple event. This parameter becomes accessible through the `keyAddressAttr` attribute of the Apple event. See [AEAddressDesc](aeaddressdesc.md).
- `returnID`: The return ID for the created Apple event. If you pass a value of `kAutoGenerateReturnID`, the Apple Event Manager assigns the created Apple event a return ID that is unique to the current session. If you pass any other value, the Apple Event Manager assigns that value for the ID. This parameter becomes accessible through the `keyReturnIDAttr` attribute of the Apple event. The return ID constant is described in [ID Constants for the AECreateAppleEvent Function](1542799-id_constants_for_the_aecreateapp.md). See [AEReturnID](aereturnid.md).
- `transactionID`: The transaction ID for this Apple event. A transaction is a sequence of Apple events that are sent back and forth between the client and server applications, beginning with the client’s initial request for a service. All Apple events that are part of a transaction must have the same transaction ID. You can specify the `kAnyTransactionID` constant if the Apple event is not one of a series of interdependent Apple events. This parameter becomes accessible through the `keyTransactionIDAttr` attribute of the Apple event. This transaction ID constant is described in [ID Constants for the AECreateAppleEvent Function](1542799-id_constants_for_the_aecreateapp.md). See [AETransactionID](aetransactionid.md).
- `result`: A pointer to an Apple event. On successful return, the new Apple event. On error, a null descriptor (one with descriptor type `typeNull`). If the function returns successfully, your application should call the [AEDisposeDesc](1444208-aedisposedesc.md) function to dispose of the resulting Apple event after it has finished using it. See the [AppleEvent](appleevent.md) data type.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

The `AECreateAppleEvent `function creates an empty Apple event. You can add parameters to the Apple event after you create it with the functions described in [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager). 

<a id="1770171"></a>

### Version-Notes

Thread safe starting in OS X v10.2.
