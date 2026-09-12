> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1542799-id_constants_for_the_aecreateapp/kanytransactionid](https://developer.apple.com/documentation/coreservices/1542799-id_constants_for_the_aecreateapp/kanytransactionid)

# kAnyTransactionID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kAnyTransactionID = 0
```

<a id="discussion"></a>

## Discussion

You pass this value for the `transactionID` parameter of the [AECreateAppleEvent](../1448525-aecreateappleevent.md) function if the Apple event is not one of a series of interdependent Apple events.

A transaction is a sequence of Apple events that are sent back and forth between the client and server applications, beginning with the client’s initial request for a service. All Apple events that are part of a transaction must have the same transaction ID.
