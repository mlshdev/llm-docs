> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osobject/setdispatchqueue

# SetDispatchQueue

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t SetDispatchQueue(const IODispatchQueueName name, IODispatchQueue *queue);
```

## See Also

### Managing an Object’s Dispatch Queue

- [CopyDispatchQueue](copydispatchqueue.md)
