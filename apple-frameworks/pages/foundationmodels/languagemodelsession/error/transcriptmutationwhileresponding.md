> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/error/transcriptmutationwhileresponding](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/error/transcriptmutationwhileresponding)

# LanguageModelSession.Error.transcriptMutationWhileResponding

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A request mutated the session’s transcript while it was in progress.

## Declaration

```swift
case transcriptMutationWhileResponding
```

<a id="discussion"></a>

## Discussion

Do not modify the transcript while a request is being processed.

## See Also

### Getting the session errors

- [LanguageModelSession.Error.concurrentRequests](concurrentrequests.md): The session received multiple concurrent requests.
