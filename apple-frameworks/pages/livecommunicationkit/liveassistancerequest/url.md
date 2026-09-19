> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistancerequest/url

# url

**Framework:** LiveCommunicationKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

The FaceTime-generated URL for this request.

## Declaration

```swift
let url: URL
```

<a id="Discussion"></a>

## Discussion

Forward this URL to your backend in your implementations of [prepareAssistanceRequest(\_:)](../liveassistanceextension/prepareassistancerequest%28__%29.md) and [resumeRequest(\_:)](../liveassistanceextension/resumerequest%28__%29.md). When opened, this URL matches an interpreter and joins the call.

FaceTime generates this URL. Your extension only needs to pass it to your backend.

## See Also

### Working with request properties

- [id](id.md): A unique identifier that relates the request to a conversation in the FaceTime framework.
