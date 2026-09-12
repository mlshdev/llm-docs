> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kanytransactionid](https://developer.apple.com/documentation/coreservices/kanytransactionid)

# kAnyTransactionID

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var kAnyTransactionID: Int { get }
```

<a id="discussion"></a>

## Discussion

You pass this value for the `transactionID` parameter of the [AECreateAppleEvent(\_:\_:\_:\_:\_:\_:)](1448525-aecreateappleevent.md) function if the Apple event is not one of a series of interdependent Apple events.

A transaction is a sequence of Apple events that are sent back and forth between the client and server applications, beginning with the client’s initial request for a service. All Apple events that are part of a transaction must have the same transaction ID.
