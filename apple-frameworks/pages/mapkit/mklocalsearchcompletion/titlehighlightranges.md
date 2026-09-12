> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearchcompletion/titlehighlightranges](https://developer.apple.com/documentation/mapkit/mklocalsearchcompletion/titlehighlightranges)

# titleHighlightRanges (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

The ranges of characters to highlight in the title string.

## Declaration

```swift
var titleHighlightRanges: [NSValue] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSValue](../../foundation/nsvalue.md) objects, each of which contains an [NSRange](../../foundation/nsrange-c.struct.md) type defining a range of characters in the [title](title.md) string. Use this property to identify the ranges of characters in the title string that you want to highlight. Highlighting the matching text of a search completion is optional, but it’s a best practice for providing helpful information to the user.

## See Also

### Getting the search completions

- [title](title.md): The title string associated with the point of interest.
- [subtitle](subtitle.md): The subtitle (if any) associated with the point of interest.
- [subtitleHighlightRanges](subtitlehighlightranges.md): The ranges of characters to highlight in the subtitle string.

# titleHighlightRanges (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

The ranges of characters to highlight in the title string.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<NSValue *> * titleHighlightRanges;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSValue](../../foundation/nsvalue.md) objects, each of which contains an [NSRange](../../foundation/nsrange-c.struct.md) type defining a range of characters in the [title](title.md) string. Use this property to identify the ranges of characters in the title string that you want to highlight. Highlighting the matching text of a search completion is optional, but it’s a best practice for providing helpful information to the user.

## See Also

### Getting the search completions

- [title](title.md): The title string associated with the point of interest.
- [subtitle](subtitle.md): The subtitle (if any) associated with the point of interest.
- [subtitleHighlightRanges](subtitlehighlightranges.md): The ranges of characters to highlight in the subtitle string.
