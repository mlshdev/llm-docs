> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/osobject/3180942-setdispatchqueue

# SetDispatchQueue

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

## Declaration

```objectivec
virtual kern_return_t SetDispatchQueue(const IODispatchQueueName name, IODispatchQueue *queue);
```

```objectivec
kern_return_t SetDispatchQueue(const char *name, IODispatchQueue *queue, OSDispatchMethod supermethod);
```

## See Also

### Managing an Object's Dispatch Queue

- [CopyDispatchQueue](3180939-copydispatchqueue.md)
