> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iotimerdispatchsource/sethandler](https://developer.apple.com/documentation/driverkit/iotimerdispatchsource/sethandler)

# SetHandler

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Sets the handler block to run when the timer fires.

## Declaration

```objectivec
virtual kern_return_t SetHandler(OSAction *action);
```

## Parameters

- `action`: The [OSAction](../osaction.md) object that contains your custom callback method. The dispatch source object retains your action object until you call this method again or cancel the dispatch source.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../error-codes.md).

## See Also

### Configuring the Timer Source

- [Create](create.md): Creates and configures a timer dispatch object.
- [init](init.md): Handles the basic initialization of the dispatch source.
- [free](free.md): Performs any final cleanup for the timer dispatch source.
