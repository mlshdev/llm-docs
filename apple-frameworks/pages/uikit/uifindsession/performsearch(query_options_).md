> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindsession/performsearch(query:options:)](https://developer.apple.com/documentation/uikit/uifindsession/performsearch(query:options:))

# performSearch(query:options:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Initiates a search for the query string you provide.

## Declaration

```swift
func performSearch(query: String, options: UITextSearchOptions?)
```

## Parameters

- `query`: The string to search, the user provides through the search text field of the system find panel.
- `options`: The object containing all the configurable options for the search.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user initiates a search for a string in your app’s text content.

## See Also

### Managing session interactions

- [performSingleReplacement(query:replacementString:options:)](performsinglereplacement%28query_replacementstring_options_%29.md): Replaces a single instance of the query string with the replacement string you provide.
- [replaceAll(searchQuery:replacementString:options:)](replaceall%28searchquery_replacementstring_options_%29.md): Replaces all matching instances of the query string with the replacement string you provide.
- [highlightNextResult(in:)](highlightnextresult%28in_%29.md): Updates the highlighted result to the next or previous match.
- [invalidateFoundResults()](invalidatefoundresults%28%29.md): Invalidates the found ranges and updates the system find panel.

# performSearchWithQuery:options: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Initiates a search for the query string you provide.

## Declaration

```objectivec
- (void) performSearchWithQuery:(NSString *) query options:(UITextSearchOptions *) options;
```

## Parameters

- `query`: The string to search, the user provides through the search text field of the system find panel.
- `options`: The object containing all the configurable options for the search.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user initiates a search for a string in your app’s text content.

## See Also

### Managing session interactions

- [performSingleReplacementWithSearchQuery:replacementString:options:](performsinglereplacement%28query_replacementstring_options_%29.md): Replaces a single instance of the query string with the replacement string you provide.
- [replaceAllInstancesOfSearchQuery:withReplacementString:options:](replaceall%28searchquery_replacementstring_options_%29.md): Replaces all matching instances of the query string with the replacement string you provide.
- [highlightNextResultInDirection:](highlightnextresult%28in_%29.md): Updates the highlighted result to the next or previous match.
- [invalidateFoundResults](invalidatefoundresults%28%29.md): Invalidates the found ranges and updates the system find panel.
