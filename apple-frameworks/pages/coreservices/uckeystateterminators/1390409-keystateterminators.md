> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeystateterminators/1390409-keystateterminators](https://developer.apple.com/documentation/coreservices/uckeystateterminators/1390409-keystateterminators)

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
