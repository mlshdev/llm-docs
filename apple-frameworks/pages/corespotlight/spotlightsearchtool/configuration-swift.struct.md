> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/configuration-swift.struct](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/configuration-swift.struct)

# SpotlightSearchTool.Configuration

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The configuration data to use when creating a Spotlight search tool.

## Declaration

```swift
struct Configuration
```

## Mentioned In

- [Making your indexed content available to Foundation Models](../making-your-indexed-content-available-to-foundation-models.md)

<a id="overview"></a>

## Overview

Use this structure to specify the data sources, guidance, and options for [SpotlightSearchTool](../spotlightsearchtool.md) to use when performing searches. Create an instance of this structure as part of the setup of the search tool, and configure it with the information you want. For more information about configuring the search tool, see [Making your indexed content available to Foundation Models](../making-your-indexed-content-available-to-foundation-models.md).

## Topics

### Configuring the search sources

- [sources](configuration-swift.struct/sources.md): The data sources and options to use during a search.

### Resolving contacts

- [contactResolver](configuration-swift.struct/contactresolver.md): A custom type you use to identify the owner of your app’s data.

### Customizing the output

- [guide](configuration-swift.struct/guide.md): Options you use to guide the search process that the tool uses to retrieve results.
- [customStages](configuration-swift.struct/customstages.md): Custom pipeline stages you use to help the Spotlight search tool generate results.

### Initializers

- [init(sources:guide:contactResolver:customStages:maximumResponseSize:)](configuration-swift.struct/init%28sources_guide_contactresolver_customstages_maximumresponsesize_%29.md)

### Instance Properties

- [maximumResponseSize](configuration-swift.struct/maximumresponsesize.md): The maximum number of UTF-8 characters of rendered tool output the search tool sends back to the model on a single call.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tool configuration

- [SpotlightSearchTool](../spotlightsearchtool.md): A tool you use to make your app’s custom data available to Foundation Models.
