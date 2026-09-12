> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlight-search-tool](https://developer.apple.com/documentation/corespotlight/spotlight-search-tool)

# Spotlight search tool (Swift)

**Framework:** Core Spotlight  
**Kind:** API Collection

Make your app’s indexed content available to the system’s Foundation models as additional context to use when answering prompts.

<a id="overview"></a>

## Overview

Your app’s Spotlight search index provides fast access to your app’s content when you need to find something. The [SpotlightSearchTool](spotlightsearchtool.md) provides an efficient way for the Foundation Models framework to access the content in that index and use it to answer prompts. Include this tool in the Foundation Models session you use to run prompts that require your app’s custom content. Configure the search tool as needed to customize its behavior or the search behaviors.

## Topics

### Essentials

- [Making your indexed content available to Foundation Models](making-your-indexed-content-available-to-foundation-models.md): Make the content you index for Spotlight available to Foundation models to help generate responses to prompts.
- [Searching indexed content with natural language](searching-indexed-content-with-natural-language.md): Give a language model access to your app’s Core Spotlight index to enable natural-language queries over searchable content.

### Tool configuration

- [SpotlightSearchTool](spotlightsearchtool.md): A tool you use to make your app’s custom data available to Foundation Models.
- [SpotlightSearchTool.Configuration](spotlightsearchtool/configuration-swift.struct.md): The configuration data to use when creating a Spotlight search tool.

### Data sources

- [SearchSource](searchsource.md): A source of data for Spotlight to search.
- [CoreSpotlightSource](corespotlightsource.md): A search source that retrieves data from the app’s Spotlight index.
- [FileSource](filesource.md): A search source that retrieves indexed metadata from files and directories visible to Spotlight.
- [SearchableItemAttribute](searchableitemattribute.md): An attribute from a content item that the Spotlight search tool can include in search results.

### Tool customization

- [CustomStage](customstage.md): A custom processing stage the Spotlight search tool uses to identify search results.
- [SearchPipelineData](searchpipelinedata.md): The type you use to store the output from a custom stage.
- [SearchPipelineDataType](searchpipelinedatatype.md): Data types that a pipeline stage accepts or produces.
- [ScoredSearchableItem](scoredsearchableitem.md): A searchable item paired with a caller-assigned relevance score.

### Contact resolution

- [ContactResolver](contactresolver.md): An interface you use to help Foundation models resolve references to the person using the app.
- [ResolvedContact](resolvedcontact.md): Contact information to help a search query match references to a person or organization.

### Search results

- [SearchCount](searchcount.md): A scalar count result (e.g., “47 emails from John”).
- [SearchResultsTable](searchresultstable.md): Tabulated result data — rows with typed columns for display or spreadsheet export.
- [SearchStatistic](searchstatistic.md): A scalar statistic derived from search results (sum, average, max, min, median, stddev).
- [SearchTextResult](searchtextresult.md): LLM-generated text summary or analysis from a pipeline stage.

# Spotlight search tool (Objective-C)

**Framework:** Core Spotlight  
**Kind:** API Collection

Make your app’s indexed content available to the system’s Foundation models as additional context to use when answering prompts.

<a id="overview"></a>

## Overview

Your app’s Spotlight search index provides fast access to your app’s content when you need to find something. The [SpotlightSearchTool](spotlightsearchtool.md) provides an efficient way for the Foundation Models framework to access the content in that index and use it to answer prompts. Include this tool in the Foundation Models session you use to run prompts that require your app’s custom content. Configure the search tool as needed to customize its behavior or the search behaviors.

## Topics

### Essentials

- [Making your indexed content available to Foundation Models](making-your-indexed-content-available-to-foundation-models.md): Make the content you index for Spotlight available to Foundation models to help generate responses to prompts.
