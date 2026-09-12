> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/guidanceprofile](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/guidanceprofile)

# SpotlightSearchTool.GuidanceProfile

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Options for which techniques to use to determine a match.

## Declaration

```swift
struct GuidanceProfile
```

<a id="overview"></a>

## Overview

When you configure the [SpotlightSearchTool](../spotlightsearchtool.md) with the [SpotlightSearchTool.GuidanceLevel.dynamic(\_:)](guidancelevel/dynamic%28__%29.md) guidance option, you provide an instance of this structure. Configure the structure with the search techniques you want to allow or disallow, and might do so to prevent searches using techniques that don’t apply to your content. If you don’t specify a value for a property, the tool doesn’t use that search option.

In addition to specifying what types of searches to perform, you can also specify which of your content’s attributes to consider when looking for matches. The default behavior searches all of the attributes present for your content, but you can specify a custom set of attributes if you want the tool to ignore certain values.

## Topics

### Creating the guidance profile

- [init(textMatch:similarityMatch:numericMatch:dates:people:contentType:attributes:)](guidanceprofile/init%28textmatch_similaritymatch_numericmatch_dates_people_contenttype_attributes_%29.md)

### Specifying the supported search techniques

- [contentType](guidanceprofile/contenttype.md): A Boolean value that indicates whether to determine matches using an item’s type.
- [dates](guidanceprofile/dates.md): A Boolean value that indicates whether to determine matches using date or time values.
- [numericMatch](guidanceprofile/numericmatch.md): A Boolean value that indicates whether to determine matches using numerical values.
- [people](guidanceprofile/people.md): A Boolean value that indicates whether to determine matches using the presence of specific people.
- [similarityMatch](guidanceprofile/similaritymatch.md): A Boolean value that indicates whether to perform semantic similarity matching on your content.
- [textMatch](guidanceprofile/textmatch.md): A Boolean value that indicates whether to perform keyword-based text matching on your content.

### Getting the relevant attributes

- [attributes](guidanceprofile/attributes.md): The relevant attributes from your content that you want to search.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the tool behavior

- [configuration](configuration-swift.property.md): The configuration details for the search tool.
- [SpotlightSearchTool.Configuration](configuration-swift.struct.md): The configuration data to use when creating a Spotlight search tool.
- [SpotlightSearchTool.Guide](guide.md): A type you use to offer guidance about what search capabillities to employ during a session.
- [SpotlightSearchTool.GuidanceLevel](guidancelevel.md): Options for how to search your app’s content.
- [SpotlightSearchTool.ContentDomain](contentdomain.md): A content domain that defines which fields and attribute mappings are presented to the model during a focused search session.
- [SpotlightSearchTool.FormatLevel](formatlevel.md): Controls how tool responses are serialized for the model’s context window.
