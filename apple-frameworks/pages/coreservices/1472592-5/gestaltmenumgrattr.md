> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1472592-5/gestaltmenumgrattr

# gestaltMenuMgrAttr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltMenuMgrAttr = 'menu'
```

<a id="discussion"></a>

## Discussion

The `Gestalt` selector passed to determine what features of the Menu Manager are present. This selector is available with Mac OS 8.5 and later. Passing `gestaltMenuMgrAttr` produces a 32-bit value whose bits you should test to determine what Menu Manager functionality is available.
