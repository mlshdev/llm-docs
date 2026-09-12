> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/guide](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/guide)

# SpotlightSearchTool.Guide

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A type you use to offer guidance about what search capabillities to employ during a session.

## Declaration

```swift
struct Guide
```

<a id="overview"></a>

## Overview

Use this type to specify additional guidance about how you want the model to search your content. At configuration time, configure an instance of this structure and assign it to the [guide](configuration-swift.struct/guide.md) property of your configuration object. You use guidance options primarily to limit the types of searches the model performs or to scope searches to specific types of content. Adding guidance can help improve the efficiency of searches, especially if you eliminate search techniques that don’t apply to your content.

## Topics

### Creating the search tool

- [init(level:format:)](guide/init%28level_format_%29.md)

### Getting the guidance

- [level](guide/level.md): The guidance for the model to use during a session.
- [format](guide/format.md): The representation format for tool responses returned to the model.

### Setting the guidance levels

- [complete](guide/complete.md): A guide that uses all available search techniques.
- [dynamic(\_:)](guide/dynamic%28__%29.md): A guide that includes only the search techniques specified by the given profile.
- [focused(\_:)](guide/focused%28__%29.md): A guide that searches only the specified content domain using a compact, on-device-friendly schema.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the tool behavior

- [configuration](configuration-swift.property.md): The configuration details for the search tool.
- [SpotlightSearchTool.Configuration](configuration-swift.struct.md): The configuration data to use when creating a Spotlight search tool.
- [SpotlightSearchTool.GuidanceProfile](guidanceprofile.md): Options for which techniques to use to determine a match.
- [SpotlightSearchTool.GuidanceLevel](guidancelevel.md): Options for how to search your app’s content.
- [SpotlightSearchTool.ContentDomain](contentdomain.md): A content domain that defines which fields and attribute mappings are presented to the model during a focused search session.
- [SpotlightSearchTool.FormatLevel](formatlevel.md): Controls how tool responses are serialized for the model’s context window.
