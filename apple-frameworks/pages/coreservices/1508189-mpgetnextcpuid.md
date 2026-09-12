> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1508189-mpgetnextcpuid](https://developer.apple.com/documentation/coreservices/1508189-mpgetnextcpuid)

# MPGetNextCpuID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.7)

Obtains the next CPU ID in the list of physical processors of the specified memory coherence group.

## Declaration

```objectivec
OSStatus MPGetNextCpuID(MPCoherenceID owningCoherenceID, MPCpuID *cpuID);
```

## Parameters

- `owningCoherenceID`: The ID of the memory coherence group whose physical processor IDs you want to obtain. Pass `kMPInvalidIDErr`, as only one coherence group, internal RAM, is currently defined.
- `cpuID`: On return, `cpuID` points to the ID of the next physical processor.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

By iterating on this function (after calling  [MPProcessors](1585778-mpprocessors.md) , for example), you can obtain the IDs of all the processors available on the host computer. Generally, you would only use this function in diagnostic programs.

## See Also

### Determining Multiprocessing Services And Processor Availability

- [\_MPIsFullyInitialized](carbon_core/multiprocessing_services/1809315-_mpisfullyinitialized.md): Indicates whether Multiprocessing Services is available for use.
- [MPProcessors](1585778-mpprocessors.md): Deprecated. Returns the number of processors on the host computer.
- [MPProcessorsScheduled](1585777-mpprocessorsscheduled.md): Deprecated. Returns the number of active processors available on the host computer.
