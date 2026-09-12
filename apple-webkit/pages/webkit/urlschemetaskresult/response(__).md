> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/urlschemetaskresult/response(_:)](https://developer.apple.com/documentation/webkit/urlschemetaskresult/response(_:))

# URLSchemeTaskResult.response(\_:)

**Framework:** WebKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The response to return to WebKit. The response value must include the MIME type of the request resource.

## Declaration

```swift
case response(URLResponse)
```

<a id="discussion"></a>

## Discussion

This value is used to provide WebKit with the MIME type of the requested resource and its expected size. This must be added to the task result sequence at least once, but may be added multiple times if needed. It must be added to the sequence before any data values are.
