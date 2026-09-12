> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodispatchqueue/init](https://developer.apple.com/documentation/driverkit/iodispatchqueue/init)

# init

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Initializes the dispatch queue object.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

`true` if initialization was successful, or `false` if it was unsuccessful.

<a id="Discussion"></a>

## Discussion

Do not call this method directly. Call [Create](create.md) when you want to create a new dispatch queue.

## See Also

### Creating a Dispatch Queue

- [Create](create.md): Creates a new dispatch queue object.
- [free](free.md): Performs any final cleanup for the dispatch queue object.
