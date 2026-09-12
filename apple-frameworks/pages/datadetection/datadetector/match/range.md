> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/match/range](https://developer.apple.com/documentation/datadetection/datadetector/match/range)

# range

**Framework:** DataDetection  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The range of characters in the original text corresponding to the match.

## Declaration

```swift
let range: Range<String.Index>?
```

<a id="Discussion"></a>

## Discussion

Use this range to add visual highlighting or interactive UI controls to the displayed text.

To extract semantic information from a match, examine its details properties.

> **Note**

> Don’t use this range to infer semantic information from the matched string. Some values might be more complex to interpret than a direct usage of the matched string and may need interpretation, for example, a phone number with a spelled-out extension, such as “(415) 555-1212 ext. 9876”.

## See Also

### Match details

- [details](details.md): A property that contains the type and semantic data found in a match.
- [preferredHighlightStyle](preferredhighlightstyle.md): A value that suggests a highlight style for a match.
