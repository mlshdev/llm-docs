> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinder/isincrementalsearchingenabled](https://developer.apple.com/documentation/appkit/nstextfinder/isincrementalsearchingenabled)

# isIncrementalSearchingEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Determines if incremental searching is enabled.

## Declaration

```swift
var isIncrementalSearchingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), then the find bar will do incremental searches. If it returns [false](https://developer.apple.com/documentation/swift/false), then the find bar will behave regularly.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Incremental Search Configuration

- [drawIncrementalMatchHighlight(in:)](drawincrementalmatchhighlight%28in_%29.md): Override this method to draw custom highlighting.
- [incrementalMatchRanges](incrementalmatchranges.md): Array of incremental search matches posted on the main queue, which have been found during a background search.
- [incrementalSearchingShouldDimContentView](incrementalsearchingshoulddimcontentview.md): Determines the type of incremental search feedback to be presented

# incrementalSearchingEnabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Determines if incremental searching is enabled.

## Declaration

```objectivec
@property (getter=isIncrementalSearchingEnabled) BOOL incrementalSearchingEnabled;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), then the find bar will do incremental searches. If it returns [false](https://developer.apple.com/documentation/swift/false), then the find bar will behave regularly.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Incremental Search Configuration

- [drawIncrementalMatchHighlightInRect:](drawincrementalmatchhighlight%28in_%29.md): Override this method to draw custom highlighting.
- [incrementalMatchRanges](incrementalmatchranges.md): Array of incremental search matches posted on the main queue, which have been found during a background search.
- [incrementalSearchingShouldDimContentView](incrementalsearchingshoulddimcontentview.md): Determines the type of incremental search feedback to be presented
