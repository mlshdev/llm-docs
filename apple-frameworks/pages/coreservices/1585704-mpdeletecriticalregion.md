> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585704-mpdeletecriticalregion](https://developer.apple.com/documentation/coreservices/1585704-mpdeletecriticalregion)

# MPDeleteCriticalRegion

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Removes the specified critical region object.

## Declaration

```objectivec
OSStatus MPDeleteCriticalRegion(MPCriticalRegionID criticalRegion);
```

## Parameters

- `criticalRegion`: The critical region object you want to remove.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

Calling this function unblocks all tasks waiting to enter the critical region and their respective  [MPEnterCriticalRegion](1585622-mpentercriticalregion.md)  calls will return with the result code `kMPDeletedErr`.

Also see the function  [MPCreateCriticalRegion](1585663-mpcreatecriticalregion.md).

## See Also

### Handling Critical Regions

- [MPCreateCriticalRegion](1585663-mpcreatecriticalregion.md): Deprecated. Creates a critical region object.
- [MPEnterCriticalRegion](1585622-mpentercriticalregion.md): Deprecated. Attempts to enter a critical region.
- [MPExitCriticalRegion](1585758-mpexitcriticalregion.md): Deprecated. Exits a critical region.
