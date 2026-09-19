> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1472095-preemptive_function_attribute_se/gestaltmpcallableapisattr

# gestaltMPCallableAPIsAttr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

The Gestalt selector passed to determine the availability of preemptive system software functions. The `Gestalt` function produces a 32-bit value that you should test to determine which what type of preemptive calls are allowed.

## Declaration

```objectivec
gestaltMPCallableAPIsAttr = 'mpsc'
```
