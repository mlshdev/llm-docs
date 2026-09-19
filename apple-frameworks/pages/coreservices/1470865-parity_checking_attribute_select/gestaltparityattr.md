> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1470865-parity_checking_attribute_select/gestaltparityattr

# gestaltParityAttr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltParityAttr = 'prty'
```

<a id="discussion"></a>

## Discussion

The selector you pass to the `Gestalt` function to determine information about the machine’s parity-checking features.

Note that parity is not considered to be enabled unless all installed memory is parity RAM.
