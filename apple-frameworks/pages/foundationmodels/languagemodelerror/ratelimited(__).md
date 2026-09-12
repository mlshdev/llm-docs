> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelerror/ratelimited(_:)](https://developer.apple.com/documentation/foundationmodels/languagemodelerror/ratelimited(_:))

# LanguageModelError.rateLimited(\_:)

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The session has been rate limited.

## Declaration

```swift
case rateLimited(LanguageModelError.RateLimited)
```

<a id="discussion"></a>

## Discussion

This failure can happen if you make too many requests in a short window. You can recover from this error by spacing your requests or reducing system load. The exact solution may be model dependent.

## See Also

### Session rate limited error

- [LanguageModelError.RateLimited](ratelimited.md): Information about a rate limiting event.
