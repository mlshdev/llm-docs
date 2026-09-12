> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/find(_:configuration:)](https://developer.apple.com/documentation/webkit/wkwebview/find(_:configuration:))

# find(\_:configuration:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS

Searches for the specified string in the web view’s content.

## Declaration

```swift
@MainActor @preconcurrency func find(_ string: String, configuration: WKFindConfiguration = .init()) async throws -> WKFindResult
```

## Parameters

- `string`: The search string to use.
- `configuration`: The search parameters. Use this object to specify whether the search is case sensitive, whether it moves forward or backward, and whether it wraps when it reaches the end of the page.

<a id="return-value"></a>

## Return Value

The object that contains the results of the search.

## See Also

### Searching the current page’s content

- [find(\_:configuration:completionHandler:)](find%28__configuration_completionhandler_%29.md): Searches for the specified string in the web view’s content.
- [WKFindConfiguration](../wkfindconfiguration.md): The configuration parameters to use when searching the contents of the web view.
- [WKFindResult](../wkfindresult.md): An object that contains the results of searching the web view’s contents.
