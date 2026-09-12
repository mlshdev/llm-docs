> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindsession/invalidatefoundresults()](https://developer.apple.com/documentation/uikit/uifindsession/invalidatefoundresults())

# invalidateFoundResults() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Invalidates the found ranges and updates the system find panel.

## Declaration

```swift
func invalidateFoundResults()
```

<a id="Discussion"></a>

## Discussion

If the [searchText](../uifindinteraction/searchtext.md) for the find interaction is non-empty, a call to this method this triggers a call to [performSearch(query:options:)](performsearch%28query_options_%29.md) immediately after to begin a new search.

## See Also

### Managing session interactions

- [performSearch(query:options:)](performsearch%28query_options_%29.md): Initiates a search for the query string you provide.
- [performSingleReplacement(query:replacementString:options:)](performsinglereplacement%28query_replacementstring_options_%29.md): Replaces a single instance of the query string with the replacement string you provide.
- [replaceAll(searchQuery:replacementString:options:)](replaceall%28searchquery_replacementstring_options_%29.md): Replaces all matching instances of the query string with the replacement string you provide.
- [highlightNextResult(in:)](highlightnextresult%28in_%29.md): Updates the highlighted result to the next or previous match.

# invalidateFoundResults (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Invalidates the found ranges and updates the system find panel.

## Declaration

```objectivec
- (void) invalidateFoundResults;
```

<a id="Discussion"></a>

## Discussion

If the [searchText](../uifindinteraction/searchtext.md) for the find interaction is non-empty, a call to this method this triggers a call to [performSearchWithQuery:options:](performsearch%28query_options_%29.md) immediately after to begin a new search.

## See Also

### Managing session interactions

- [performSearchWithQuery:options:](performsearch%28query_options_%29.md): Initiates a search for the query string you provide.
- [performSingleReplacementWithSearchQuery:replacementString:options:](performsinglereplacement%28query_replacementstring_options_%29.md): Replaces a single instance of the query string with the replacement string you provide.
- [replaceAllInstancesOfSearchQuery:withReplacementString:options:](replaceall%28searchquery_replacementstring_options_%29.md): Replaces all matching instances of the query string with the replacement string you provide.
- [highlightNextResultInDirection:](highlightnextresult%28in_%29.md): Updates the highlighted result to the next or previous match.
