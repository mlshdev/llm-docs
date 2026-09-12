> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585777-mpprocessorsscheduled](https://developer.apple.com/documentation/coreservices/1585777-mpprocessorsscheduled)

# MPProcessorsScheduled

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the number of active processors available on the host computer.

## Declaration

```objectivec
ItemCount MPProcessorsScheduled(void);
```

<a id="return_value"></a>

## Return Value

The number of active processors available on the host computer.

<a id="discussion"></a>

## Discussion

The number of active processors is defined as the number of processors scheduled to run tasks. This number varies while the system is running. Advanced power management facilities may stop or start scheduling processors in the system to control power consumption or to maintain a proper operating temperature.

See also the function  [MPProcessors](1585778-mpprocessors.md).

## See Also

### Determining Multiprocessing Services And Processor Availability

- [\_MPIsFullyInitialized](carbon_core/multiprocessing_services/1809315-_mpisfullyinitialized.md): Indicates whether Multiprocessing Services is available for use.
- [MPGetNextCpuID](1508189-mpgetnextcpuid.md): Deprecated. Obtains the next CPU ID in the list of physical processors of the specified memory coherence group.
- [MPProcessors](1585778-mpprocessors.md): Deprecated. Returns the number of processors on the host computer.
