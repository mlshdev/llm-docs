> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_biquadm_setactivefiltersd](https://developer.apple.com/documentation/accelerate/vdsp_biquadm_setactivefiltersd)

# vDSP_biquadm_SetActiveFiltersD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Activates or deactivates individual sections in a double-precision, multichannel biquadratic filter.

## Declaration

```objectivec
extern void vDSP_biquadm_SetActiveFiltersD(vDSP_biquadm_SetupD __setup, const _Bool *__filter_states);
```

## Parameters

- `__setup`: The biquadratic filter setup object that the function updates.
- `__filter_states`: An array of Boolean values, each of which corresponds to a section in the biquadratic filter.

<a id="Discussion"></a>

## Discussion

For each section in a multichannel biquadratic filter, the corresponding Boolean value in `filter_states` sets the section to active or inactive. The apply function removes inactive filters from the processing chain. The biquadratic filter retains the state of inactive sections for future use.

## See Also

### Setting the filter state of a multichannel biquadratic filter

- [vDSP_biquadm_SetActiveFilters](vdsp_biquadm_setactivefilters.md): Activates or deactivates individual sections in a single-precision, multichannel biquadratic filter.
