> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/carbon_core/multiprocessing_services/1809315-_mpisfullyinitialized](https://developer.apple.com/documentation/coreservices/carbon_core/multiprocessing_services/1809315-_mpisfullyinitialized)

# \_MPIsFullyInitialized

**Interface language:** Objective-C

**Framework:** Core Services

Indicates whether Multiprocessing Services is available for use.

## Declaration

```objectivec
Boolean _MPIsFullyInitialized (
   void
);
```

<a id="return_value"></a>

## Return Value

If true, Multiprocessing Services is available for use; otherwise, false.

## See Also

### Determining Multiprocessing Services And Processor Availability

- [MPGetNextCpuID](../../1508189-mpgetnextcpuid.md): Deprecated. Obtains the next CPU ID in the list of physical processors of the specified memory coherence group.
- [MPProcessors](../../1585778-mpprocessors.md): Deprecated. Returns the number of processors on the host computer.
- [MPProcessorsScheduled](../../1585777-mpprocessorsscheduled.md): Deprecated. Returns the number of active processors available on the host computer.
