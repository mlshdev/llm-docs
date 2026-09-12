> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390386-anonymous/kuctextbreakleadingedgemask](https://developer.apple.com/documentation/coreservices/1390386-anonymous/kuctextbreakleadingedgemask)

# kUCTextBreakLeadingEdgeMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kUCTextBreakLeadingEdgeMask = 1L << 0
```

<a id="discussion"></a>

## Discussion

If the corresponding bit is set, then the starting offset for the `UCFindTextBreak` function is assumed to be in the word containing the character following the offset; this is the normal case when searching forward. If the corresponding bit is clear, then the starting offset for `UCFindTextBreak` is assumed to be in the word containing the character preceding the offset; this is the normal case when searching backward.
