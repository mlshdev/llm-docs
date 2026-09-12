> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/sksearchresults](https://developer.apple.com/documentation/coreservices/sksearchresults)

# SKSearchResults

**Framework:** Core Services  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.

## Declaration

```swift
class SKSearchResults
```

<a id="overview"></a>

## Overview

Defines an opaque data type representing the result of a search. To perform a query and generate search results, use [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md) or [SKSearchResultsCreateWithDocuments](1448629-sksearchresultscreatewithdocumen.md). To examine the result of a search, use [SKSearchResultsGetInfoInRange](1448618-sksearchresultsgetinfoinrange.md). For other operations on search results, see [Legacy Support for Synchronous Searching](search_kit.md#1655799).
