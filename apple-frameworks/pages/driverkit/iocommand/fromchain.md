> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iocommand/fromchain](https://developer.apple.com/documentation/driverkit/iocommand/fromchain)

# FromChain

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static IOCommand * FromChain(queue_chain_t *link);
```

<a id="return-value"></a>

## Return Value

Queue used to queue commands.

<a id="discussion"></a>

## Discussion

Given the queue_chain_t from CommandChain, return the IOCommand instance.
