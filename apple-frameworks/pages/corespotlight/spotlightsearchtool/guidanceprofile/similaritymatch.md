> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/guidanceprofile/similaritymatch](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/guidanceprofile/similaritymatch)

# similarityMatch

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether to perform semantic similarity matching on your content.

## Declaration

```swift
var similarityMatch: Bool?
```

<a id="discussion"></a>

## Discussion

Set the value of this property true `true` to give the model the option to perform semantic searches of content. This approach allows the search to return results that match the intent of the provided string and not just the actual search term. For example, if model performs a semantic match against the word “star”, the tool can match items that contain the text “star”, “sun”, or “Betelgeuse”. If you don’t specify a value for this property, the default value is `false`.

## See Also

### Specifying the supported search techniques

- [contentType](contenttype.md): A Boolean value that indicates whether to determine matches using an item’s type.
- [dates](dates.md): A Boolean value that indicates whether to determine matches using date or time values.
- [numericMatch](numericmatch.md): A Boolean value that indicates whether to determine matches using numerical values.
- [people](people.md): A Boolean value that indicates whether to determine matches using the presence of specific people.
- [textMatch](textmatch.md): A Boolean value that indicates whether to perform keyword-based text matching on your content.
