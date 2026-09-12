> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/detectvalues(for:initemset:completionhandler:)-8y0iw](https://developer.apple.com/documentation/uikit/uipasteboard/detectvalues(for:initemset:completionhandler:)-8y0iw)

# detectValues(for:inItemSet:completionHandler:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 15.0) · iPadOS 14.0+ (deprecated in 15.0) · Mac Catalyst 14.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Determines whether pasteboard items match the specified patterns, reading the contents if it finds a match.

> Use [detectValues(for:inItemSet:completionHandler:)](detectvalues%28for_initemset_completionhandler_%29-pm9l.md) instead.

## Declaration

```swift
func detectValues(for patterns: Set<UIPasteboard.DetectionPattern>, inItemSet itemSet: IndexSet?, completionHandler: @escaping (Result<[[UIPasteboard.DetectionPattern : Any]], any Error>) -> ())
```

## Parameters

- `patterns`: The patterns to detect on the pasteboard.
- `itemSet`: An index set with each integer value identifying a pasteboard item positionally in the pasteboard. Pass in nil to request all pasteboard items.
- `completionHandler`: A closure that the system invokes after detecting patterns on the pasteboard. The closure receives a `Result` instance that contains either an array of dictionaries with the patterns and the associated values found on the pasteboard or an error if detection failed. If `Result` contains an array, the index of each element in the array corresponds to the pasteboard item index specified in `itemSet`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Calling this method notifies the user that the app has read the contents of the pasteboard.

For details about the types returned for each pattern, see [UIPasteboard.DetectionPattern](detectionpattern.md).

## See Also

### Deprecated

- [isPersistent](ispersistent.md): Deprecated. A Boolean value that indicates whether the pasteboard is persistent.
- [setPersistent(\_:)](setpersistent%28__%29.md): Deprecated. A Boolean value that indicates whether the pasteboard is persistent.
- [detectPatterns(for:completionHandler:)](detectpatterns%28for_completionhandler_%29-5zlnd.md): Deprecated. Determines whether the first pasteboard item matches the specified patterns, without notifying the user.
- [detectPatterns(for:inItemSet:completionHandler:)](detectpatterns%28for_initemset_completionhandler_%29-29iwn.md): Deprecated. Determines whether pasteboard items match the specified patterns, without notifying the user.
- [detectValues(for:completionHandler:)](detectvalues%28for_completionhandler_%29-9p2ff.md): Deprecated. Determines whether the first pasteboard item matches the specified patterns, reading the contents if it finds a match.
