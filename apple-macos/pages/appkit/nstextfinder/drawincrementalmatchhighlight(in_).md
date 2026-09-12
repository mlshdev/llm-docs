> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinder/drawincrementalmatchhighlight(in:)](https://developer.apple.com/documentation/appkit/nstextfinder/drawincrementalmatchhighlight(in:))

# drawIncrementalMatchHighlight(in:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Override this method to draw custom highlighting.

## Declaration

```swift
class func drawIncrementalMatchHighlight(in rect: NSRect)
```

## Parameters

- `rect`: The rectangle that needs to be drawn highlighted in the current coordinate system.

<a id="Discussion"></a>

## Discussion

If [incrementalSearchingShouldDimContentView](incrementalsearchingshoulddimcontentview.md) is [false](https://developer.apple.com/documentation/swift/false), it is recommended to highlight incremental matches in your own view. However, some applications may choose to show incremental search values in a different manner.

This method is not recommended to be overridden. The text finder never calls it. The view calls it to get the standard highlight behavior. It is recommended that views use this method do draw the highlight for consistency and to allow Application Kit to tweak the behavior in the future. If the view wants custom drawing, then it should be implemented by the view.

The common usage pattern for this is: draw the background,  draw the incremental match highlights for the [incrementalMatchRanges](incrementalmatchranges.md), and then draw the text.

## See Also

### Incremental Search Configuration

- [incrementalMatchRanges](incrementalmatchranges.md): Array of incremental search matches posted on the main queue, which have been found during a background search.
- [isIncrementalSearchingEnabled](isincrementalsearchingenabled.md): Determines if incremental searching is enabled.
- [incrementalSearchingShouldDimContentView](incrementalsearchingshoulddimcontentview.md): Determines the type of incremental search feedback to be presented

# drawIncrementalMatchHighlightInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Override this method to draw custom highlighting.

## Declaration

```objectivec
+ (void) drawIncrementalMatchHighlightInRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle that needs to be drawn highlighted in the current coordinate system.

<a id="Discussion"></a>

## Discussion

If [incrementalSearchingShouldDimContentView](incrementalsearchingshoulddimcontentview.md) is [false](https://developer.apple.com/documentation/swift/false), it is recommended to highlight incremental matches in your own view. However, some applications may choose to show incremental search values in a different manner.

This method is not recommended to be overridden. The text finder never calls it. The view calls it to get the standard highlight behavior. It is recommended that views use this method do draw the highlight for consistency and to allow Application Kit to tweak the behavior in the future. If the view wants custom drawing, then it should be implemented by the view.

The common usage pattern for this is: draw the background,  draw the incremental match highlights for the [incrementalMatchRanges](incrementalmatchranges.md), and then draw the text.

## See Also

### Incremental Search Configuration

- [incrementalMatchRanges](incrementalmatchranges.md): Array of incremental search matches posted on the main queue, which have been found during a background search.
- [incrementalSearchingEnabled](isincrementalsearchingenabled.md): Determines if incremental searching is enabled.
- [incrementalSearchingShouldDimContentView](incrementalsearchingshoulddimcontentview.md): Determines the type of incremental search feedback to be presented
