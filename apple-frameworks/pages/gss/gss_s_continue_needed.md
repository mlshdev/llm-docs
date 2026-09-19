> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gss/gss_s_continue_needed

# GSS_S_CONTINUE_NEEDED

**Interface language:** Objective-C

**Framework:** GSS  
**Kind:** Macro  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

A request for continuation during context establishment.

## Declaration

```objectivec
#define GSS_S_CONTINUE_NEEDED
```

## See Also

### Token Macros

- [GSS_S_DUPLICATE_TOKEN](gss_s_duplicate_token.md): The detection of a duplicate per-message token.
- [GSS_S_OLD_TOKEN](gss_s_old_token.md): The detection of a timed-out per-message token.
- [GSS_S_UNSEQ_TOKEN](gss_s_unseq_token.md): The detection of a reordered (early) per-message token.
- [GSS_S_GAP_TOKEN](gss_s_gap_token.md): The detection of a skipped predecessor token.
