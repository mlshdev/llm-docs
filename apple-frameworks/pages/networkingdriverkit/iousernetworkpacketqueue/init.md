> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacketqueue/init](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketqueue/init)

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

Don’t call this method directly. Instead, use the [Create](../iousernetworkrxsubmissionqueue/create.md) method of the appropriate subclass.

## See Also

### Configuring the Packet Queue

- [free](free.md): Performs any final cleanup for the queue.
