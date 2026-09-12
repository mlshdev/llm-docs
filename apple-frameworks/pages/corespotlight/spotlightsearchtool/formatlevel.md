> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/formatlevel](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/formatlevel)

# SpotlightSearchTool.FormatLevel

**Framework:** CoreSpotlight  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Controls how tool responses are serialized for the model’s context window.

## Declaration

```swift
enum FormatLevel
```

<a id="overview"></a>

## Overview

The tool returns search results to the model as part of the generation context. The format level determines how those results are encoded:

- `.structured`: Full encoding with the highest fidelity, highest token cost. Best when the model needs to reason over attribute keys and values precisely (e.g., filtering, re-querying).
- `.compact`: Terse, line-oriented text encoding. Best for models with limited context.

## Topics

### Getting the format levels

- [SpotlightSearchTool.FormatLevel.compact](formatlevel/compact.md): Compact encoding
- [SpotlightSearchTool.FormatLevel.structured](formatlevel/structured.md): Full, structured encoded

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the tool behavior

- [configuration](configuration-swift.property.md): The configuration details for the search tool.
- [SpotlightSearchTool.Configuration](configuration-swift.struct.md): The configuration data to use when creating a Spotlight search tool.
- [SpotlightSearchTool.Guide](guide.md): A type you use to offer guidance about what search capabillities to employ during a session.
- [SpotlightSearchTool.GuidanceProfile](guidanceprofile.md): Options for which techniques to use to determine a match.
- [SpotlightSearchTool.GuidanceLevel](guidancelevel.md): Options for how to search your app’s content.
- [SpotlightSearchTool.ContentDomain](contentdomain.md): A content domain that defines which fields and attribute mappings are presented to the model during a focused search session.
