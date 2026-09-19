> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1390386-anonymous/kuctextbreakiteratemask

# kUCTextBreakIterateMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kUCTextBreakIterateMask = 1L << 2
```

<a id="discussion"></a>

## Discussion

The corresponding bit may be set to indicate to the `UCFindTextBreak` function that the specified starting offset is a known break of the type specified in the `breakType` parameter. This permits `UCFindTextBreak` to optimize its search for the subsequent break of the same type. When iterating through all the breaks of a particular type in a particular buffer, this bit should be set for all calls except the first (since the initial `startOffset` value may not be a known break of the specified type).
