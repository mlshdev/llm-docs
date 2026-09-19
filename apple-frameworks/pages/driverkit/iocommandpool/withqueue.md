> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iocommandpool/withqueue

# withQueue

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static IOCommandPoolPtr withQueue(IODispatchQueue *queue);
```

## Parameters

- `queue`: The IODispatchQueue that this command pool should synchronize with. This queue must have been allocated with the kIODispatchQueueReentrant option. Returns a pointer to an instance of IOCommandPool if successful, otherwise NULL.

<a id="discussion"></a>

## Discussion

Primary factory method for the IOCommandPool class

The withQueue method is what is known as a factory method. It creates a new instance of an IOCommandPool and returns a pointer to that object.
