> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1585758-mpexitcriticalregion

# MPExitCriticalRegion

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Exits a critical region.

## Declaration

```objectivec
OSStatus MPExitCriticalRegion(MPCriticalRegionID criticalRegion);
```

## Parameters

- `criticalRegion`: The ID of the critical region you want to exit.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965). If the task does not own the critical region specified by `criticalRegion`, `MPExitCriticalRegion` returns `kMPInsufficientResourcesErr`.

<a id="discussion"></a>

## Discussion

This function decrements the use count of the critical region object. When the use count reaches zero, ownership of the critical region object is released (which allows another task to use the critical region).

Also see the function  [MPEnterCriticalRegion](1585622-mpentercriticalregion.md).

## See Also

### Handling Critical Regions

- [MPCreateCriticalRegion](1585663-mpcreatecriticalregion.md): Deprecated. Creates a critical region object.
- [MPDeleteCriticalRegion](1585704-mpdeletecriticalregion.md): Deprecated. Removes the specified critical region object.
- [MPEnterCriticalRegion](1585622-mpentercriticalregion.md): Deprecated. Attempts to enter a critical region.
