> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aetransactionid](https://developer.apple.com/documentation/coreservices/aetransactionid)

# AETransactionID (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies a transaction ID.

## Declaration

```swift
typealias AETransactionID = Int32
```

<a id="discussion"></a>

## Discussion

A transaction is a sequence of Apple events that are sent back and forth between the client and server applications, beginning with the client’s initial request for a service. When you call the [AECreateAppleEvent(\_:\_:\_:\_:\_:\_:)](1448525-aecreateappleevent.md) function, you pass a value of type `AETransactionID` for the `transactionID` parameter. [ID Constants for the AECreateAppleEvent Function](apple_events/1542799-id_constants_for_the_aecreateapp.md) lists the valid constant values for a variable or parameter of this type.

# AETransactionID (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies a transaction ID.

## Declaration

```objectivec
typedef SInt32 AETransactionID;
```

<a id="discussion"></a>

## Discussion

A transaction is a sequence of Apple events that are sent back and forth between the client and server applications, beginning with the client’s initial request for a service. When you call the [AECreateAppleEvent](1448525-aecreateappleevent.md) function, you pass a value of type `AETransactionID` for the `transactionID` parameter. [ID Constants for the AECreateAppleEvent Function](1542799-id_constants_for_the_aecreateapp.md) lists the valid constant values for a variable or parameter of this type.
