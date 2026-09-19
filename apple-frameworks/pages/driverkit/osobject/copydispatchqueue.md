> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osobject/copydispatchqueue

# CopyDispatchQueue

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t CopyDispatchQueue(const IODispatchQueueName name, IODispatchQueue **queue);
```

## See Also

### Managing an Object’s Dispatch Queue

- [SetDispatchQueue](setdispatchqueue.md)
