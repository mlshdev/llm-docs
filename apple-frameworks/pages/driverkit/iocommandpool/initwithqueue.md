> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iocommandpool/initwithqueue

# initWithQueue

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual bool initWithQueue(IODispatchQueue *queue);
```

## Parameters

- `queue`: The IODispatchQueue that this command pool should synchronize with. This queue must have been allocated with the kIODispatchQueueReentrant option.

<a id="return-value"></a>

## Return Value

Returns true if command pool was successfully initialized.

<a id="discussion"></a>

## Discussion

Primary initializer for an IOCommandPool object.

Primary initializer for an IOCommandPool. Should probably use IOCommandPool::withQueue() as it is easier to use.
