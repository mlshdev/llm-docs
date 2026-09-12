> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindsession/replaceall(searchquery:replacementstring:options:)](https://developer.apple.com/documentation/uikit/uifindsession/replaceall(searchquery:replacementstring:options:))

# replaceAll(searchQuery:replacementString:options:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Replaces all matching instances of the query string with the replacement string you provide.

## Declaration

```swift
func replaceAll(searchQuery: String, replacementString: String, options: UITextSearchOptions?)
```

## Parameters

- `searchQuery`: The string to search for and replace, the user provides through the search text field of the system find panel.
- `replacementString`: The replacement string, the user provides through the replace text field of the system find panel.
- `options`: The object containing all the configurable options for the search.

## See Also

### Managing session interactions

- [performSearch(query:options:)](performsearch%28query_options_%29.md): Initiates a search for the query string you provide.
- [performSingleReplacement(query:replacementString:options:)](performsinglereplacement%28query_replacementstring_options_%29.md): Replaces a single instance of the query string with the replacement string you provide.
- [highlightNextResult(in:)](highlightnextresult%28in_%29.md): Updates the highlighted result to the next or previous match.
- [invalidateFoundResults()](invalidatefoundresults%28%29.md): Invalidates the found ranges and updates the system find panel.

# replaceAllInstancesOfSearchQuery:withReplacementString:options: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Replaces all matching instances of the query string with the replacement string you provide.

## Declaration

```objectivec
- (void) replaceAllInstancesOfSearchQuery:(NSString *) searchQuery withReplacementString:(NSString *) replacementString options:(UITextSearchOptions *) options;
```

## Parameters

- `searchQuery`: The string to search for and replace, the user provides through the search text field of the system find panel.
- `replacementString`: The replacement string, the user provides through the replace text field of the system find panel.
- `options`: The object containing all the configurable options for the search.

## See Also

### Managing session interactions

- [performSearchWithQuery:options:](performsearch%28query_options_%29.md): Initiates a search for the query string you provide.
- [performSingleReplacementWithSearchQuery:replacementString:options:](performsinglereplacement%28query_replacementstring_options_%29.md): Replaces a single instance of the query string with the replacement string you provide.
- [highlightNextResultInDirection:](highlightnextresult%28in_%29.md): Updates the highlighted result to the next or previous match.
- [invalidateFoundResults](invalidatefoundresults%28%29.md): Invalidates the found ranges and updates the system find panel.
