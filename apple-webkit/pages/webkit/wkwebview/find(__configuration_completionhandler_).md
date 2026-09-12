> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/find(_:configuration:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebview/find(_:configuration:completionhandler:))

# find(\_:configuration:completionHandler:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS

Searches for the specified string in the web view’s content.

## Declaration

```swift
@MainActor @preconcurrency func find(_ string: String, configuration: WKFindConfiguration = .init(), completionHandler: @escaping @MainActor @Sendable (WKFindResult) -> Void)
```

## Parameters

- `string`: The search string to use.
- `configuration`: The search parameters. Use this object to specify whether the search is case sensitive, whether it moves forward or backward, and whether it wraps when it reaches the end of the page.
- `completionHandler`: The completion handler to call with the results of the search. This handler has no return value and takes the following parameter:

  - **result**: The object that contains the results of the search.

## See Also

### Searching the current page’s content

- [find(\_:configuration:)](find%28__configuration_%29.md): Searches for the specified string in the web view’s content.
- [WKFindConfiguration](../wkfindconfiguration.md): The configuration parameters to use when searching the contents of the web view.
- [WKFindResult](../wkfindresult.md): An object that contains the results of searching the web view’s contents.
