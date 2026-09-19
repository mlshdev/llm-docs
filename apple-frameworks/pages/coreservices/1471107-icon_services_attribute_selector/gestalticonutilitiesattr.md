> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1471107-icon_services_attribute_selector/gestalticonutilitiesattr

# gestaltIconUtilitiesAttr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltIconUtilitiesAttr = 'icon'
```

<a id="discussion"></a>

## Discussion

The `Gestalt` selector passed to determine which features of Icon Services are present. The `Gestalt` function produces a 32-bit value whose bits you should test to determine which Icon Services features are available.

Note: available in System 7.0, despite gestalt.
