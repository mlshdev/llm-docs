> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iotimerdispatchsource/init](https://developer.apple.com/documentation/driverkit/iotimerdispatchsource/init)

# init

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Handles the basic initialization of the dispatch source.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if initialization was successful, or [false](https://developer.apple.com/documentation/swift/false) if an error occurred.

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. Call [Create](create.md) when you want to create a new timer dispatch queue.

## See Also

### Configuring the Timer Source

- [Create](create.md): Creates and configures a timer dispatch object.
- [free](free.md): Performs any final cleanup for the timer dispatch source.
- [SetHandler](sethandler.md): Sets the handler block to run when the timer fires.
