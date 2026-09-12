> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390433-anonymous/kuctextbreakclustermask](https://developer.apple.com/documentation/coreservices/1390433-anonymous/kuctextbreakclustermask)

# kUCTextBreakClusterMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kUCTextBreakClusterMask = 1L << 2
```

<a id="discussion"></a>

## Discussion

If the bit specified by this mask is set, boundaries of character clusters may be located. A cluster is a group of characters that should be treated as single text element for editing operations such as cursor movement. Typically this includes groups such as a base character followed by a sequence of combining characters, for example, a Hangul syllable represented as a sequence of conjoining jamo characters or an Indic consonant cluster.
