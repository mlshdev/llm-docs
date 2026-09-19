> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mklocalsearchcompletion/title

# title (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

The title string associated with the point of interest.

## Declaration

```swift
var title: String { get }
```

<a id="Discussion"></a>

## Discussion

The local search completion object ensures this string isn’t empty.

## See Also

### Getting the search completions

- [subtitle](subtitle.md): The subtitle (if any) associated with the point of interest.
- [titleHighlightRanges](titlehighlightranges.md): The ranges of characters to highlight in the title string.
- [subtitleHighlightRanges](subtitlehighlightranges.md): The ranges of characters to highlight in the subtitle string.

# title (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

The title string associated with the point of interest.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSString * title;
```

<a id="Discussion"></a>

## Discussion

The local search completion object ensures this string isn’t empty.

## See Also

### Getting the search completions

- [subtitle](subtitle.md): The subtitle (if any) associated with the point of interest.
- [titleHighlightRanges](titlehighlightranges.md): The ranges of characters to highlight in the title string.
- [subtitleHighlightRanges](subtitlehighlightranges.md): The ranges of characters to highlight in the subtitle string.
