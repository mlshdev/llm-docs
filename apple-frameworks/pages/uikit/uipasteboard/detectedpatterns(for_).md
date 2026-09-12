> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/detectedpatterns(for:)](https://developer.apple.com/documentation/uikit/uipasteboard/detectedpatterns(for:))

# detectedPatterns(for:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS

Requests that the data detection system asynchronously identify the patterns that you specify for the pasteboard, and return the patterns that it matches.

## Declaration

```swift
func detectedPatterns(for keyPaths: Set<PartialKeyPath<UIPasteboard.DetectedValues>>) async throws -> Set<PartialKeyPath<UIPasteboard.DetectedValues>>
```

## Parameters

- `keyPaths`: A set of key paths you use to indicate which types of patterns you want the data detection system to match.

<a id="return-value"></a>

## Return Value

A set of key paths that represent the patterns the data detection system matches in the pasteboard.

<a id="Discussion"></a>

## Discussion

Because this method only gives an indication of whether a pasteboard item matches a particular pattern and doesn’t allow the app to access the contents, the system doesn’t notify the user about reading the contents of the pasteboard.

## See Also

### Detecting patterns of content in pasteboard items

- [detectPatterns(for:completionHandler:)](detectpatterns%28for_completionhandler_%29-23vwn.md): Requests that the data detection system identify the patterns that you specify for the pasteboard, and provide the patterns that it matches to your closure.
- [detectPatterns(for:inItemSet:completionHandler:)](detectpatterns%28for_initemset_completionhandler_%29-7ubl1.md): Requests that the data detection system identify the patterns that you specify for the pasteboard items, and provide the patterns that it matches to your closure.
- [detectedPatterns(for:inItemSet:)](detectedpatterns%28for_initemset_%29.md): Requests that the data detection system asynchronously identify the patterns that you specify for the pasteboard items, and return the patterns that it matches.
- [detectValues(for:completionHandler:)](detectvalues%28for_completionhandler_%29-6adre.md): Requests that the data detection system identify the types of data that you specify for the pasteboard, and provide the values that it matches to your closure.
- [detectedValues(for:)](detectedvalues%28for_%29.md): Requests that the data detection system asynchronously identify the types of values that you specify for the pasteboard, and return the values that it matches.
- [detectValues(for:inItemSet:completionHandler:)](detectvalues%28for_initemset_completionhandler_%29-pm9l.md): Requests that the data detection system identify the types of data that you specify for the pasteboard items, and provide the values that it matches to your closure.
- [detectedValues(for:inItemSet:)](detectedvalues%28for_initemset_%29.md): Requests that the data detection system asynchronously identify the types of values that you specify for the pasteboard item, and return the values that it matches for each pasteboard.
- [UIPasteboard.DetectedValues](detectedvalues.md): An object that contains common types of data that the data detection system matches for a pasteboard.
- [UIPasteboard.DetectionPattern](detectionpattern.md): An object that represents a pattern to detect for the pasteboard, such as a URL, text, or a number.
