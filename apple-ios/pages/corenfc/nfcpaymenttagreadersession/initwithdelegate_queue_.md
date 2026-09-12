> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcpaymenttagreadersession/initwithdelegate:queue:](https://developer.apple.com/documentation/corenfc/nfcpaymenttagreadersession/initwithdelegate:queue:)

# initWithDelegate:queue:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new session instance for processing NFC payment tags.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<NFCTagReaderSessionDelegate>) delegate queue:(dispatch_queue_t) queue;
```

## Parameters

- `delegate`: A delegate to receive callbacks about discovered tags and session life cycle events. The session holds a weak reference to the delegate.
- `queue`: A dispatch queue on which to perform delegate callbacks. The session object retains the provided dispatch queue. If this value is `nil`, the framework creates an internal serial dispatch queue for the session.

<a id="return-value"></a>

## Return Value

A new [NFCPaymentTagReaderSession](../nfcpaymenttagreadersession.md) instance.

<a id="discussion"></a>

## Discussion

> **Note**

> The superclass’ initializer [initWithPollingOption:delegate:queue:](../nfctagreadersession/initwithpollingoption_delegate_queue_.md) only accepts [NFCPollingISO14443](../nfctagreadersession/pollingoption/iso14443.md) and ignores all other options.

## See Also

### Creating a tag reader session

- [NFCTagReaderSessionDelegate](../nfctagreadersessiondelegate-5gxiw.md): A protocol that an object implements to receive callbacks sent from an NFC tag reader session.
