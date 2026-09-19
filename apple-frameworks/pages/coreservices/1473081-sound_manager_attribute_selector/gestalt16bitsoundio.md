> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1473081-sound_manager_attribute_selector/gestalt16bitsoundio

# gestalt16BitSoundIO

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestalt16BitSoundIO = 7
```

<a id="discussion"></a>

## Discussion

Set if the built-in sound hardware is able to play and record 16-bit samples. This indicates that built-in hardware necessary to handle 16-bit data is available.

This bit is not defined for versions of the Sound Manager prior to version 3.0.
