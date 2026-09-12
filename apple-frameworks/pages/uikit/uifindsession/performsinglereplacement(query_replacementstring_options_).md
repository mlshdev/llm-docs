> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindsession/performsinglereplacement(query:replacementstring:options:)](https://developer.apple.com/documentation/uikit/uifindsession/performsinglereplacement(query:replacementstring:options:))

# performSingleReplacement(query:replacementString:options:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Replaces a single instance of the query string with the replacement string you provide.

## Declaration

```swift
func performSingleReplacement(query searchQuery: String, replacementString: String, options: UITextSearchOptions?)
```

## Parameters

- `searchQuery`: The string to search for and replace, the user provides through the search text field of the system find panel.
- `replacementString`: The replacement string, the user provides through the replace text field of the system find panel.
- `options`: The object containing all the configurable options for the search.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user initiates the replacement the text for a single match of a string in your app’s text content with the replacement string.

## See Also

### Managing session interactions

- [performSearch(query:options:)](performsearch%28query_options_%29.md): Initiates a search for the query string you provide.
- [replaceAll(searchQuery:replacementString:options:)](replaceall%28searchquery_replacementstring_options_%29.md): Replaces all matching instances of the query string with the replacement string you provide.
- [highlightNextResult(in:)](highlightnextresult%28in_%29.md): Updates the highlighted result to the next or previous match.
- [invalidateFoundResults()](invalidatefoundresults%28%29.md): Invalidates the found ranges and updates the system find panel.

# performSingleReplacementWithSearchQuery:replacementString:options: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Replaces a single instance of the query string with the replacement string you provide.

## Declaration

```objectivec
- (void) performSingleReplacementWithSearchQuery:(NSString *) searchQuery replacementString:(NSString *) replacementString options:(UITextSearchOptions *) options;
```

## Parameters

- `searchQuery`: The string to search for and replace, the user provides through the search text field of the system find panel.
- `replacementString`: The replacement string, the user provides through the replace text field of the system find panel.
- `options`: The object containing all the configurable options for the search.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user initiates the replacement the text for a single match of a string in your app’s text content with the replacement string.

## See Also

### Managing session interactions

- [performSearchWithQuery:options:](performsearch%28query_options_%29.md): Initiates a search for the query string you provide.
- [replaceAllInstancesOfSearchQuery:withReplacementString:options:](replaceall%28searchquery_replacementstring_options_%29.md): Replaces all matching instances of the query string with the replacement string you provide.
- [highlightNextResultInDirection:](highlightnextresult%28in_%29.md): Updates the highlighted result to the next or previous match.
- [invalidateFoundResults](invalidatefoundresults%28%29.md): Invalidates the found ranges and updates the system find panel.
