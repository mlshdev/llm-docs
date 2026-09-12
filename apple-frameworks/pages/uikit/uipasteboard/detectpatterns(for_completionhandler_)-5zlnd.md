> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/detectpatterns(for:completionhandler:)-5zlnd](https://developer.apple.com/documentation/uikit/uipasteboard/detectpatterns(for:completionhandler:)-5zlnd)

# detectPatterns(for:completionHandler:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 15.0) · iPadOS 14.0+ (deprecated in 15.0) · Mac Catalyst 14.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Determines whether the first pasteboard item matches the specified patterns, without notifying the user.

> Use [detectPatterns(for:completionHandler:)](detectpatterns%28for_completionhandler_%29-23vwn.md) instead.

## Declaration

```swift
func detectPatterns(for patterns: Set<UIPasteboard.DetectionPattern>, completionHandler: @escaping (Result<Set<UIPasteboard.DetectionPattern>, any Error>) -> ())
```

## Parameters

- `patterns`: The patterns to detect on the pasteboard.
- `completionHandler`: A closure that the system invokes after detecting patterns on the pasteboard. The closure receives a `Result` instance that contains either a set with the patterns found on the pasteboard or an error if detection failed.

<a id="Discussion"></a>

## Discussion

Because this method only gives an indication of whether a pasteboard item matches a particular pattern and doesn’t allow the app to access the contents, the system doesn’t notify the user about reading the contents of the pasteboard.

## See Also

### Deprecated

- [isPersistent](ispersistent.md): Deprecated. A Boolean value that indicates whether the pasteboard is persistent.
- [setPersistent(\_:)](setpersistent%28__%29.md): Deprecated. A Boolean value that indicates whether the pasteboard is persistent.
- [detectPatterns(for:inItemSet:completionHandler:)](detectpatterns%28for_initemset_completionhandler_%29-29iwn.md): Deprecated. Determines whether pasteboard items match the specified patterns, without notifying the user.
- [detectValues(for:completionHandler:)](detectvalues%28for_completionhandler_%29-9p2ff.md): Deprecated. Determines whether the first pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [detectValues(for:inItemSet:completionHandler:)](detectvalues%28for_initemset_completionhandler_%29-8y0iw.md): Deprecated. Determines whether pasteboard items match the specified patterns, reading the contents if it finds a match.
