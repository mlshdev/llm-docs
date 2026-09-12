> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/error/concurrentrequests](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/error/concurrentrequests)

# LanguageModelSession.Error.concurrentRequests

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The session received multiple concurrent requests.

## Declaration

```swift
case concurrentRequests
```

<a id="discussion"></a>

## Discussion

A language model session only supports one request at a time. Wait for the current request to complete before starting another.

## See Also

### Getting the session errors

- [LanguageModelSession.Error.transcriptMutationWhileResponding](transcriptmutationwhileresponding.md): A request mutated the session’s transcript while it was in progress.
