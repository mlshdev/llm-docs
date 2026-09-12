> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585778-mpprocessors](https://developer.apple.com/documentation/coreservices/1585778-mpprocessors)

# MPProcessors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the number of processors on the host computer.

## Declaration

```objectivec
ItemCount MPProcessors(void);
```

<a id="return_value"></a>

## Return Value

The number of physical processors on the host computer.

<a id="discussion"></a>

## Discussion

See also the function  [MPProcessorsScheduled](1585777-mpprocessorsscheduled.md).

## See Also

### Determining Multiprocessing Services And Processor Availability

- [\_MPIsFullyInitialized](carbon_core/multiprocessing_services/1809315-_mpisfullyinitialized.md): Indicates whether Multiprocessing Services is available for use.
- [MPGetNextCpuID](1508189-mpgetnextcpuid.md): Deprecated. Obtains the next CPU ID in the list of physical processors of the specified memory coherence group.
- [MPProcessorsScheduled](1585777-mpprocessorsscheduled.md): Deprecated. Returns the number of active processors available on the host computer.
