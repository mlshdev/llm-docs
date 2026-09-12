> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/guidanceprofile/people](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/guidanceprofile/people)

# people

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether to determine matches using the presence of specific people.

## Declaration

```swift
var people: Bool?
```

<a id="discussion"></a>

## Discussion

Set the value of this property to `true` to give the model the option to match values based on references to people. For example, you might enable this option to match items with a specific creator or author value. If you don’t specify a value for this property, the default value is `false`.

## See Also

### Specifying the supported search techniques

- [contentType](contenttype.md): A Boolean value that indicates whether to determine matches using an item’s type.
- [dates](dates.md): A Boolean value that indicates whether to determine matches using date or time values.
- [numericMatch](numericmatch.md): A Boolean value that indicates whether to determine matches using numerical values.
- [similarityMatch](similaritymatch.md): A Boolean value that indicates whether to perform semantic similarity matching on your content.
- [textMatch](textmatch.md): A Boolean value that indicates whether to perform keyword-based text matching on your content.
