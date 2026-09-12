> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/guidanceprofile/dates](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/guidanceprofile/dates)

# dates

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether to determine matches using date or time values.

## Declaration

```swift
var dates: Bool?
```

<a id="discussion"></a>

## Discussion

Set the value of this property to `true` to give the model the option to filter results based on date or time values. For example, you might enable this option if your items contain a start date or end date. If you don’t specify a value for this property, the default value is `false`.

## See Also

### Specifying the supported search techniques

- [contentType](contenttype.md): A Boolean value that indicates whether to determine matches using an item’s type.
- [numericMatch](numericmatch.md): A Boolean value that indicates whether to determine matches using numerical values.
- [people](people.md): A Boolean value that indicates whether to determine matches using the presence of specific people.
- [similarityMatch](similaritymatch.md): A Boolean value that indicates whether to perform semantic similarity matching on your content.
- [textMatch](textmatch.md): A Boolean value that indicates whether to perform keyword-based text matching on your content.
