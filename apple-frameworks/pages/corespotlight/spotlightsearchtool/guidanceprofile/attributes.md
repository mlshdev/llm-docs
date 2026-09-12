> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/guidanceprofile/attributes](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/guidanceprofile/attributes)

# attributes

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The relevant attributes from your content that you want to search.

## Declaration

```swift
var attributes: [SearchableItemAttribute]?
```

<a id="discussion"></a>

## Discussion

Use this property to specify only the attributes that are relevant for your content. If you provide a value for this property, the search tool considers only the attributes you specify. If you don’t specify a value for this property, or set the value to `nil`, all attributes are available during searches.
