> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1472318-hardware_attribute_attribute_sel/gestalthardwareattr

# gestaltHardwareAttr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltHardwareAttr = 'hdwr'
```

<a id="discussion"></a>

## Discussion

The selector you pass to the Gestalt function to determine low-level hardware configuration attributes.

Never infer the existence of certain hardware or software features from the responses that `Gestalt` returns when you pass it this selector.
