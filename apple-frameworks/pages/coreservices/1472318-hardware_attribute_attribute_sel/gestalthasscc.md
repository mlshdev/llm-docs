> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1472318-hardware_attribute_attribute_sel/gestalthasscc

# gestaltHasSCC

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltHasSCC = 4
```

<a id="discussion"></a>

## Discussion

The `gestaltHasSCC` bit is normally returned as 0 on the Macintosh IIfx and Macintosh Quadra 900 computers, which have intelligent I/O processors that isolate the hardware and make direct access to the SCC impossible. However, if the user has used the Compatibility Switch control panel to enable compatibility mode, `gestaltHasSCC` is set.
