> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/detectedvalues(for:initemset:)](https://developer.apple.com/documentation/uikit/uipasteboard/detectedvalues(for:initemset:))

# detectedValues(for:inItemSet:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS

Requests that the data detection system asynchronously identify the types of values that you specify for the pasteboard item, and return the values that it matches for each pasteboard.

## Declaration

```swift
func detectedValues(for keyPaths: Set<PartialKeyPath<UIPasteboard.DetectedValues>>, inItemSet itemSet: IndexSet?) async throws -> [UIPasteboard.DetectedValues]
```

## Parameters

- `keyPaths`: A set of key paths you use to indicate which types of values you want the data detection system to match.
- `itemSet`: A set of indexes you provide to indicate which pasteboard items the data detection system inspects to detect values.

<a id="return-value"></a>

## Return Value

An array of objects that contain the values the data detection system matches in each pasteboard item.

<a id="Discussion"></a>

## Discussion

Because this method gives the app access to the values it detects in a pasteboard item, the system notifies the user about reading the contents of the pasteboard.

## See Also

### Detecting patterns of content in pasteboard items

- [detectPatterns(for:completionHandler:)](detectpatterns%28for_completionhandler_%29-23vwn.md): Requests that the data detection system identify the patterns that you specify for the pasteboard, and provide the patterns that it matches to your closure.
- [detectedPatterns(for:)](detectedpatterns%28for_%29.md): Requests that the data detection system asynchronously identify the patterns that you specify for the pasteboard, and return the patterns that it matches.
- [detectPatterns(for:inItemSet:completionHandler:)](detectpatterns%28for_initemset_completionhandler_%29-7ubl1.md): Requests that the data detection system identify the patterns that you specify for the pasteboard items, and provide the patterns that it matches to your closure.
- [detectedPatterns(for:inItemSet:)](detectedpatterns%28for_initemset_%29.md): Requests that the data detection system asynchronously identify the patterns that you specify for the pasteboard items, and return the patterns that it matches.
- [detectValues(for:completionHandler:)](detectvalues%28for_completionhandler_%29-6adre.md): Requests that the data detection system identify the types of data that you specify for the pasteboard, and provide the values that it matches to your closure.
- [detectedValues(for:)](detectedvalues%28for_%29.md): Requests that the data detection system asynchronously identify the types of values that you specify for the pasteboard, and return the values that it matches.
- [detectValues(for:inItemSet:completionHandler:)](detectvalues%28for_initemset_completionhandler_%29-pm9l.md): Requests that the data detection system identify the types of data that you specify for the pasteboard items, and provide the values that it matches to your closure.
- [UIPasteboard.DetectedValues](detectedvalues.md): An object that contains common types of data that the data detection system matches for a pasteboard.
- [UIPasteboard.DetectionPattern](detectionpattern.md): An object that represents a pattern to detect for the pasteboard, such as a URL, text, or a number.
