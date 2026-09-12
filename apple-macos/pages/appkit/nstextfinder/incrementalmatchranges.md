> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinder/incrementalmatchranges](https://developer.apple.com/documentation/appkit/nstextfinder/incrementalmatchranges)

# incrementalMatchRanges (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Array of incremental search matches posted on the main queue, which have been found during a background search.

## Declaration

```swift
var incrementalMatchRanges: [NSValue] { get }
```

<a id="Discussion"></a>

## Discussion

This array is updated periodically on the main queue as the incremental search operation on a background queue finds matches. You can use this property when incrementalSearchingShouldDimContentView is [false](https://developer.apple.com/documentation/swift/false) to know where to draw highlights for incremental matches.

If no incremental search is active, or there are no matches found, this array will be empty. If an incremental search is currently in progress, but not yet complete, this will return all the ranges found so far.

This array is key-value observing compliant and can be observed to know when to update your highlights. When [new](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/new) and [old](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/old) options are used, the key-value observing change dictionary provides the ranges (and their indexes) that are added or removed. This allows the invalidation of the minimal region necessary to sync highlights with the receiver’s results.

## See Also

### Incremental Search Configuration

- [drawIncrementalMatchHighlight(in:)](drawincrementalmatchhighlight%28in_%29.md): Override this method to draw custom highlighting.
- [isIncrementalSearchingEnabled](isincrementalsearchingenabled.md): Determines if incremental searching is enabled.
- [incrementalSearchingShouldDimContentView](incrementalsearchingshoulddimcontentview.md): Determines the type of incremental search feedback to be presented

# incrementalMatchRanges (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Array of incremental search matches posted on the main queue, which have been found during a background search.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSValue *> * incrementalMatchRanges;
```

<a id="Discussion"></a>

## Discussion

This array is updated periodically on the main queue as the incremental search operation on a background queue finds matches. You can use this property when incrementalSearchingShouldDimContentView is [false](https://developer.apple.com/documentation/swift/false) to know where to draw highlights for incremental matches.

If no incremental search is active, or there are no matches found, this array will be empty. If an incremental search is currently in progress, but not yet complete, this will return all the ranges found so far.

This array is key-value observing compliant and can be observed to know when to update your highlights. When [NSKeyValueObservingOptionNew](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/new) and [NSKeyValueObservingOptionOld](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/old) options are used, the key-value observing change dictionary provides the ranges (and their indexes) that are added or removed. This allows the invalidation of the minimal region necessary to sync highlights with the receiver’s results.

## See Also

### Incremental Search Configuration

- [drawIncrementalMatchHighlightInRect:](drawincrementalmatchhighlight%28in_%29.md): Override this method to draw custom highlighting.
- [incrementalSearchingEnabled](isincrementalsearchingenabled.md): Determines if incremental searching is enabled.
- [incrementalSearchingShouldDimContentView](incrementalsearchingshoulddimcontentview.md): Determines the type of incremental search feedback to be presented
