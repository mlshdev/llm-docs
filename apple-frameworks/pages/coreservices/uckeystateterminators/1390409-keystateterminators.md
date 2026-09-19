> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/uckeystateterminators/1390409-keystateterminators

# keyStateTerminators (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An array of default dead-key state terminators, described as values of type [UCKeyCharSeq](../uckeycharseq.md); the value `keyStateTerminators[0]` is the terminator for state 1, and so on.

## Declaration

```swift
var keyStateTerminators: UCKeyCharSeq
```

# keyStateTerminators (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An array of default dead-key state terminators, described as values of type [UCKeyCharSeq](../uckeycharseq.md); the value `keyStateTerminators[0]` is the terminator for state 1, and so on.

## Declaration

```objectivec
UCKeyCharSeq keyStateTerminators[1];
```
