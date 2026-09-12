> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindsession/highlightnextresult(in:)](https://developer.apple.com/documentation/uikit/uifindsession/highlightnextresult(in:))

# highlightNextResult(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Updates the highlighted result to the next or previous match.

## Declaration

```swift
func highlightNextResult(in direction: UITextStorageDirection)
```

## Parameters

- `direction`: The direction, either forward or backward, to move through the search results.

<a id="Discussion"></a>

## Discussion

The system calls this method when a person taps the next or previous button, or enters `Return` or `Shift+Return` on a hardware keyboard while the search field has focus.

## See Also

### Managing session interactions

- [performSearch(query:options:)](performsearch%28query_options_%29.md): Initiates a search for the query string you provide.
- [performSingleReplacement(query:replacementString:options:)](performsinglereplacement%28query_replacementstring_options_%29.md): Replaces a single instance of the query string with the replacement string you provide.
- [replaceAll(searchQuery:replacementString:options:)](replaceall%28searchquery_replacementstring_options_%29.md): Replaces all matching instances of the query string with the replacement string you provide.
- [invalidateFoundResults()](invalidatefoundresults%28%29.md): Invalidates the found ranges and updates the system find panel.

# highlightNextResultInDirection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Updates the highlighted result to the next or previous match.

## Declaration

```objectivec
- (void) highlightNextResultInDirection:(UITextStorageDirection) direction;
```

## Parameters

- `direction`: The direction, either forward or backward, to move through the search results.

<a id="Discussion"></a>

## Discussion

The system calls this method when a person taps the next or previous button, or enters `Return` or `Shift+Return` on a hardware keyboard while the search field has focus.

## See Also

### Managing session interactions

- [performSearchWithQuery:options:](performsearch%28query_options_%29.md): Initiates a search for the query string you provide.
- [performSingleReplacementWithSearchQuery:replacementString:options:](performsinglereplacement%28query_replacementstring_options_%29.md): Replaces a single instance of the query string with the replacement string you provide.
- [replaceAllInstancesOfSearchQuery:withReplacementString:options:](replaceall%28searchquery_replacementstring_options_%29.md): Replaces all matching instances of the query string with the replacement string you provide.
- [invalidateFoundResults](invalidatefoundresults%28%29.md): Invalidates the found ranges and updates the system find panel.
