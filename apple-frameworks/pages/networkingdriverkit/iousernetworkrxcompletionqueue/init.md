> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkrxcompletionqueue/init](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkrxcompletionqueue/init)

# init

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Initializes the packet submission queue.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

`YES` if initialization was successful, or `NO` if it wasn’t.

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. Instead, use the [Create](create.md) method to create a new [IOUserNetworkRxCompletionQueue](../iousernetworkrxcompletionqueue.md) object.

## See Also

### Creating the Completion Queue

- [Create](create.md): Creates a queue that you use to deliver packets received from your hardware device.
- [free](free.md): Performs any final cleanup for the queue.
