> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinder/incrementalsearchingshoulddimcontentview](https://developer.apple.com/documentation/appkit/nstextfinder/incrementalsearchingshoulddimcontentview)

# incrementalSearchingShouldDimContentView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Determines the type of incremental search feedback to be presented

## Declaration

```swift
var incrementalSearchingShouldDimContentView: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), then when an incremental search begins, the `findBarContainer` instance’s parent `contentView` will be dimmed, except for the locations of the incremental matches. If [false](https://developer.apple.com/documentation/swift/false), then the incremental matches will not be highlighted automatically, but you can use incrementalMatchRanges to highlight the matches yourself.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Incremental Search Configuration

- [drawIncrementalMatchHighlight(in:)](drawincrementalmatchhighlight%28in_%29.md): Override this method to draw custom highlighting.
- [incrementalMatchRanges](incrementalmatchranges.md): Array of incremental search matches posted on the main queue, which have been found during a background search.
- [isIncrementalSearchingEnabled](isincrementalsearchingenabled.md): Determines if incremental searching is enabled.

# incrementalSearchingShouldDimContentView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Determines the type of incremental search feedback to be presented

## Declaration

```objectivec
@property BOOL incrementalSearchingShouldDimContentView;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), then when an incremental search begins, the `findBarContainer` instance’s parent `contentView` will be dimmed, except for the locations of the incremental matches. If [false](https://developer.apple.com/documentation/swift/false), then the incremental matches will not be highlighted automatically, but you can use incrementalMatchRanges to highlight the matches yourself.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Incremental Search Configuration

- [drawIncrementalMatchHighlightInRect:](drawincrementalmatchhighlight%28in_%29.md): Override this method to draw custom highlighting.
- [incrementalMatchRanges](incrementalmatchranges.md): Array of incremental search matches posted on the main queue, which have been found during a background search.
- [incrementalSearchingEnabled](isincrementalsearchingenabled.md): Determines if incremental searching is enabled.
