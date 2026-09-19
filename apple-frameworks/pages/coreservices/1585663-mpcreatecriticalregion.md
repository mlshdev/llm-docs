> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1585663-mpcreatecriticalregion

# MPCreateCriticalRegion

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Creates a critical region object.

## Declaration

```objectivec
OSStatus MPCreateCriticalRegion(MPCriticalRegionID *criticalRegion);
```

## Parameters

- `criticalRegion`: On return, the `criticalRegion` contains the ID of the newly created critical region object.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

Also see the function  [MPDeleteCriticalRegion](1585704-mpdeletecriticalregion.md).

## See Also

### Handling Critical Regions

- [MPDeleteCriticalRegion](1585704-mpdeletecriticalregion.md): Deprecated. Removes the specified critical region object.
- [MPEnterCriticalRegion](1585622-mpentercriticalregion.md): Deprecated. Attempts to enter a critical region.
- [MPExitCriticalRegion](1585758-mpexitcriticalregion.md): Deprecated. Exits a critical region.
