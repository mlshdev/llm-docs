> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390386-anonymous/kuctextbreakgobackwardsmask](https://developer.apple.com/documentation/coreservices/1390386-anonymous/kuctextbreakgobackwardsmask)

# kUCTextBreakGoBackwardsMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kUCTextBreakGoBackwardsMask = 1L << 1
```

<a id="discussion"></a>

## Discussion

If the corresponding bit is set, then `UCFindTextBreak` searches backward from the value provided in its `startOffset` parameter to find the next text break. If the corresponding bit is clear, then `UCFindTextBreak` searches forward from the `startOffset` value to find the next text break.
