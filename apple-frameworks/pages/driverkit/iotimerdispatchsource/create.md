> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iotimerdispatchsource/create](https://developer.apple.com/documentation/driverkit/iotimerdispatchsource/create)

# Create

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Creates and configures a timer dispatch object.

## Declaration

```objectivec
static kern_return_t Create(IODispatchQueue *queue, IOTimerDispatchSource **source);
```

## Parameters

- `queue`: The dispatch queue on which to run any handler blocks.
- `source`: A variable for storing the dispatch source. On return, this variable contains the retained object. You are responsible for releasing this object.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

## See Also

### Configuring the Timer Source

- [init](init.md): Handles the basic initialization of the dispatch source.
- [free](free.md): Performs any final cleanup for the timer dispatch source.
- [SetHandler](sethandler.md): Sets the handler block to run when the timer fires.
