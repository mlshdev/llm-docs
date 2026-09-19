> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/kuctextbreakleadingedgemask

# kUCTextBreakLeadingEdgeMask

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var kUCTextBreakLeadingEdgeMask: Int { get }
```

<a id="discussion"></a>

## Discussion

If the corresponding bit is set, then the starting offset for the `UCFindTextBreak` function is assumed to be in the word containing the character following the offset; this is the normal case when searching forward. If the corresponding bit is clear, then the starting offset for `UCFindTextBreak` is assumed to be in the word containing the character preceding the offset; this is the normal case when searching backward.
